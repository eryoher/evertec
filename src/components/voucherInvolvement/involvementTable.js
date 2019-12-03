import React, { Component } from 'react';
import CommonTable from 'components/common/commonTable';
import { Col } from 'react-bootstrap';
import styles from './involvementTable.module.css';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getConfigVoucher, setTableDataInvolvement, salesAffectedValidate, salesAffectedSubCalculation, salesAffectedConfirm } from '../../actions/';
import InputText from 'components/form/inputText';
import InputPriceUnit from 'components/loadItems/inputPriceUnit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import NotificationMessage from 'components/common/notificationMessage';
import { selectFilter } from 'react-bootstrap-table2-filter';
import { validateField } from 'lib/FieldValidations';

class InvolvementTable extends Component {

    constructor(props) {
        super(props);
        this.inputRefs = {};
        this.state = {
            rowSelected: [],
            showError: false,
            errorMessage: '',
            selectedCheck: [],
            checksByPage: []
        }

        this.rowErrors = []

    }

    componentDidMount = () => {
        const { idOperacion } = this.props
        this.props.getConfigVoucher({ cod_proceso: 'p_afec_cant_vta', idOperacion });
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
        if (items.length) {
            this.props.salesAffectedConfirm({ idOperacion: this.props.idOperacion, items })  // FALTA ID OPERACION
        }
    }

