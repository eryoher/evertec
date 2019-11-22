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
        this.props.getConfigVoucher({ cod_proceso: 'p_afectcomprob', idOperacion: 1 });
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
            return {
                dataField: field.idcampo,
                text: (field.label) ? ((field.idcampo === 'fec_emis' || field.idcampo === 'comprob_nro' || field.idcampo === 'cod_prod') ? '' : field.label) : '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: this.getStyleColumn(field),
                hidden: !field.visible,
                filter: (field.idcampo === 'fec_emis' || field.idcampo === 'comprob_nro' || field.idcampo === 'cod_prod') ? selectFilter({
                    options: this.getFilterOptions(field.idcampo),
                    className: `${theme.inputFilter} mt-2`,
                    onFilter: filterVal => this.setState({ filterVal }),
                    placeholder: field.label,
                }) : null,
                formatter: ((field.editable || field.idcampo === 'avisos' || field.idcampo === 'ind_stock') && (!readOnly)) ? ((cell, row, rowIndex) => {
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
        products.forEach(row => {
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
        const idField = field.idcampo;
        let style = {};

        switch (idField) {
            case 'fec_emis':
                style = { width: '15%' }
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

    validateFieldQuantity = (row, field, value) => {
        const items = [{ Nimovcli: row.nimovcli, Nitem: row.nitem, Cant_afec: value }];
        const selected = (this.state.selectedCheck) ? this.state.selectedCheck : [];
        if (field.valid) {
            let message = '';
            if (!validateField(value, field.valid)) {
                message = `El campo ${field.label} es requerido.`;
                this.setState({ showError: true, errorMessage: message });
            } else {
                selected.push(row.nimovcli);
                this.setState({ selectedCheck: selected });
                this.props.salesAffectedValidate({ idOperacion: row.nimovcli /*items*/ }); //Falta adicionar idOperacion
            }
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

        let result = null;
        const inputError = (value === 'error_input') ? true : false;
        const customValue = (value === 'error_input') ? '' : value;
        const inputStyle = (field.idcampo === 'cant_afec' || field.idcampo === 'precio_unit' || field.idcampo === 'neto') ? { textAlign: 'right' } : {}


        if (field.editable && !this.inputRefs[field.idcampo]) {
            this.inputRefs[field.idcampo] = {}
        }

        if (field.editable && !this.inputRefs[field.idcampo][row.niprod]) {
            const customRef = React.createRef();
            this.inputRefs[field.idcampo][row.niprod] = customRef
        }

        const optionsInput = {
            fwRef: (field.editable) ? this.inputRefs[field.idcampo][row.id] : null,
            inputFormCol: { sm: 12 },
            fields: [{ ...field, label: false }],
            label: false,
            inputId: `${field.idcampo}`,
            id: `${field.idcampo}_${row.niprod}`,
            name: `${field.idcampo}_${row.niprod}`,
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

        if (field.idcampo === 'ind_stock') {
        } else if (field.idcampo === 'precio_unit') {
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
                        if (field.idcampo === 'cant_afec') {
                            this.validateFieldQuantity(row, field, value);
                            this.handleSetFocus('precio_unit', row.niprod);

                        } else if (field.idcampo === 'neto') {
                            this.validateFieldNeto(row, field, value);
                        }
                        return true;
                    }}
                    onBlur={(value) => {
                        if (field.idcampo === 'cant_afec') { //pendiente logica.
                            this.validateFieldQuantity(row, field, value);
                        } else if (field.idcampo === 'neto') {
                            this.validateFieldNeto(row, field, value);

                        } else {
                            const params = { niprod: row.niprod, idcampo: field.idcampo, value };
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
        products.forEach(row => {
            selectedCheck.forEach(check => {
                if (row.nimovcli === check) {
                    items.push({
                        nimovcli: row.nimovcli,
                        nitem: row.nitem,
                        cant_afec: row.cant_afec,
                        precio_unit: row.precio_unit,
                        neto: row.neto
                    })
                }
            });
        });

        return items;
    }


    render() {
        const { products, theme, config, productsUpdate, readOnly } = this.props;
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
                    rows.push({ Nimovcli: row.nimovcli, Nitem: row.nitem, Cant_afec: row.cant_pend });
                    selected.push(row.nimovcli)
                } else { //Se resta
                    rows.forEach((toDelete, index) => {
                        if (toDelete.Nimovcli === row.nimovcli) {
                            rows.splice(index, 1);
                        }
                    });

                    selected.forEach((delet, index) => {
                        if (delet === row.nimovcli) {
                            selected.splice(index, 1);
                        }
                    });

                }
                this.setState({ rowSelected: rows, selectedCheck: selected });
                this.props.salesAffectedValidate({ idOperacion: row.nimovcli /*item: rows*/ }); //Falta adicionar idOperacion

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
                        return ({ Nimovcli: fila.nimovcli, Nitem: fila.nitem, Cant_afec: fila.cant_pend });
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
                this.props.salesAffectedValidate({ idOperacion: 123456789, /*item: selected*/ }); //Falta adicionar idOperacion

            }
        };

        const defaultSorted = [{
            dataField: 'fec_entrega',
            order: 'desc'
        }];

        const rowData = (products) ? products.map((prod) => {
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

        const options = {
            pageStartIndex: 1,
            sizePerPage: 10,
            onPageChange: (page, sizePerPage) => {
                const items = this.getSelectedCheck();
                if (items.length) {
                    this.props.salesAffectedConfirm({ idOperacion: '123456', items })
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
                    {config && <CommonTable
                        columns={tableColumns}
                        keyField={'nimovcli'}
                        data={rowData}
                        selectRow={selectRow}
                        defaultSorted={defaultSorted}
                        rowClasses={theme.tableRow}
                        headerClasses={theme.tableHeader}
                        paginationOptions={options}
                    />}
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