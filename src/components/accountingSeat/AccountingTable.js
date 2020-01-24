import React, { Component, Fragment } from 'react';
import CommonTable from 'components/common/commonTable';
import { Col, Button, Row } from 'react-bootstrap';
import styles from './voucherStateTable.module.css';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getConfigVoucher, setTableDataInvolvement, salesAffectedStateValidate, salesAffectedSubCalculation, salesAffectedStateConfirm } from '../../actions';
import InputText from 'components/form/inputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCheck } from '@fortawesome/free-solid-svg-icons';
import NotificationMessage from 'components/common/notificationMessage';
import { selectFilter } from 'react-bootstrap-table2-filter';
import { validateField } from 'lib/FieldValidations';
import moment from 'moment';
import InputDropdown from 'components/form/inputDropdown';
import { P_ASIEN_CONT } from 'constants/ConfigProcessNames';


class AccountingTable extends Component {

    constructor(props) {
        super(props);
        this.inputRefs = {};
        this.state = {
            rowSelected: [],
            showError: false,
            errorMessage: '',
            selectedCheck: [],
            checksByPage: [],
            globalStateAfect: null
        }

        this.rowErrors = []

    }

    componentDidMount = () => {
        const { idOperacion } = this.props
        this.props.getConfigVoucher({ cod_proceso: P_ASIEN_CONT, idOperacion });
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.productsUpdate) {
            nextProps.productsUpdate.forEach(field => {
                if (field.error && field.type_error === 1 && !this.rowErrors[field.nimovcli]) {
                    this.rowErrors[field.nimovcli] = true;
                    this.setState({ showError: 'true', errorMessage: 'No se soporta selección Manual de Stock.' })
                }
            });
        }
    }

    componentWillUnmount = () => {
        const items = this.getSelectedCheck();
        const { idOperacion } = this.props;

        if (items.length) {
            this.props.salesAffectedStateConfirm({ idOperacion, items })
        }
    }


    getColumns = () => {
        const { config, theme } = this.props;

        const rows = config.campos.map((field) => {
            const campoId = field.idCampo.trim()
            return {
                dataField: campoId,
                text: (field.label) ? ((campoId === 'fec_emis' || campoId === 'comprob_nro' || campoId === 'comprob_desc' || campoId === 'fec_vto') ? '' : field.label) : '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: this.getStyleColumn(field),
                hidden: !field.visible,
                filter: (campoId === 'fec_emis' || campoId === 'comprob_nro' || campoId === 'comprob_desc' || campoId === 'fec_vto') ? selectFilter({
                    options: this.getFilterOptions(campoId, field),
                    className: `${theme.inputFilter} mt-2`,
                    onFilter: filterVal => this.setState({ filterVal }),
                    placeholder: field.label,
                }) : null,
                formatter: ((field.editable || field.mascara)) ? ((cell, row, rowIndex) => {
                    return this.renderFormat(field, cell, row)
                }) : null
            }

        });

        rows.push(
            {
                dataField: 'error',
                text: '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '3%', 'textAlign': 'center' },
                formatter: ((cell, row, rowIndex) => {
                    if (row.error) {
                        if (row.type_error === 2) {
                            const message = (row.type_error === 2) ? 'error Stock Insuficiente' : ''
                            return (
                                <FontAwesomeIcon icon={faComment} title={message} />
                            )
                        } else if (row.type_error === 1) {
                            //this.setState({ showError: 'true', errorMessage: 'No es valido para seleccion manual.' })
                        }
                    } else {
                        return null
                    }
                }),

            }
        )

        return rows;
    }

    getFilterOptions = (idField, field) => {
        const { products } = this.props;
        const optionsExits = [];
        const result = [];
        products.Items.forEach(row => {
            if (row[idField] && !optionsExits[row[idField]]) {
                const labelValue = (field.mascara) ? this.getValueMask(row[idField], field.mascara) : row[idField];
                optionsExits[row[idField]] = true;
                result.push({ value: row[idField], label: labelValue })
            }
        });
        return result
    }

    handleCloseError = () => {
        this.setState({ showError: false })
    }

    getStyleColumn = (field) => {
        const idField = field.idCampo.trim();
        let style = {};

        switch (idField) {
            case 'fec_emis':
            case 'fec_vto':
                style = { width: '12%' }
                break;
            case 'estado_orig':
            case 'cod_unid':
                style = { width: '8%' }
                break;
            case 'estado_afec':
                style = { width: '170px' }
                break;
            default:
                style = { width: '10%' }
                break;

        }

        if (field.requerido === '1') {
            style.color = 'red';
        }

        return style;
    }

    handleSetFocus = (input, rowId) => {
        const nextRef = this.inputRefs[input][rowId];
        if (input === 'fec_entrega') {
            nextRef.current.setFocus();
        } else if (nextRef.current && nextRef.current.element) {
            nextRef.current.element.focus();
        }
    }

    validateAfectImport = (row, field, value) => {
        const { idOperacion } = this.props;
        const items = [{ Nimovcli: row.nimovcli, Nitem: row.nitem, imp_afec: value }];
        const selected = (this.state.selectedCheck) ? this.state.selectedCheck : [];

        if (field.valid) {
            let message = '';
            if (!validateField(value, field.valid)) {
                message = `El campo ${field.label} es requerido.`;
                this.setState({ showError: true, errorMessage: message });
            } else {
                selected.push(row.niprod);
                this.setState({ selectedCheck: selected });
                this.props.salesAffectedStateValidate({ idOperacion, items });
            }
        }

    }

    handleSubCalculation = (params, field) => {
        if (field.valid) {
            let message = '';
            if (!validateField(params.precio_unit, field.valid)) {
                message = `El campo ${field.label} es requerido.`;
                this.setState({ showError: true, errorMessage: message });
            } else {
                this.props.salesAffectedSubCalculation(params);
            }
        }

    }

    getValueMask = (value, mascara) => {
        const { authUser } = this.props
        const mask = authUser.configApp.mascaras[mascara];
        let result = '';

        if (mask.tipo === 'fecha') {
            const date = new moment(value)
            result = date.format(mask.valor);
        } else if (mask.tipo === 'personalizado') {
            result = value;
        }

        return result;
    }

    handleChangeSelect = (data, row) => {
        const selected = data.target.value;
        const { idOperacion } = this.props;
        const selectedArray = (this.state.selectedCheck) ? this.state.selectedCheck : [];
        const items = [{ nimovcli: row.nimovcli, nitem: row.nitem, estado_afec: selected }];
        selectedArray.push(row.nimovcli);
        this.setState({ selectedCheck: selectedArray });
        this.props.salesAffectedStateValidate({ idOperacion, items });
    }

    renderFormat = (field, value, row) => {
        const campoId = field.idCampo.trim();
        let result = null;
        const inputError = (value === 'error_input') ? true : false;
        const customValue = (value === 'error_input') ? '' : !Array.isArray(value) ? value : value[0].cod_estado;
        const inputStyle = (campoId === 'cant_afec' || campoId === 'precio_unit' || campoId === 'neto') ? { textAlign: 'right' } : {}

        if (field.editable && !this.inputRefs[campoId]) {
            this.inputRefs[campoId] = {}
        }

        if (field.editable && !this.inputRefs[campoId][row.nimovcli]) {
            const customRef = React.createRef();
            this.inputRefs[campoId][row.nimovcli] = customRef
        }

        const optionsInput = {
            fwRef: (field.editable) ? this.inputRefs[campoId][row.id] : null,
            inputFormCol: { sm: 12 },
            fields: [{ ...field, label: false }],
            label: false,
            inputId: `${campoId}`,
            id: `${campoId}_${row.nimovcli}`,
            name: `${campoId}_${row.nimovcli}`,
            colLabel: "col-sm-4",
            colInput: "col-sm-8",
            divStyle: { paddingLeft: '17px' },
            disable: false,
            value: customValue,
            showError: inputError,
            styles: inputStyle,
            rowStyle: { marginBottom: '5px' },
            onChange: () => { }
        }

        if (field.editable) {
            result = (
                <InputText
                    {...optionsInput}
                    handleEnterKey={(e, value) => {
                        if (campoId === 'imp_afec') {
                            this.validateAfectImport(row, field, value);
                            //this.handleSetFocus('precio_unit', row.niprod);

                        } else if (campoId === 'neto') {
                            this.validateFieldNeto(row, field, value);
                        }
                        return true;
                    }}
                    onBlur={(value) => {
                        if (campoId === 'imp_afec') { //pendiente logica.
                            this.validateAfectImport(row, field, value);
                        } else if (campoId === 'neto') {
                            //this.validateFieldNeto(row, field, value);
                        } else {
                            const params = { niprod: row.niprod, idcampo: campoId, value };
                            this.props.setTableDataInvolvement([params]);
                        }
                    }}
                />
            )
        } else if (field.mascara) {
            result = this.getValueMask(value, field.mascara);
        }

        return result;
    }

    getSelectedCheck = () => {
        const { selectedCheck } = this.state;
        const { products } = this.props;

        const items = [];
        products.Items.forEach(row => {
            selectedCheck.forEach(check => {
                if (row.nimovcli === check) {
                    items.push({
                        Nimovcli: row.nimovcli,
                        Nitem: row.nitem,
                        imp_afec: row.imp_afec,
                        niprod: row.niprod
                    })
                }
            });
        });

        return items;
    }

    handleSetStatus = () => {
        const { products, idOperacion } = this.props;
        const items = products.Items.map(row => {
            return ({ nimovcli: row.nimovcli, nitem: row.nitem, estado_afec: this.state.globalStateAfect });
        });

        this.props.salesAffectedStateValidate({ idOperacion, items });
    }

    renderGlobalSelect = () => {
        const { t, products } = this.props

        const options = (products.estado_destino.length) ? products.estado_destino.map(opt => {
            return { id: opt.cod_estado, label: opt.descrip_estado }
        }) : []
        const inputConfig = [{ idCampo: 'cambiar_masivamente', label: false, visible: 1, requerido: 0, editable: 1 }];

        const optionsInput = {
            inputFormCol: { sm: 12 },
            fields: inputConfig,
            label: false,
            inputId: 'cambiar_masivamente',
            name: 'cambiar_masivamente',
            colLabel: "col-sm-4",
            colInput: "col-sm-8",
            divStyle: { paddingLeft: '17px' },
            disable: false,
            rowStyle: { marginBottom: '5px' },
            options: options,
            onChange: (obj) => {
                this.setState({ globalStateAfect: obj.target.value })
            }
        }

        return (
            <Row className={'mt-2'}>
                <Col sm={{ span: 2, offset: 6 }} className={'text-right pt-1'}>
                    {t('voucherState.change_global')}
                </Col>
                <Col sm={3}>
                    <InputDropdown
                        {...optionsInput}
                    />
                </Col>
                <Col>
                    <Button type={'primary'} className={'btn btn-primary'} style={{ fontSize: '9pt' }} onClick={this.handleSetStatus} >
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                </Col>
            </Row>
        );
    }

    render() {
        const { products, theme, config, productsUpdate, readOnly, idOperacion } = this.props;
        const tableColumns = (config && products) ? this.getColumns() : [];
        /*const selectRow = {
            mode: 'checkbox',
            selectColumnPosition: 'right',
            selected: this.state.selectedCheck,
            hideSelectColumn: (readOnly) ? true : false,
            style: (row) => {
                const backgroundColor = row.error ? '#f8d7da' : '#FFF';
                return { backgroundColor };
            },
            onSelect: (row, isSelect, rowIndex, e) => {
                const selected = (this.state.selectedCheck) ? this.state.selectedCheck : [];
                const rows = (this.state.rowSelected) ? this.state.rowSelected : [];
                if (isSelect) { //Se adiciona    
                    rows.push({ nimovcli: row.nimovcli, nitem: row.nitem, estado_afec: (row.cod_estado_dest) ? row.cod_estado_dest : row.estado_afec[1].cod_estado }); //Temporal... 
                    selected.push(row.nimovcli)
                } else { //Se resta
                    rows.forEach((toDelete, index) => {
                        if (toDelete.nimovcli === row.nimovcli) {
                            rows.splice(index, 1);
                        }
                    });

                    selected.forEach((delet, index) => {
                        if (delet === row.nimovcli) {
                            selected.splice(index, 1);
                        }
                    });
                }
                if (rows.length) {
                    this.props.salesAffectedStateValidate({ idOperacion, items: rows });
                }

                this.setState({ rowSelected: rows, selectedCheck: selected });

            },
            onSelectAll: (isSelect, rows, e) => {
                let selected = []
                const checks = (this.state.selectedCheck) ? this.state.selectedCheck : [];

                if (isSelect) {
                    this.setState({ selectedCheck: null });
                    rows.forEach(check => {
                        checks.push(check.nimovcli);
                    });

                    selected = rows.map(fila => {
                        return ({ nimovcli: fila.nimovcli, nitem: fila.nitem, estado_afec: (fila.cod_estado_dest) ? fila.cod_estado_dest : fila.estado_afec[1].cod_estado });
                    });

                    this.setState({ selectedCheck: checks })
                } else {
                    for (let index = 0; index < checks.length; index++) {
                        const check = checks[index];
                        rows.forEach(fila => {
                            if (check === fila.nimovcli) {
                                delete checks[index]
                            }
                        });
                    }
                    this.setState({ selectedCheck: checks });
                }

                this.setState({ rowSelected: selected });
                if (selected.length) {
                    this.props.salesAffectedStateValidate({ idOperacion, items: selected });
                }

            }
        }; */

        const defaultSorted = [{
            dataField: 'fec_entrega',
            order: 'desc'
        }];

        const rowData = (products) ? products.Items.map((prod) => {
            let result = {};
            if (productsUpdate) {
                productsUpdate.forEach(update => {
                    if (update.nimovcli === prod.nimovcli) {
                        result = {
                            ...update,
                        }
                    }
                });

            } else {
                result = {
                    ...prod,
                }
            }

            return result;

        }) : null;

        const options = {
            pageStartIndex: 1,
            sizePerPage: products.page_size,
            page: products.page_number,
            totalSize: products.total_count,
            onPageChange: (page, sizePerPage) => {
                const items = this.getSelectedCheck();
                if (items.length) {
                    this.props.salesAffectedStateConfirm({ idOperacion, items })
                }
            }
        }

        return (
            <>
                <Col sm={12} className={"mb-1"} >
                    <NotificationMessage
                        {...this.state}
                        handleCloseError={this.handleCloseError}
                        type={'danger'}
                    />
                </Col>

                <Col className={`col-12 pl-0 pr-0`}>
                    {config &&
                        <CommonTable
                            columns={tableColumns}
                            keyField={'nimovcli'}
                            data={rowData}
                            defaultSorted={defaultSorted}
                            rowClasses={theme.tableRow}
                            headerClasses={theme.tableHeader}
                            paginationOptions={options}
                            onTableChange={this.props.handleChangeTable}

                        />
                    }
                </Col>
            </>
        )
    }
}

const mapStateToProps = ({ voucher, salesAffected, auth }) => {
    const config = (voucher.config) ? voucher.config[P_ASIEN_CONT] : null;
    const { authUser } = auth
    const { productsUpdate, cantValidate } = salesAffected;
    return { config, productsUpdate, cantValidate, authUser };
};

const connectForm = connect(mapStateToProps, {
    getConfigVoucher,
    setTableDataInvolvement,
    salesAffectedStateValidate,
    salesAffectedSubCalculation,
    salesAffectedStateConfirm
})(AccountingTable);

export default themr('StateTableStyles', styles)(withTranslation()(connectForm));