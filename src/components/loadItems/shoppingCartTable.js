import React, { Component } from 'react'
import CommonTable from 'components/common/commonTable'
import { Col, Row } from 'react-bootstrap'
import PopupImage from 'components/common/popupImage';
import { selectFilter } from 'react-bootstrap-table2-filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import DisplayLight from 'components/common/displayLight';
import styles from './itemsTable.module.css';
import { themr } from 'react-css-themr';
import CollapseBotton from 'components/common/collapseBoton';

class ShoppingCartTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterVal: null
        }
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
                    if (row.Bonificaciones && row.Bonificaciones.length) {
                        row.Bonificaciones.forEach(bonif => {
                            title = `${title} ${bonif.desc_bonif}`
                        });
                    }

                    return title;
                } : null,

                filter: (campoId === 'avisos') ? selectFilter({
                    options: this.getOptionsDeal(),
                    className: `mt-2`,
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
                formatter: (campoId === 'avisos' || campoId === 'ind_stock') ? ((cell, row, rowIndex) => {
                    return this.renderFormat(field, cell, row)
                }) : null
            }

        });

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

    getStyleColumn = (field) => {
        const idField = field.idCampo.trim();

        let style = {};

        switch (idField) {
            case 'desc_prod':
                style = { width: '25%' }
                break;
            case 'fec_entrega':
                style = { width: '13%' }
                break;
            case 'avisos':
                style = { width: '10%' }
                break;
            case 'ind_stock':
                style = { width: '1%' }
                break;
            case 'precio_unit':
                style = { width: '10%' }
                break;
            case 'modif_pcio':
                style = { width: '1%' }
                break;

            case 'neto':
                style = { width: '10%' }
                break;
            default:
                style = { width: '10%' }
                break;

        }

        return style;
    }

    getOptionsDeal = () => {
        const { cartProducts } = this.props;
        let result = {};
        if (cartProducts.bonificaciones) {
            cartProducts.bonificaciones.forEach(bonif => {
                result[bonif.cod_bonif] = bonif.desc_bonif
            });
        }
        return result;
    }

    renderFormat = (field, value, row) => {
        let result = null;
        const campoId = field.idCampo.trim();
        if (campoId === 'avisos') {
            result = (row.Bonificaciones && row.Bonificaciones.length) ? <FontAwesomeIcon icon={faPercent} /> : null
        } else if (campoId === 'ind_stock') {
            result = (<DisplayLight semaforo={value} />)
        }
        return result;
    }


    renderExpandRow = (row) => {
        const cols = [];
        let result;
        if (row.atributos && row.atributos.length) {
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

    render() {
        const { cartProducts, config, theme } = this.props;
        const tableColumns = (config) ? this.getColumns() : [];
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

        const options = (cartProducts.productos) ? {
            page: cartProducts.page_number,
            sizePerPage: cartProducts.page_size,
            totalSize: cartProducts.total_count,
        } : {}

        return (
            <Col className={`col-12`}>
                <CommonTable
                    remote
                    columns={tableColumns}
                    keyField={'niprod'}
                    data={cartProducts.Productos}
                    rowClasses={theme.tableRow}
                    headerClasses={theme.tableHeader}
                    expandRow={expandRow}
                    paginationOptions={options}
                    onTableChange={this.props.handleChangeTable}
                />
            </Col>
        )
    }
}

export default themr('ShoppingCartTableStyles', styles)(ShoppingCartTable);