import React, { Component, Fragment } from 'react';
import styles from './shoppingCart.module.css';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { withTranslation } from 'react-i18next';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import { getConfigVoucher, getProductsCart } from '../../actions/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import CollapseBotton from 'components/common/collapseBoton';
import CommonTable from 'components/common/commonTable';
import { Collapse, Card } from 'reactstrap';
import { Row, Col } from 'react-bootstrap';


class LoadItemsTableReadOnly extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            collapseItemTable: false,
        };

        this.columns = [
            {
                dataField: 'fecha',
                text: 'Fecha',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
                formatter: (cell, row, rowIndex) => {
                    return moment(cell).format('DD/MM/YYYY')
                }
            },
            {
                dataField: 'cod_prod',
                text: 'Código',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
            },
            {
                dataField: 'desc_item',
                text: 'Descripción',
                align: 'center',
                headerAlign: 'center',
            },
            {
                dataField: 'cod_unid',
                text: 'Unidad',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '8%' },

            },
            {
                dataField: 'cant',
                text: 'Cantidad',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },

            },
            {
                dataField: 'precio',
                text: 'Precio Unitario',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },

            },
            {
                dataField: 'neto',
                text: 'Importe Neto',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },

            },
            {
                dataField: 'estado',
                text: 'Estado',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },

            },

        ]
    }

    toggleTableItem() {
        this.setState(state => ({ collapseItemTable: !state.collapseItemTable }));
    }

    renderTotales = () => {
        const { totalTable } = this.props;
        const result = [];

        totalTable.forEach((row, index) => {
            result.push(
                <Fragment key={index}>
                    <Col sm={3}> <strong>{row.descrip}</strong> </Col>
                    <Col sm={3}>{row.importe}</Col>
                </Fragment>
            )
        });

        return result;
    }

    handleChangeTable = (type, pagination) => {
        this.props.handleChangeTable({ page_size: pagination.sizePerPage, page_number: pagination.page });
    }

    render() {
        const { theme, t, itemsTable, generateItemsTable } = this.props;
        const dataTable = (generateItemsTable) ? generateItemsTable : itemsTable;
        const options = (dataTable) ? {
            page: dataTable.page_number,
            sizePerPage: dataTable.page_size,
            totalSize: dataTable.total_count,
        } : null

        return (
            <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                <Row className={"mb-3"}>
                    <Col sm={6} className={`${theme.title} pb-2`}>
                        {t('shoppingCart.generate_title')}
                    </Col>
                    <Col sm={3} className={theme.title} />

                    <Col sm={{ span: 2 }} className={"text-right"} >
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </Col>
                    <Fragment>
                        <Col className={'pt-2'} sm={3}> <strong>{t('shoppingCart.total')}</strong> </Col>
                        <Col className={'pt-2'} sm={3}>{(dataTable) ? dataTable.total_count : null}</Col>
                    </Fragment>
                </Row>
                <Row>
                    {this.renderTotales()}
                </Row>
                <Row className={'mt-2'}>
                    <Col sm={1}>
                        <CollapseBotton
                            onPress={() => this.toggleTableItem()}
                            status={this.state.collapseItemTable}
                        />
                    </Col>
                    <Col sm={11}>
                        <div className="dropdown-divider col-11 p-1" />
                    </Col>
                </Row>

                <Collapse isOpen={this.state.collapseItemTable}>
                    <Row style={{ width: '98%' }} >
                        <CommonTable
                            remote
                            columns={this.columns}
                            keyField={'nitem'}
                            data={(dataTable) ? dataTable.Items : []}
                            rowClasses={theme.tableRow}
                            headerClasses={theme.tableHeader}
                            paginationOptions={options}
                            onTableChange={this.handleChangeTable}
                        />
                    </Row>
                </Collapse>

            </Card>

        )
    }
}


const mapStateToProps = ({ generateForm }) => {
    const { generateItemsTable } = generateForm;

    return { generateItemsTable };
};

const connectForm = connect(mapStateToProps, { getConfigVoucher, getProductsCart })(LoadItemsTableReadOnly);
export default themr('LoadItemsTableStyles', styles)(withTranslation()(connectForm));