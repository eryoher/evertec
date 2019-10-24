import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import HeadCartResume from 'components/loadItems/HeadCartResume';
import VoucherInvolvementTable from 'components/voucherInvolvement/voucherInvolvementTable';


class VoucherInvolvement extends Component {

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
                <HeadCartResume />
                <Col sm={12}>
                    <VoucherBreadCrumbs
                        crumbs={(voucherType) ? voucherType.procesos : []}
                        current={'p_afectcomprob'}
                        urlParameter={this.state.type}
                    />
                </Col>
                <VoucherInvolvementTable />

            </Row>
        )
    }
}

const mapStateToProps = ({ vouchertype }) => {
    const { voucherType } = vouchertype;
    return { voucherType };
};

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(VoucherInvolvement)));