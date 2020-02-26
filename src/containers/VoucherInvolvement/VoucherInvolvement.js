import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import VoucherInvolvementTable from 'components/voucherInvolvement/voucherInvolvementTable';
import GlobalContainer from 'components/common/globalContainer';
import { P_AFEC_CANT_VTA } from "../../constants/ConfigProcessNames";

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
                    codeProccess={P_AFEC_CANT_VTA}
                    voucherType={voucherType}
                    nextPage
                    childForm={(voucherType) ?
                        <VoucherInvolvementTable
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