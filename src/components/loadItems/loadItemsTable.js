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
import { getConfigVoucher, setTableDataProducts, getPriceByProduct, confirmLoadItems, searchProducts } from '../../actions';
import InputDropdown from 'components/form/inputDropdown';
import InputPriceUnit from './inputPriceUnit';
import { validateField } from 'lib/FieldValidations';
import NotificationMessage from 'components/common/notificationMessage';
import { P_CARGAITEMVTA } from 'constants/ConfigProcessNames';


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
        this.firtsRefs = null;
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.setClick(this.handleAddToCart);
        if (idOperacion) {
            this.props.getConfigVoucher({ cod_proceso: P_CARGAITEMVTA, idOperacion });
            this.handleAddToCart = this.handleAddToCart.bind(this);
        }
    }

    componentDidUpdate = (prevProps) => {
        const { search, updateCant, paramsPrice, itemsCart, parameterConfirm } = this.props;
        if (prevProps.itemsCart !== itemsCart && !prevProps.itemsCart) { //La primera Vez            
            this.setFocusNextRow();
        } else if (prevProps.itemsCart && itemsCart.total_importe !== prevProps.itemsCart.total_importe) {
            this.setFocusNextRow();
        }

        if (prevProps.updateCant !== updateCant && updateCant && paramsPrice) {
            const nextField = this.getNextEditField('cantidad');
            const nextRef = this.inputRefs[nextField][paramsPrice.Idproducto];
            if (nextRef.current.element) {
                nextRef.current.element.focus();
            } else {
                nextRef.current.focus();
            }
        }

        if (!search.Resultado && this.firtsRefs) {
            this.firtsRefs = null;
        }

        if (prevProps.search !== search && !prevProps.search.length) {
            if (this.firtsRefs && this.firtsRefs.current) {
                //console.log(this.firtsRefs)
                if (this.firtsRefs.current.element) {
                    this.firtsRefs.current.element.focus();
                } else {
                    this.firtsRefs.current.focus();
                }

            }
        }
    }

    getNextProductId = (idProduct) => {
        const { search } = this.props;
        let result = 0;
        search.productos.forEach((prd, index) => {
            if (prd.niprod === idProduct) {
                result = index + 1; //Next Row
            }
        });

        return (search.productos[result].niprod) ? search.productos[result].niprod : null;

    }

    setFocusNextRow = () => {
        const { parameterConfirm } = this.props;

        const nextRow = this.getNextProductId(parameterConfirm.Niprod);
        if (nextRow) {
            const field = this.getNextEditField('cod_prod'); //Primer campo
            const nextRef = this.inputRefs[field][nextRow];
            if (nextRef.current.element) {
                nextRef.current.element.focus();
            } else {
                nextRef.current.focus();
            }
        }
    }

    getNextEditField = (field) => {
        const { config } = this.props;
        let indexField = null;
        let result = null;

        config.campos.forEach((campo, index) => {
            const campoId = campo.idCampo.trim();
            if (campoId === field) {
                indexField = index;
            }
        });

        do {
            indexField = indexField + 1;
            result = config.campos[indexField].idCampo.trim();
        } while (!config.campos[indexField].editable);

        return result;
    }

    handleCloseError = () => {
        this.setState({ showError: false })
    }

    handleSetFocus = (input, rowId) => {
        const nextRef = this.inputRefs[input][rowId];
        if (input === 'fec_entrega' && nextRef.current) {
            nextRef.current.setFocus();
        } else if (nextRef.current && nextRef.current.element) {
            nextRef.current.element.focus();
        }
    }

    handleAddToCart = (row) => {
        const { config, t, idOperacion } = this.props;
        const message = [];
        let flag = true;

        const params = {
            idOperacion,
            Niprod: row.niprod,
            cod_unid: row.cod_unid,
            cantidad: row.cantidad,
            pcio_unit: row.pcio_unit,
            neto: row.neto,
            //fecha_entrega: row.fec_entrega
        }


        config.campos.forEach(field => {
            if (parseInt(field.requerido)) {
                const campoId = field.idCampo.trim();
                if (!validateField(row[campoId], field.valid)) {
                    this.props.setTableDataProducts([{ niprod: row.niprod, idCampo: campoId, value: 'error_input' }]);
                    message.push(`El campo ${field.label} es requerido.`);
                    flag = false;
                }
            }
        });

        if (flag) {
            this.props.confirmLoadItems(params);
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
                //console.log(tipo_bonif, 'tipo_bonif')
                result[bonif.tipo_bonif] = bonif.desc_bon
            });
        }
        return result;
    }

    getStyleColumn = (field) => {
        const idField = field.idCampo.trim();

        let style = {};

        switch (idField) {
            case 'desc_prod':
                style = { width: '20%' }
                break;
            case 'fec_entrega':
                style = { width: '12%' }
                break;
            case 'avisos':
                style = { width: '5%' }
                break;
            case 'ind_stock':
                style = { width: '2%' }
                break;
            case 'pcio_unit':
                style = { width: '13%' }
                break;
            case 'modif_pcio':
                style = { width: '1%' }
                break;
            case 'neto':
                style = { width: '13%' }
                break;
            case 'cod_unid':
                style = { width: '12%' }
                break;
            case 'cantidad':
                style = { width: '10%' }
                break;
            default:
                style = { width: '10%' }
                break;

        }

        if (field.requerido) {
            style.color = 'red';
        }

        return style;
    }

    getColumns = () => {
        const { config, theme } = this.props;
        const rows = config.campos.map((field) => {
            const campoId = field.idCampo.trim();

            return {
                dataField: campoId,
                text: (field.label) ? field.label : '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: this.getStyleColumn(field),
                hidden: !field.visible,
                title: (campoId === 'avisos') ? (cell, row, ) => {
                    let title = '';
                    row.Bonificaciones.forEach(bonif => {
                        title = `${title} ${bonif.desc_bon}`
                    });

                    return title;
                } : null,

                filter: (campoId === 'avisos') ? selectFilter({
                    options: this.getOptionsDeal(),
                    className: `${theme.inputFilter} mt-2`,
                    placeholder: 'Oferta',
                    onFilter: filterVal => this.setState({ filterVal }),
                }) : null,

                filterValue: (cell, row) => {
                    const filter = []
                    row.Bonificaciones.forEach(bonif => {
                        if (bonif.tipo_bon === this.state.filterVal) {
                            //console.log(bonif, '<<>>', this.state.filterVal)
                            filter.push(bonif.tipo_bon)
                        }
                    });

                    return filter;
                },
                formatter: (field.editable || campoId === 'avisos' || campoId === 'ind_stock' || campoId === 'modif_pcio') ? ((cell, row, rowIndex) => {
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

    handleOnblourInput = (value, campoId, row) => {
        if (campoId === 'cantidad') {
            this.props.getPriceByProduct({
                "idOperacion": this.props.idOperacion,
                "Idproducto": row.niprod,
                "cantidad": value,
                "unid_vta": row.cod_unid
            });

        } else if (campoId === 'pcio_unit') {
            const customValue = (value) ? parseFloat(('' + value).split(',').join('.')) : 0;
            const customCantidad = (row.cantidad) ? parseFloat(row.cantidad) : 0;
            const newPrice = (customCantidad * customValue) / parseFloat(row.base_v);
            const params = { niprod: row.niprod, idCampo: 'neto', value: newPrice.toString() };
            this.props.setTableDataProducts([params, { niprod: row.niprod, idCampo: 'pcio_unit', value: value }]);
        } else if (campoId === 'neto') {
            const newValue = (value) ? parseFloat(value.split(',').join('.')) : 0;
            const cantidad = (row.cantidad) ? parseFloat(row.cantidad) : 0;
            const newPrice = (cantidad) ? (parseFloat(row.base_v) * newValue) / cantidad : 0;
            const params = { niprod: row.niprod, idCampo: 'pcio_unit', value: newPrice.toString() }
            const paramsNeto = { niprod: row.niprod, idCampo: 'neto', value: newValue.toString() }
            this.props.setTableDataProducts([params, paramsNeto]);
        } else {
            const params = { niprod: row.niprod, idCampo: campoId, value };
            this.props.setTableDataProducts([params]);
        }
    }

    renderFormat = (field, value, row) => {
        const campoId = field.idCampo.trim();
        let result = null;
        const inputError = (value === 'error_input') ? true : false;
        const customValue = (value === 'error_input') ? '' : value;
        const inputStyle = (campoId === 'cantidad' || campoId === 'pcio_unit' || campoId === 'neto') ? { textAlign: 'right' } : {};
        const { focusInput } = this.props;

        if (field.editable && !this.inputRefs[campoId]) {
            this.inputRefs[campoId] = {};
        }

        if (field.editable && !this.inputRefs[campoId][row.niprod]) {
            const customRef = React.createRef();
            this.inputRefs[campoId][row.niprod] = customRef;
            if (this.firtsRefs === null) {
                this.firtsRefs = customRef;
            }
        }

        const optionsInput = {
            fwRef: (field.editable) ? this.inputRefs[campoId][row.niprod] : null,
            inputFormCol: { sm: 12 },
            fields: [{ ...field, label: false }],
            label: false,
            inputId: `${campoId}`,
            id: `${campoId}-${row.niprod}`,
            name: `${campoId}-${row.niprod}`,
            colLabel: "col-sm-4",
            colInput: "col-sm-8",
            divStyle: { paddingLeft: '10px', paddingRight: '10px' },
            disable: false,
            value: customValue,
            showError: inputError,
            styles: inputStyle,
            rowStyle: { marginBottom: '5px' },
            onChange: () => { }
        };

        if (campoId === 'avisos') {
            result = (row.Bonificaciones.length) ? <FontAwesomeIcon icon={faPercent} /> : null;
        } else if (campoId === 'cod_unid') {
            const selectOptions = (row.presentaciones) ? row.presentaciones.map(pre => {
                return { id: pre.cod_pres, label: pre.desc_pres };
            }) : []
            result = (
                <InputDropdown
                    {...optionsInput}
                    options={selectOptions}
                    onChange={(data) => {
                        const value = data.target.value;
                        this.props.setTableDataProducts([
                            { niprod: row.niprod, idCampo: campoId, value },
                            { niprod: row.niprod, idCampo: 'cantidad', value: 0 }]
                        );
                    }}
                />
            );
        } else if (campoId === 'ind_stock') {
            result = (<DisplayLight semaforo={value} />)
        } else if (campoId === 'modif_pcio') {
            result = (
                <InputPriceUnit
                    idOperacion={this.props.idOperacion}
                    optionsInput={optionsInput}
                    setData={this.props.setTableDataProducts}
                    handleFocus={(rowId) => {
                        console.log(rowId)
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
                        if (campoId === 'cantidad') {
                            // Focus next input            
                            this.props.getPriceByProduct({
                                "idOperacion": this.props.idOperacion,
                                "Idproducto": row.niprod,
                                "cantidad": value,
                                "unid_vta": row.cod_unid
                            });
                            //this.handleSetFocus('pcio_unit', row.niprod);
                        } else if (campoId === 'neto') {
                            const nextField = this.getNextEditField('neto');
                            this.handleSetFocus(nextField, row.niprod);
                        } else if (campoId === 'pcio_unit') {
                            this.handleOnblourInput(value, campoId, row);
                        }

                        return true;
                    }}
                    onBlur={(value) => {
                        this.handleOnblourInput(value, campoId, row);
                    }}
                />
            )

        }

        return result;

    }

    renderExpandRow = (row) => {
        const cols = [];
        let result;
        if (row && row.atributos && row.atributos.length) {
            row.atributos.forEach((atrb, index) => {
                cols.push(
                    <Col key={index} className={"col-6 p-2"}>
                        <b>{`${atrb.desc_atrib}:`}</b> {atrb.desc_dato}
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
        if (search && search.productos) {
            search.productos.forEach(prd => {
                if (!prd.atributos || prd.atributos.length === 0) {
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

    getExpandRow = (row) => {
        const noExpand = this.getNoexpandRows();
        return (
            {
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
            }
        )
    }

    handleOnTableChange = (type, pagination) => {
        //console.log(type, pagination)
    }

    render() {
        const { theme, searchBox, divClass, config, search, productsUpdate, searchParameters } = this.props;
        const tableColumns = (config && search) ? this.getColumns() : [];

        const rowData = (search.productos) ? search.productos.map((prod) => {
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


        const options = (search.productos) ? {
            page: search.page_number,
            sizePerPage: search.page_size,
            totalSize: search.total_count,
            onPageChange: (page, sizePerPage) => {
                this.props.searchProducts({ ...searchParameters, page_number: page, page_size: sizePerPage })
            },
            onSizePerPageChange: (sizePerPage, page) => {
                //console.log(page)
                this.props.searchProducts({ ...searchParameters, page_number: page, page_size: sizePerPage })
            }
        } : {};

        return (
            <Row className={divClass}>
                <Col sm={12} className={"mb-1"} >
                    <NotificationMessage
                        {...this.state}
                        handleCloseError={this.handleCloseError}
                        type={'danger'}
                    />
                </Col>
                {searchBox &&
                    <SearchBox
                        idOperacion={this.props.idOperacion}
                    />
                }
                {rowData &&
                    <Col className={`${divClass} col-12`}>
                        <CommonTable
                            remote
                            columns={tableColumns}
                            data={rowData}
                            keyField={'niprod'}
                            rowClasses={theme.tableRow}
                            headerClasses={theme.tableHeader}
                            expandRow={this.getExpandRow()}
                            paginationOptions={options}
                            onTableChange={this.handleOnTableChange}
                        />
                    </Col>}
            </Row>
        )
    }
}

const mapStateToProps = ({ voucher, product, loadItems }) => {
    const config = (voucher.config) ? voucher.config[P_CARGAITEMVTA] : null;
    const { itemsCart, parameterConfirm } = loadItems;
    const { search, searchParameters, productsUpdate, focusInput, updateCant, paramsPrice } = product
    return { config, search, searchParameters, productsUpdate, focusInput, updateCant, paramsPrice, itemsCart, parameterConfirm };
};

const connectForm = connect(mapStateToProps, { getConfigVoucher, setTableDataProducts, getPriceByProduct, confirmLoadItems, searchProducts })(LoadItemsTable);

export default themr('LoadItemsTableStyles', styles)(withTranslation()(connectForm));