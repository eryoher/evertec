import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { themr } from 'react-css-themr';
import styles from './shoppingCart.module.css';
import { connect } from 'react-redux';
import { getConfigVoucher, getProductsCart } from '../../actions/';
import { P_CARGAITEMVTA } from 'constants/ConfigProcessNames';
import { Collapse, Card } from 'reactstrap';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import CollapseBotton from 'components/common/collapseBoton';
import CommonTable from 'components/common/commonTable';
import moment from 'moment';



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
                    <Col className={'pt-2'} sm={3}> <strong>{row.descrip}</strong> </Col>
                    <Col className={'pt-2'} sm={3}>{row.importe}</Col>
                </Fragment>
            )
        });

        return result;
    }

    handleChangeTable = (type, pagination) => {
        console.log(type, pagination)
        //http://190.210.181.180:2082/comprobante/vistafinal/items?idOperacion=1011&page_size=10&page_number=1
        this.props.handleChangeTable({ page_size: pagination.sizePerPage, page_number: pagination.page });
    }

    render() {
        const { theme, t, itemsTable } = this.props;

        const options = (itemsTable) ? {
            page: itemsTable.page_number,
            sizePerPage: itemsTable.page_size,
            totalSize: itemsTable.total_count,
        } : null

        return (
            <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                <Row className={"mb-3"}>
                    <Col sm={6} className={theme.title}>
                        {t('shoppingCart.title')}
                    </Col>
                    <Col sm={3} className={theme.title} />

                    <Col sm={{ span: 2 }} className={"text-right"} >
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </Col>
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
                    <CommonTable
                        remote
                        columns={this.columns}
                        keyField={'nitem'}
                        data={(itemsTable) ? itemsTable.Items : []}
                        rowClasses={theme.tableRow}
                        headerClasses={theme.tableHeader}
                        paginationOptions={options}
                        onTableChange={this.handleChangeTable}
                    />
                </Collapse>

            </Card>

        )
    }
}


const mapStateToProps = ({ generateForm, voucher }) => {
    const config = (voucher && voucher.config) ? voucher.config[P_CARGAITEMVTA] : null;

    return { config };
};

const connectForm = connect(mapStateToProps, { getConfigVoucher, getProductsCart })(LoadItemsTableReadOnly);
export default themr('LoadItemsTableStyles', styles)(withTranslation()(connectForm));