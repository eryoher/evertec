import React, { Component } from 'react';
import DisplayAmount from 'components/common/displayAmount';
import { Col, Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';


class InvolvementTotalResume extends Component {
    render() {
        const { data, t, formatCol, classDiv } = this.props
        const totalItem = (data && data.total_item) ? data.total_item : 0;
        const totalImporte = (data && data.total_importe) ? data.total_importe : 0;
        const totalquantity = (data && data.total_cant) ? data.total_cant : 0;
        const mdCol = (formatCol) ? formatCol : 12;
        return (
            <Row className={classDiv} style={{ lineHeight: '1.4', fontWeight: 'bold', fontSize: '11pt' }} >
                <Col md={mdCol} >
                    <span> {`Total Ítems: ${totalItem}`}</span>
                </Col>
                <Col md={mdCol}>
                    <span>{`${t('loadItem.table.totalImp')} :`} <DisplayAmount amount={totalImporte} /> </span>
                </Col>
                <Col md={mdCol}>
                    <span>{`${t('voucherInvolvement.table.total_item_quantity')} : ${totalquantity}`}</span>
                </Col>
            </Row>
        )
    }
}

export default (withTranslation())(InvolvementTotalResume);