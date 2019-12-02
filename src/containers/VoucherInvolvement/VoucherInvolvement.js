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
            idOperacion: null
        }
    }

    componentDidMount() {
        const { match } = this.props;
        if (match.params.idComprobante) {
            const idOperacion = match.params.idComprobante;
            this.setState({ idOperacion });
            this.props.getVoucherType({ idOperacion });
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
                        current={'p_afec_cant_vta'}
                        urlParameter={this.state.type}
                    />
                </Col>
                {
                    this.state.idOperacion &&
                    <VoucherInvolvementTable
                        idOperacion={this.state.idOperacion}
                    />
                }

            </Row>
        )
    }
}

const mapStateToProps = ({ vouchertype }) => {
    const { voucherType } = vouchertype;
    return { voucherType };
};

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(VoucherInvolvement)));