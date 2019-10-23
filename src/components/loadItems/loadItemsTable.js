import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPercent } from '@fortawesome/free-solid-svg-icons';
import CommonTable from 'components/common/commonTable';
import CollapseBotton from 'components/common/collapseBoton';
import InputText from 'components/form/inputText';
import DisplayLight from 'components/common/displayLight';
import { themr } from 'react-css-themr';
import styles from './itemsTable.module.css';
import SearchBox from 'components/common/searchBox';
import { selectFilter, Comparator } from 'react-bootstrap-table2-filter';
import PopupImage from 'components/common/popupImage';
import { connect } from 'react-redux';
import { getConfigVoucher, setTableDataProducts, getPriceByProduct, getLoadItems } from '../../actions';
import InputDropdown from 'components/form/inputDropdown';
import InputPriceUnit from './inputPriceUnit';
import { validateField } from 'lib/FieldValidations';
import NotificationMessage from 'components/common/notificationMessage';


class LoadItemsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterVal: null,
            inputsError: [],
            showError: false,
            errrorTitle: '',
            errorMessage: ''
        }

        this.inputRefs = {};
    }

    componentDidMount = () => {
        this.props.getConfigVoucher({ cod_proceso: 'P_CargaItemenVentas', idOperacion: 1 });
    }

    handleCloseError = () => {
        this.setState({ showError: false })
    }

    handleSetFocus = (input, rowId) => {
        const nextRef = this.inputRefs[input][rowId];
        if (input === 'fec_entrega') {
            nextRef.current.setFocus();
        } else if (nextRef.current && nextRef.current.element) {
            nextRef.current.element.focus();
        }
    }

    handleAddToCart = (row) => {
        const { config, t } = this.props;
        const message = [];
        const params = {
            idOperacion: 221223, //Falta idoperacion
            niprod: row.niprod,
            /*cod_unid: row.unid_v,
            cantidad: row.cantidad,
            precio_unit: row.precio_unit,
            neto: row.neto,
            fecha_entrega: row.fec_entrega*/ //Se comenta temporal hasta usar servicios reales.
        }

        let flag = true;

        config.campos.forEach(field => {
            if (parseInt(field.requerido)) {
                if (!validateField(row[field.idcampo], field.valid)) {
                    this.props.setTableDataProducts([{ niprod: row.niprod, idcampo: field.idcampo, value: 'error_input' }]);
                    message.push(`El campo ${field.label} es requerido.`);
                    flag = false;
                }
            }
        });

        if (flag) {
            this.props.getLoadItems(params);
            this.setState({ showError: false });

        } else {
            this.setState({ showError: true, errorMessage: message, errorTitle: t('global.input_require') });
        }
    }

    getOptionsDeal = () => {
        const { search } = this.props;
        let result = {};
        if (search.bonificaciones) {
            search.bonificaciones.forEach(bonif => {
                result[bonif.cod_bonif] = bonif.desc_bonif
            });
        }
        return result;
    }

    getStyleColumn = (field) => {
        const idField = field.idcampo;

        let style = {};

        switch (idField) {
            case 'desc_prod':
                style = { width: '15%' }
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
                style = { width: '13%' }
                break;
            case 'neto':
                style = { width: '13%' }
                break;
            case 'unid_v':
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

    getColumns = () => {
        const { config, theme } = this.props;
        const rows = config.campos.map((field) => {
            return {
                dataField: field.idcampo,
                text: (field.label) ? field.label : '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: this.getStyleColumn(field),
                hidden: !field.visible,
                title: (field.idcampo === 'avisos') ? (cell, row, ) => {
                    let title = '';
                    row.Bonificaciones.forEach(bonif => {
                        title = `${title} ${bonif.desc_bonif}`
                    });

                    return title;
                } : null,

                filter: (field.idcampo === 'avisos') ? selectFilter({
                    options: this.getOptionsDeal(),
                    className: `${theme.inputFilter} mt-2`,
                    placeholder: 'Oferta',
                    onFilter: filterVal => this.setState({ filterVal }),
                }) : null,

                filterValue: (cell, row) => {
                    const filter = []
                    row.Bonificaciones.forEach(bonif => {
                        if (bonif.cod_bonif === this.state.filterVal) {
                            filter.push(bonif.cod_bonif)
                        }
                    });

                    return filter;
                },
                formatter: (field.editable || field.idcampo === 'avisos' || field.idcampo === 'ind_stock') ? ((cell, row, rowIndex) => {
                    return this.renderFormat(field, cell, row)
                }) : null
            }

        });

        rows.push(
            {
                dataField: 'actions',
                text: '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '5%' },
                formatter: ((cell, row, rowIndex) => {
                    return (
                        <a href={'#'} onClick={() => this.handleAddToCart(row)}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </a>
                    )
                }),

            }
        )

        return [{
            dataField: 'id_imagen',
            text: '',
            align: 'rigth',
            headerStyle: { width: '2%' },
            formatter: ((cell, row, rowIndex) => {
                return (
                    <PopupImage src={cell} />
                )
            }),
        }].concat(rows);
    }

    renderFormat = (field, value, row) => {

        let result = null;
        const inputError = (value === 'error_input') ? true : false;
        const customValue = (value === 'error_input') ? '' : value;
        const inputStyle = (field.idcampo === 'cantidad' || field.idcampo === 'precio_unit' || field.idcampo === 'neto') ? { textAlign: 'right' } : {}
        const { focusInput } = this.props;

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

        if (field.idcampo === 'avisos') {
            result = (row.Bonificaciones.length) ? <FontAwesomeIcon icon={faPercent} /> : null
        } else if (field.idcampo === 'unid_v') {
            const selectOptions = (row.presentaciones) ? row.presentaciones.map(pre => {
                return { id: pre.cod_pres, label: pre.desc_pres }
            }) : []
            result = (
                <InputDropdown
                    {...optionsInput}
                    options={selectOptions}
                    onChange={(data) => {
                        const value = data.target.value;
                        this.props.setTableDataProducts([{ niprod: row.niprod, idcampo: field.idcampo, value }]);
                    }}
                />
            )
        } else if (field.idcampo === 'ind_stock') {
            result = (<DisplayLight semaforo={value} />)
        } else if (field.idcampo === 'precio_unit') {
            result = (
                <InputPriceUnit
                    optionsInput={optionsInput}
                    setData={this.props.setTableDataProducts}
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
                    autoFocus={(focusInput && focusInput.input === 'neto' && focusInput.rowId === row.niprod) ? true : false}
                    handleEnterKey={(e, value) => {
                        if (field.idcampo === 'cantidad') {
                            // Focus next input            
                            this.props.getPriceByProduct({
                                "IdOperacion": 123456, //Falta adicionar id Operacion.
                                "Idproducto": row.niprod,
                                "cantidad": value,
                                "unid_vta": row.unid_v
                            });
                            this.handleSetFocus('precio_unit', row.niprod);
                        } else if (field.idcampo === 'neto') {
                            this.handleSetFocus('fec_entrega', row.niprod);
                        }
                        return true;
                    }}
                    onBlur={(value) => {
                        if (field.idcampo === 'cantidad') {
                            this.props.getPriceByProduct({
                                "IdOperacion": 123456, //Falta adicionar id Operacion.
                                "Idproducto": row.niprod,
                                "cantidad": value,
                                "unid_vta": row.unid_v
                            });

                        } else if (field.idcampo === 'neto') {
                            const newValue = (value) ? parseFloat(value.split(',').join('.')) : 0;
                            const cantidad = (row.cantidad) ? parseFloat(row.cantidad) : 0;

                            const newPrice = (parseFloat(row.base_v) * newValue) / cantidad;
                            const params = { niprod: row.niprod, idcampo: 'precio_unit', value: newPrice.toString() }
                            const paramsNeto = { niprod: row.niprod, idcampo: 'neto', value: newValue.toString() }
                            this.props.setTableDataProducts([params, paramsNeto]);
                        } else {
                            const params = { niprod: row.niprod, idcampo: field.idcampo, value };
                            this.props.setTableDataProducts([params]);
                        }
                    }}
                />
            )

        }

        return result;

    }

    renderExpandRow = (row) => {
        const cols = [];
        let result;
        if (row.Atributos && row.Atributos.length) {
            row.Atributos.forEach((atrb, index) => {
                cols.push(
                    <Col key={index} className={"col-6 p-2"}>
                        <b>{`${atrb.desc_atributo}:`}</b> {atrb.desc_dato}
                    </Col>
                )
            });
            result = (
                <Row className={"container mt-2"}>
                    {cols}
                </Row>
            )

        }

        return result;
    }

    getNoexpandRows = () => {
        const { search } = this.props;
        const result = []
        if (search && search.Productos) {
            search.Productos.forEach(prd => {
                if (!prd.Atributos || prd.Atributos.length === 0) {
                    result.push(parseInt(prd.niprod));
                }
            });
        }

        return result;
    }

    validateKey = (key, rows) => {
        let result = false;
        rows.forEach(row => {
            if (row === key) {
                result = true;
            }
        });
        return result;

    }

    render() {
        const { theme, t, searchBox, divClass, config, search, productsUpdate } = this.props;
        const tableColumns = (config && search) ? this.getColumns() : [];
        const noExpand = this.getNoexpandRows();

        const expandRow = {
            renderer: row => this.renderExpandRow(row),
            showExpandColumn: true,
            nonExpandable: noExpand,
            expandByColumnOnly: true,
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                return <CollapseBotton status={isAnyExpands} />
            },
            expandColumnRenderer: ({ expanded, rowKey }) => {
                if (!this.validateKey(rowKey, noExpand)) {
                    return <CollapseBotton status={expanded} />
                }
            },
        };

        const rowData = (search.Productos) ? search.Productos.map((prod) => {
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

        return (
            <Row className={divClass}>
                <Col sm={12} className={"mb-1"} >
                    <NotificationMessage
                        {...this.state}
                        handleCloseError={this.handleCloseError}
                        type={'danger'}
                    />
                </Col>
                {searchBox && <SearchBox />}
                {config && rowData &&
                    <Col className={`${divClass} col-12`}>
                        <CommonTable
                            columns={tableColumns}
                            data={rowData}
                            rowClasses={theme.tableRow}
                            headerClasses={theme.tableHeader}
                            expandRow={expandRow}
                        />
                    </Col>}
            </Row>
        )
    }
}

const mapStateToProps = ({ voucher, product }) => {
    const { config } = voucher;
    const { search, productsUpdate, focusInput, updateCant } = product
    return { config, search, productsUpdate, focusInput, updateCant };
};

const connectForm = connect(mapStateToProps, { getConfigVoucher, setTableDataProducts, getPriceByProduct, getLoadItems })(LoadItemsTable);

export default themr('LoadItemsTableStyles', styles)(withTranslation()(connectForm));