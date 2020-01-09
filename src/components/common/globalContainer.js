import React, { Component } from 'react'
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import HeadCartResume from 'components/loadItems/HeadCartResume';


class GlobalContainer extends Component {
    render() {
        const { childForm, voucherType, codeProccess, callBackButton, breadCrumbButtonType } = this.props;

        return (
            <>
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
            </>
        )
    }
}


export default withTranslation()(GlobalContainer);
