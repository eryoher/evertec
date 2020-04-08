import React, { Component, Fragment } from 'react'
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import HeadCartResume from 'components/loadItems/HeadCartResume';
import { clearMessage } from '../../actions';
import GlobalNotfications from '../common/globalNotfications';
import { LANDING } from 'utils/RoutePath';
import { withRouter } from "react-router-dom";
import GloblaShorcut from './globlaShorcut';
import { getBackNextButtons } from '../../lib/BreadCrumbsUtils';
import ErrorBoundary from './ErrorBoundary';

class GlobalContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showMessage: false,
            message: ''
        }
    }

    componentDidUpdate = (prevProps) => {
        const { message, clearMessage, t } = this.props;
        if (prevProps.message !== message && message) {
            this.setState({ showMessage: true, message: (message.description.Mens_error) ? message.description : t(message.description) });
            clearMessage();
        }

        if (this.props.voucherTypeCancel !== prevProps.voucherTypeCancel && this.props.voucherTypeCancel) {
            this.props.history.push(LANDING)
        }
    }

    getShortcuts = () => {
        const { shortcuts } = this.props;
        const rtShort = (shortcuts) ? shortcuts : [];
        rtShort.push(
            {
                hotkey: { charCode: "123", modifiers: ["f12"] },
                action: this.handleNextPage,
                name: 'NextPage',
                description: 'to call Next Page'
            }
        );

        return rtShort;
    }

    handleNextPage = () => {
        const { voucherType, codeProccess, callBackButton } = this.props;
        //console.log('paso ', codeProccess)
        const crumbs = (voucherType) ? voucherType.procesos : [];
        if (voucherType) {
            const [backButton, nextButton] = getBackNextButtons(crumbs, codeProccess, voucherType.idOperacion);
            if (callBackButton) {
                callBackButton(nextButton.url);
            } else {
                //console.log(nextButton.url)
                this.props.history.push(nextButton.url)
            }

        }

    }

    handleSetShow = (state) => {
        this.setState({ showMessage: state })
    }

    render() {
        const { childForm, voucherType, codeProccess, callBackButton, breadCrumbButtonType, shortcuts, nextPage } = this.props;
        const customShortcuts = (nextPage) ? this.getShortcuts() : shortcuts;

        return (
            <GloblaShorcut
                shortcuts={customShortcuts}
            >
                <GlobalNotfications
                    {...this.state}
                    setShow={(s) => this.handleSetShow(s)}
                    voucherType={voucherType}
                />
                {voucherType &&
                    <Fragment>
                        <ErrorBoundary>
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
                        </ErrorBoundary>
                        <ErrorBoundary >
                            {childForm}
                        </ErrorBoundary>
                    </Fragment>
                }
            </GloblaShorcut>
        );

    }
}

const mapStateToProps = ({ common, vouchertype }) => {
    const { message } = common;
    const { voucherTypeCancel } = vouchertype;
    return { message, voucherTypeCancel };
};


export default connect(mapStateToProps, { clearMessage })(withTranslation()(withRouter(GlobalContainer)));