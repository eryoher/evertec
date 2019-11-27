import React, { Component } from 'react';
import DisplayAmount from 'components/common/displayAmount';
import { Col, Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';


class VoucherAffectingTotal extends Component {
    render() {
        const { data, t, formatCol, classDiv } = this.props
        const totalItem = (data && data.total_item) ? data.total_item : 0;
        const totalImporte = (data && data.total_importe) ? data.total_importe : 0;
        const totalquantity = (data && data.total_cant) ? data.total_cant : 0;
        const mdCol = (formatCol) ? formatCol : 12;
        return (
            <Row className={classDiv} style={{ lineHeight: '1.4', fontWeight: 'bold', fontSize: '11pt' }} >
                <Col md={mdCol} >
                    <span> {`${t('voucherAffecting.table.totalVouchers')}: ${totalItem}`}</span>
                </Col>
                <Col md={mdCol}>
                    <span>{`${t('voucherAffecting.table.totalAffect')}:`} <DisplayAmount amount={totalImporte} /> </span>
                </Col>
                <Col md={mdCol}>
                    <span>{`${t('voucherAffecting.table.totalPending')}: ${totalquantity}`}</span>
                </Col>
            </Row>
        )
    }
}

export default (withTranslation())(VoucherAffectingTotal);