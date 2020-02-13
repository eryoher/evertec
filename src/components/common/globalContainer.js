import React, { Component, Fragment } from 'react'
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import HeadCartResume from 'components/loadItems/HeadCartResume';
import { clearMessage } from '../../actions';
import GlobalNotfications from './globalNotfications';
import { LANDING } from 'utils/RoutePath';
import { withRouter } from "react-router-dom";
import { ShortcutProvider, ShortcutConsumer } from 'react-keybind';
import GloblaShorcut from './globlaShorcut';
import { P_SELCLI } from 'constants/ConfigProcessNames';

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

    getShorcuts = () => {
        const { codeProccess } = this.props;

        const hotkeysMap = {
            "p_selcli": [
                {
                    hotkey: { charCode: "65", modifiers: ["shift+s", "ctrl+s"] },
                    action: this.save,
                    name: 'Save',
                    description: 'Save a file'
                }
            ],
            "p_cargaitemvta": [
                {
                    hotkey: { charCode: "65", modifiers: ["insert", "ctrl+s"] },
                    action: this.save,
                    name: 'Save',
                    description: 'Save a file'
                }
            ]
        };
        return hotkeysMap[codeProccess];
    }


    save = async (e) => {
        e.preventDefault()
        console.log('Saving file ...', e)


    }


    render() {
        const { childForm, voucherType, codeProccess, callBackButton, breadCrumbButtonType } = this.props;
        const shortcuts = this.getShorcuts();

        return (
            <GloblaShorcut
                shortcuts={shortcuts}
            >
                <Fragment>
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