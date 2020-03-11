import React, { Component, Fragment } from 'react';
import { Collapse, Card } from 'reactstrap';
import { Row, Col } from 'react-bootstrap';
import CommonTable from 'components/common/commonTable';

export default class ComponentCardTable extends Component {
    render() {
        const { theme, t, dataTable, keyField, fieldTable, title } = this.props
        return (
            <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                <Row className={"mb-1"}>
                    <Col sm={6} className={`${theme.title} pb-2`}>
                        {title}
                    </Col>
                    <Col sm={3} className={theme.title} />
                </Row>
                <Row>
                    <Col className={'pt-2'} sm={3}> <strong>{t('voucherAffecting.table.totalLines')}</strong> </Col>
                    <Col className={'pt-2'} sm={3}>{(dataTable) ? dataTable.total_count : null}</Col>
                </Row>
                {dataTable &&
                    <Row className={'mt-2'} style={{ width: '98%' }} >
                        <CommonTable
                            remote
                            columns={fieldTable}
                            keyField={keyField}
                            data={(dataTable) ? dataTable.Items : []}
                            rowClasses={theme.tableRow}
                            headerClasses={theme.tableHeader}
                        />

                    </Row>
                }
            </Card>
        )
    }
}
