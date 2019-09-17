import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import VoucherClientForm from 'components/voucher/voucherClientForm';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';


class Voucher extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: null
        }
    }

    componentDidMount() {
        const { match } = this.props;
        if (match.params.idComprobante) {
            const type = match.params.idComprobante;
            this.setState({ type });
            this.props.getVoucherType({ idComprobante: type });
        }
    }


    render() {
        const { t, theme, voucherType } = this.props

        return (
            <Row>
                <Col sm={12} className={theme.Title} >
                    {t("voucher.title")}
                </Col>
                <VoucherBreadCrumbs
                    crumbs={(voucherType) ? voucherType.procesos : []}
                    current={'p_selcli'}
                    urlParameter={this.state.type}
                />
                <VoucherClientForm />
            </Row>
        )
    }
}

const mapStateToProps = ({ vouchertype }) => {
    const { voucherType } = vouchertype;
    return { voucherType };
};

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(Voucher)));