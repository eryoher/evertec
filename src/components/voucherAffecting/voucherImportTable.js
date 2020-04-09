import React, { Component } from 'react';
import CommonTable from 'components/common/commonTable';
import { Col, Button } from 'react-bootstrap';
import styles from './voucherImportTable.module.css';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getConfigVoucher, setTableDataInvolvement, salesAffectedImportValidate, salesAffectedSubCalculation, salesAffectedImportConfirm } from '../../actions';
import InputText from 'components/form/inputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import NotificationMessage from 'components/common/notificationMessage';
import { selectFilter } from 'react-bootstrap-table2-filter';
import { validateField } from 'lib/FieldValidations';
import { P_AFEC_IMPO_VTA } from 'constants/ConfigProcessNames';
import { getValueMask } from '../../lib/MaskValues';

class VoucherImportTable extends Component {

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

        this.rowErrors = [];
        this.primaryKey = 'id';
        this.firtsRefs = null;
    }

    componentDidMount = () => {
        const { idOperacion } = this.props
        this.props.getConfigVoucher({ cod_proceso: P_AFEC_IMPO_VTA, idOperacion });
    }

    componentDidUpdate = (prevProps) => {
        const { productsImport } = this.props;

        if (prevProps.productsImport !== productsImport && productsImport) {
            if (this.firtsRefs && this.firtsRefs.current) {
                if (this.firtsRefs.current.element) {
                    this.firtsRefs.current.element.focus();
                } else {
                    this.firtsRefs.current.focus();
                }

            }
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.productsUpdate) {
            nextProps.productsUpdate.forEach(field => {
                if (field.error && field.type_error === 1 && !this.rowErrors[field[this.primaryKey]]) {
                    this.rowErrors[field[this.primaryKey]] = true;
                    this.setState({ showError: 'true', errorMessage: 'No se soporta selección Manual de Stock.' })
                }
            });
        }
    }

    componentWillUnmount = () => {
        const items = this.getSelectedCheck();
        const { idOperacion, voucherTypeCancel } = this.props;

        if (items.length && !voucherTypeCancel) {
            console.log(voucherTypeCancel)
            this.props.salesAffectedImportConfirm({ idOperacion, items })
        }
    }


    getColumns = () => {
        const { config, theme, readOnly } = this.props;

        const rows = config.campos.map((field) => {
            const campoId = field.idCampo.trim()
            return {
                dataField: campoId,
                text: (field.label) ? ((campoId === 'fec_emis' || campoId === 'comprob_nro' || campoId === 'cod_prod' || campoId === 'fec_vto') ? '' : field.label) : '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: this.getStyleColumn(field),
                hidden: !field.visible,
                filter: (campoId === 'fec_emis' || campoId === 'comprob_nro' || campoId === 'cod_prod' || campoId === 'fec_vto') ? selectFilter({
                    options: this.getFilterOptions(campoId, field),
                    className: `${theme.inputFilter} mt-2`,
                    onFilter: filterVal => this.setState({ filterVal }),
                    placeholder: field.label,
                }) : null,
                formatter: ((field.editable || field.mascara) && (!readOnly)) ? ((cell, row, rowIndex) => {
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
                const labelValue = (field.mascara) ? getValueMask(row[idField], field.mascara, this.props) : row[idField];
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
            case 'comprob_nro':
                style = { width: '20%' }
                break;
            case 'cod_prod':
                style = { width: '15%' }
                break;
            case 'desc_prod':
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
            case 'precio_unit':
                style = { width: '18%' }
                break;
            case 'neto':
                style = { width: '18%' }
                break;
            case 'unid_v':
                style = { width: '5%' }
                break;
            case 'cant_afec':
                style = { width: '15%' }
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
        const newItem = { Nimovcli: row.nimovcli, Nitem: row.nitem, imp_afec: value };
        const items = [newItem];
        const selected = (this.state.selectedCheck) ? this.state.selectedCheck : [];
        const rows = (this.state.rowSelected) ? this.state.rowSelected : [];
        let saveItem = true;

        rows.forEach((toSave, index) => {
            if (toSave.Nimovcli === row.nimovcli) {
                saveItem = false;
                toSave.imp_afec = value;
            }
        });

        if (saveItem) {
            rows.push(newItem);
        }

        if (field.valid) {
            let message = '';
            if (!validateField(value, field.valid)) {
                message = `El campo ${field.label} es requerido.`;
                this.setState({ showError: true, errorMessage: message });
            } else {
                selected.push(row[this.primaryKey]);
                this.setState({ selectedCheck: selected, rowSelected: rows });
                this.props.salesAffectedImportValidate({ idOperacion, items });
            }
        } else if (value) {
            if (value === 0) {
                selected.forEach((delet, index) => {
                    if (delet === row[this.primaryKey]) {
                        selected.splice(index, 1);
                    }
                });

                this.setState({ rowSelected: rows, selectedCheck: selected });
            } else {
                selected.push(row[this.primaryKey]);
                this.setState({ selectedCheck: selected, rowSelected: rows });
            }

            this.props.salesAffectedImportValidate({ idOperacion, items });
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
            this.inputRefs[campoId] = {};
        }

        if (field.editable && !this.inputRefs[campoId][row[this.primaryKey]]) {
            const customRef = React.createRef();
            this.inputRefs[campoId][row[this.primaryKey]] = customRef;
            if (this.firtsRefs === null) {
                this.firtsRefs = customRef;
            }
        }

        const optionsInput = {
            fwRef: (field.editable) ? this.inputRefs[campoId][row[this.primaryKey]] : null,
            inputFormCol: { sm: 12 },
            fields: [{ ...field, label: false }],
            label: false,
            inputId: `${campoId}`,
            id: `${campoId}_${row[this.primaryKey]}`,
            name: `${campoId}_${row[this.primaryKey]}`,
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
            result = getValueMask(value, field.mascara, this.props);
        }

        return result;
    }

    getSelectedCheck = () => {
        const { selectedCheck } = this.state;
        const { products } = this.props;

        const items = [];
        if (products) {
            products.Items.forEach(row => {
                selectedCheck.forEach(check => {
                    if (row[this.primaryKey] === check) {
                        items.push({
                            Nimovcli: row.nimovcli,
                            Nitem: row.nitem,
                            imp_afec: row.imp_afec,
                            niprod: row.niprod
                        })
                    }
                });
            });
        }

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
                let updateRecord = false;

                if (isSelect) { //Se adiciona    
                    const cantSend = (row.imp_afec) ? row.imp_afec : row.imp_pend;
                    rows.forEach(toAdd => { //Se modifica
                        if (toAdd.Nimovcli === row.nimovcli) {
                            toAdd.imp_afec = cantSend;
                            updateRecord = true;
                        }
                    });

                    if (!updateRecord) { //Nuevo
                        rows.push({ Nimovcli: row.nimovcli, nitem: row.nitem, imp_afec: (row.imp_afec) ? row.imp_afec : row.imp_pend });
                    }
                    selected.push(row[this.primaryKey])
                } else { //Se resta

                    rows.forEach((toDelete, index) => {
                        if (toDelete.Nimovcli === row.nimovcli) {
                            toDelete.imp_afec = 0;
                        }
                    });

                    selected.forEach((delet, index) => {
                        if (delet === row[this.primaryKey]) {
                            selected.splice(index, 1);
                        }
                    });
                }
                if (rows.length) {
                    this.props.salesAffectedImportValidate({ idOperacion, items: rows });
                }

                this.setState({ rowSelected: rows, selectedCheck: selected });

            },
            onSelectAll: (isSelect, rows, e) => {
                let selected = []
                const checks = (this.state.selectedCheck) ? this.state.selectedCheck : [];

                if (isSelect) {
                    this.setState({ selectedCheck: null });
                    rows.forEach(check => {
                        checks.push(check[this.primaryKey]);
                    });

                    selected = rows.map(fila => {
                        return ({ Nimovcli: fila.nimovcli, nitem: fila.nitem, imp_afec: (fila.imp_afec) ? fila.imp_afec : fila.imp_pend });
                    });

                    this.setState({ selectedCheck: checks });

                } else {
                    for (let index = 0; index < checks.length; index++) {
                        const check = checks[index];
                        rows.forEach(fila => {
                            if (check === fila[this.primaryKey]) {
                                delete checks[index]
                            }
                        });
                    }
                    selected = rows.map(fila => {
                        return ({ Nimovcli: fila.nimovcli, nitem: fila.nitem, imp_afec: 0 });
                    });

                    this.setState({ selectedCheck: checks });
                }
                this.setState({ rowSelected: selected });

                if (selected.length) {
                    this.props.salesAffectedImportValidate({ idOperacion, items: selected });
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

        const options = (products) ? {
            pageStartIndex: 1,
            sizePerPage: products.page_size,
            page: products.page_number,
            totalSize: products.total_count,
            onPageChange: (page, sizePerPage) => {
                const items = this.getSelectedCheck();
                if (items.length) {
                    this.props.salesAffectedImportConfirm({ idOperacion, items })
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
                    {config && rowData &&
                        <CommonTable
                            columns={tableColumns}
                            keyField={this.primaryKey}
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

const mapStateToProps = ({ voucher, salesAffected, auth, vouchertype }) => {
    const config = (voucher.config) ? voucher.config[P_AFEC_IMPO_VTA] : null;
    const { authUser } = auth
    const { productsUpdate, cantValidate, productsImport } = salesAffected;
    const { voucherTypeCancel } = vouchertype;
    return { config, productsUpdate, cantValidate, authUser, productsImport, voucherTypeCancel };
};

const connectForm = connect(mapStateToProps, { getConfigVoucher, setTableDataInvolvement, salesAffectedImportValidate, salesAffectedSubCalculation, salesAffectedImportConfirm })(VoucherImportTable);

export default themr('InvolvementTableStyles', styles)(withTranslation()(connectForm));