import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import AccountingVoucherTable from '../../components/accountingVoucher/AccountingVoucherTable';
import { P_IMP_COMPROB } from 'constants/ConfigProcessNames';
import GlobalContainer from 'components/layout/globalContainer';
import { withRouter } from "react-router-dom";


class AccountingSeat extends Component {

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

    handleCallBackButton = (urlNext) => {
        this.accountingConfirmation(() => this.handleConfirmationForm(urlNext));
    }

    handleConfirmationForm = (url) => {
        this.props.history.push(url);
    }

    render() {
        const { voucherType } = this.props;
        return (
            <Row>
                <GlobalContainer
                    codeProccess={P_IMP_COMPROB}
                    voucherType={voucherType}
                    nextPage
                    callBackButton={this.handleCallBackButton}
                    childForm={(voucherType) ?
                        <AccountingVoucherTable
                            idOperacion={voucherType.idOperacion}
                            formConfirmation={click => this.accountingConfirmation = click}
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

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withRouter(withMenu(AccountingSeat))));