    getColumns = () => {
        const { config, theme, readOnly } = this.props;
        const rows = config.campos.map((field) => {
            const campoId = field.idCampo.trim()
            return {
                dataField: campoId,
                text: (field.label) ? ((campoId === 'fec_emis' || campoId === 'comprob_nro' || campoId === 'cod_prod') ? '' : field.label) : '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: this.getStyleColumn(field),
                hidden: !field.visible,
                filter: (campoId === 'fec_emis' || campoId === 'comprob_nro' || campoId === 'cod_prod') ? selectFilter({
                    options: this.getFilterOptions(campoId),
                    className: `${theme.inputFilter} mt-2`,
                    onFilter: filterVal => this.setState({ filterVal }),
                    placeholder: field.label,
                }) : null,
                formatter: ((field.editable || campoId === 'avisos' || campoId === 'ind_stock' || campoId === 'modif_pcio') && (!readOnly)) ? ((cell, row, rowIndex) => {
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

    getFilterOptions = (idField) => {
        const { products } = this.props;
        const optionsExits = [];
        const result = [];
        products.Items.forEach(row => {
            if (row[idField] && !optionsExits[row[idField]]) {
                optionsExits[row[idField]] = true;
                result.push({ value: row[idField], label: row[idField] })
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
            case 'nimovcli':
                style = { width: '5%' }
                break;
            case 'Cod_unid':
                style = { width: '3%' }
                break;
            case 'nitem':
                style = { width: '8%' }
                break;
            case 'Cant_pend':
                style = { width: '5%' }
                break;
            case 'Desc_prod':
                style = { width: '20%' }
                break;
            case 'fec_entrega':
                style = { width: '13%' }
                break;
            case 'avisos':
                style = { width: '8%' }
                break;
            case 'ind_stock':
                style = { width: '3%' }
                break;
            case 'pcio_unit':
                style = { width: '5%' }
                break;
            case 'neto':
                style = { width: '8%' }
                break;
            case 'unid_v':
                style = { width: '5%' }
                break;
            case 'modif_pcio':
                style = { width: '1%' }
                break;
            case 'cant_saldo':
                style = { width: '3%' }
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

    validateFieldQuantity = (row, field, value) => {
        const { idOperacion } = this.props;

        const selected = (this.state.selectedCheck) ? this.state.selectedCheck : [];

        let message = '';
        if (!validateField(value, field.valid)) {
            message = `El campo ${field.label} es requerido.`;
            this.setState({ showError: true, errorMessage: message });
        } else {
            selected.push(row.niprod);
            this.setState({ selectedCheck: selected });
            const items = [{ Nimovcli: row.nimovcli, Nitem: row.nitem, Cant_afec: row.Cant_afec }];
            this.props.salesAffectedValidate({ idOperacion, items }); //Falta adicionar idOperacion
            this.props.salesAffectedSubCalculation({ idOperacion, Nimovcli: row.nimovcli, Nitem: row.nitem, Cant_afec: value, Neto: row.neto })
        }

    }

    validateFieldNeto = (row, field, value) => {
        const params = {
            "IdOperacion": 12345,
            "nimovcli": row.nimovcli,
            "nitem": row.nitem,
            "niprod": row.niprod,
            "cod_unid": row.cod_unid,
            "cant_afec": row.cant_afec,
            "precio_unit": row.precio_unit,
            "neto": value
        }

        if (field.valid) {
            let message = '';
            if (!validateField(value, field.valid)) {
                message = `El campo ${field.label} es requerido.`;
                this.setState({ showError: true, errorMessage: message });
            } else {
                this.props.salesAffectedSubCalculation(params)
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

    renderFormat = (field, value, row) => {
        const campoId = field.idCampo.trim();
        let result = null;
        const inputError = (value === 'error_input') ? true : false;
        const customValue = (value === 'error_input') ? '' : value;
        const inputStyle = (campoId === 'cant_afec' || campoId === 'precio_unit' || campoId === 'neto') ? { textAlign: 'right' } : {}


        if (field.editable && !this.inputRefs[campoId]) {
            this.inputRefs[campoId] = {}
        }

        if (field.editable && !this.inputRefs[campoId][row.niprod]) {
            const customRef = React.createRef();
            this.inputRefs[campoId][row.niprod] = customRef
        }

        const optionsInput = {
            fwRef: (field.editable) ? this.inputRefs[campoId][row.id] : null,
            inputFormCol: { sm: 12 },
            fields: [{ ...field, label: false }],
            label: false,
            inputId: `${campoId}`,
            id: `${campoId}_${row.niprod}`,
            name: `${campoId}_${row.niprod}`,
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

        if (campoId === 'modif_pcio') {
            result = (
                <InputPriceUnit
                    optionsInput={optionsInput}
                    fieldCant={'cant_afec'}
                    setData={this.props.setTableDataInvolvement}
                    calSubTotal={(params) =>
                        this.handleSubCalculation(params, field)
                    }
                    handleFocus={(rowId) => {
                        // Focus next input                           
                        if (row.niprod === rowId) {
                            this.handleSetFocus('neto', row.niprod);
                        }
                        return true;

                    }}
                    row={row}
                />
            )
        } else {

            result = (
                <InputText
                    {...optionsInput}
                    //autoFocus={(focusInput && focusInput.input === 'neto' && focusInput.rowId === row.niprod) ? true : false}
                    handleEnterKey={(e, value) => {
                        if (campoId === 'Cant_afec') {
                            this.validateFieldQuantity(row, field, value);
                            this.handleSetFocus('precio_unit', row.niprod);

                        } else if (campoId === 'neto') {
                            this.validateFieldNeto(row, field, value);
                        }
                        return true;
                    }}
                    onBlur={(value) => {
                        if (campoId === 'Cant_afec') { //pendiente logica.
                            this.validateFieldQuantity(row, field, value);
                        } else if (campoId === 'neto') {
                            this.validateFieldNeto(row, field, value);

                        } else {
                            const params = { niprod: row.niprod, idcampo: campoId, value };
                            this.props.setTableDataInvolvement([params]);
                        }
                    }}
                />
            )

        }

        return result;
    }

    getSelectedCheck = () => {
        const { selectedCheck } = this.state;
        const { products } = this.props;

        const items = [];
        products.Items.forEach(row => {
            selectedCheck.forEach(check => {
                if (row.niprod === check) {
                    items.push({
                        Nimovcli: row.nimovcli,
                        Nitem: row.nitem,
                        Cant_afec: row.Cant_afec,
                        //precio_unit: row.pcio_unit,
                        //neto: row.neto
                    })
                }
            });
        });

        return items;
    }


    render() {
        const { products, theme, config, productsUpdate, readOnly, idOperacion } = this.props;
        const tableColumns = (config && products) ? this.getColumns() : [];
        const selectRow = {
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
                    rows.push({ Nimovcli: row.nimovcli, Nitem: row.nitem, Cant_afec: row.Cant_afec });
                    selected.push(row.niprod)
                } else { //Se resta
                    rows.forEach((toDelete, index) => {
                        if (toDelete.niprod === row.niprod) {
                            rows.splice(index, 1);
                        }
                    });

                    selected.forEach((delet, index) => {
                        if (delet === row.niprod) {
                            selected.splice(index, 1);
                        }
                    });

                }
                this.setState({ rowSelected: rows, selectedCheck: selected });
                this.props.salesAffectedValidate({ idOperacion, item: rows });

            },
            onSelectAll: (isSelect, rows, e) => {
                let selected = []
                const checks = (this.state.selectedCheck) ? this.state.selectedCheck : [];

                if (isSelect) {
                    this.setState({ selectedCheck: null });
                    rows.forEach(check => {
                        checks.push(check.niprod);
                    });

                    selected = rows.map(fila => {
                        return ({ Nimovcli: fila.nimovcli, Nitem: fila.nitem, Cant_afec: fila.Cant_afec });
                    });

                    this.setState({ selectedCheck: checks })
                } else {
                    for (let index = 0; index < checks.length; index++) {
                        const check = checks[index];
                        rows.forEach(fila => {
                            if (check === fila.niprod) {
                                delete checks[index]
                            }
                        });

                    }

                    this.setState({ selectedCheck: checks });
                }

                this.setState({ rowSelected: selected });
                if (selected.length) {
                    this.props.salesAffectedValidate({ idOperacion, item: selected });
                }

            }
        };

        const defaultSorted = [{
            dataField: 'fec_entrega',
            order: 'desc'
        }];

        const rowData = (products) ? products.Items.map((prod) => {
            let result = {};
            if (productsUpdate) {
                productsUpdate.forEach(update => {
                    if (update.niprod === prod.niprod) {
                        result = {
                            ...update,
                            id: prod.niprod
                        }
                    }
                });

            } else {
                result = {
                    ...prod,
                    id: prod.niprod
                }
            }

            return result;

        }) : null;


        const options = (products) ? {
            pageStartIndex: 1,
            sizePerPage: products.page_size,
            page: products.page_number,
            totalSize: products.total_count,
            onPageChange: (page, sizePerPage) => {
                const items = this.getSelectedCheck();
                if (items.length) {
                    this.props.salesAffectedConfirm({ idOperacion, items })
                }
            }
        } : {}

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
                            remote
                            columns={tableColumns}
                            keyField={'niprod'}
                            data={rowData}
                            selectRow={selectRow}
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

const mapStateToProps = ({ voucher, salesAffected }) => {
    const { config } = voucher;
    const { productsUpdate, cantValidate } = salesAffected;
    return { config, productsUpdate, cantValidate };
};

const connectForm = connect(mapStateToProps, { getConfigVoucher, setTableDataInvolvement, salesAffectedValidate, salesAffectedSubCalculation, salesAffectedConfirm })(InvolvementTable);

export default themr('InvolvementTableStyles', styles)(withTranslation()(connectForm));