import React, { Component } from 'react';
import DisplayAmount from 'components/common/displayAmount';
import { Col, Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';


class ProductsTotalResume extends Component {
    render() {
        const { data, t, formatCol } = this.props
        const totalItem = (data && data.total_item) ? data.total_item : 0;
        const totalImporte = (data && data.total_importe) ? data.total_importe : 0;
        const totalBruto = (data && data.total_margen_bruto) ? data.total_margen_bruto : 0;
        const colspace = (formatCol) ? formatCol : 12;
        return (
            <Row style={{ lineHeight: '1.4', fontWeight: 'bold', fontSize: '11pt' }} >
                <Col md={colspace}>
                    <span> {`Total Ítems: ${totalItem}`}</span>
                </Col>
                <Col md={colspace}>
                    <span>{`${t('loadItem.table.totalImp')} :`} <DisplayAmount amount={totalImporte} /> </span>
                </Col>
                <Col md={colspace}>
                    <span>{`${t('loadItem.table.total_gross_margin')} : ${totalBruto}`}</span>
                </Col>
            </Row>
        )
    }
}

export default (withTranslation())(ProductsTotalResume);