import React, { Component } from 'react';
import DisplayAmount from 'components/common/displayAmount';
import { Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';


class ProductsTotalResume extends Component {
    render() {
        const { data, t, formatCol } = this.props
        const totalItem = (data && data.total_item) ? data.total_item : 0;
        const totalImporte = (data && data.total_importe) ? data.total_importe : 0;
        const totalBruto = (data && data.total_margen_bruto) ? data.total_margen_bruto : 0;

        return (
            <Col md={formatCol} style={{ lineHeight: '1.4', fontWeight: 'bold', fontSize: '11pt' }} >
                <span> {`Total Ítems: ${totalItem}`}</span> <br />
                <span>{`${t('loadItem.table.totalImp')} :`} <DisplayAmount amount={totalImporte} /> </span><br />
                <span>{`${t('loadItem.table.total_gross_margin')} : ${totalBruto}`}</span>
            </Col>
        )
    }
}

export default (withTranslation())(ProductsTotalResume);