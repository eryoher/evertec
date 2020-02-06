import React, { Component, Fragment } from 'react'
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import HeadCartResume from 'components/loadItems/HeadCartResume';
import { clearMessage } from '../../actions';
import GlobalNotfications from './globalNotfications';
import { LANDING } from 'utils/RoutePath';
import { withRouter } from "react-router-dom";


class GlobalContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showMessage: false,
            message: ''
        }
    }

    componentDidUpdate = (prevProps) => {
        const { message, clearMessage } = this.props;
        if (prevProps.message !== message && message) {
            this.setState({ showMessage: true, message: message.description });
            clearMessage();
        }

        if (this.props.voucherTypeCancel !== prevProps.voucherTypeCancel && this.props.voucherTypeCancel) {
            this.props.history.push(LANDING)
        }
    }


    handleSetShow = (state) => {
        this.setState({ showMessage: state })
    }


    render() {
        const { childForm, voucherType, codeProccess, callBackButton, breadCrumbButtonType } = this.props;

        return (
            <Fragment>
                <Fragment>
                    <GlobalNotfications
                        {...this.state}
                        setShow={(s) => this.handleSetShow(s)}
                        voucherType={voucherType}
                    />
                </Fragment>
                {voucherType &&
                    <Fragment>
                        <HeadCartResume
                            idOperacion={voucherType.idOperacion}
                        />
                        <VoucherBreadCrumbs
                            crumbs={(voucherType) ? voucherType.procesos : []}
                            current={codeProccess}
                            urlParameter={voucherType.idOperacion}
                            callBackButton={callBackButton}
                            buttonsType={breadCrumbButtonType}
                        />
                        {childForm}
                    </Fragment>
                }
            </Fragment>
        );

    }
}

const mapStateToProps = ({ common, vouchertype }) => {
    const { message } = common;
    const { voucherTypeCancel } = vouchertype;
    return { message, voucherTypeCancel };
};


export default connect(mapStateToProps, { clearMessage })(withTranslation()(withRouter(GlobalContainer)));