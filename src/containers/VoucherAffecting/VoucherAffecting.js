import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import HeadCartResume from 'components/loadItems/HeadCartResume';
import VoucherAffectingTable from 'components/voucherAffecting/voucherAffectingTable';
import { P_AFEC_IMPO_VTA } from 'constants/ConfigProcessNames';
import GlobalContainer from 'components/common/globalContainer';


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
        const { voucherType } = this.props


        return (
            <Row>
                <GlobalContainer
                    codeProccess={P_AFEC_IMPO_VTA}
                    voucherType={voucherType}
                    childForm={(voucherType) ?
                        <VoucherAffectingTable
                            idOperacion={voucherType.idOperacion}
                        /> : <div />
                    }
                />
            </Row>
        )

    }
}

const mapStateToProps = ({ vouchertype }) => {
    const { voucherType } = vouchertype;
    return { voucherType };
};

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(VoucherInvolvement)));