import React, { Component, Fragment } from 'react';
import { Collapse, Card } from 'reactstrap';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import CommonTable from 'components/common/commonTable';
import moment from 'moment';


export default class AffectedVouchers extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                dataField: 'fecha_emis',
                text: 'Fecha',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
                formatter: (cell, row, rowIndex) => {
                    return moment(cell).format('DD/MM/YYYY')
                }
            },
            {
                dataField: 'fecha_vto',
                text: 'Fec. Vto.',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
                formatter: (cell, row, rowIndex) => {
                    return moment(cell).format('DD/MM/YYYY')
                }
            },
            {
                dataField: 'comprob_nro',
                text: 'Numero',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
            },
            {
                dataField: 'comprob_desc',
                text: 'Comprobante',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '15%' },

            },
            {
                dataField: 'cod_unid',
                text: 'Unidad',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '8%' },

            },
            {
                dataField: 'cant_afec',
                text: 'Cant Afectada',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '9%' },

            },
            {
                dataField: 'imp_afec',
                text: 'Importe Afectado',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '9%' },

            },
            {
                dataField: 'cant_pend',
                text: 'Cant Pendiente',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },

            },
            {
                dataField: 'imp_pend',
                text: 'Importe Pendiente',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },

            },
            {
                dataField: 'estado_orig',
                text: 'Estado Origen',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '9%' },

            },
            {
                dataField: 'estado_dest',
                text: 'Estado Destino',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '9%' },

            },

        ]
    }

    handleChangeTable = (type, pagination) => {
        this.props.handleChangeTable({ page_size: pagination.sizePerPage, page_number: pagination.page });
    }

    render() {
        const { theme, t, itemsTable, affecItemsTable } = this.props;
        const dataTable = (affecItemsTable) ? affecItemsTable : itemsTable;
        const options = (dataTable) ? {
            page: dataTable.page_number,
            sizePerPage: dataTable.page_size,
            totalSize: dataTable.total_count,
        } : null

        return (
            <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                <Row className={"mb-3"}>
                    <Col sm={6} className={`${theme.title} pb-2`}>
                        {t('voucherAffecting.title_table')}
                    </Col>
                    <Col sm={3} className={theme.title} />

                    <Col sm={{ span: 2 }} className={"text-right"} >
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </Col>
                    <Fragment>
                        <Col className={'pt-2'} sm={3}> <strong>{t('voucherAffecting.table.totalLines')}</strong> </Col>
                        <Col className={'pt-2'} sm={3}>{(dataTable) ? dataTable.total_count : null}</Col>
                    </Fragment>
                </Row>
                <Row style={{ width: '98%' }}>
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
            </Card>
        )
    }
}
