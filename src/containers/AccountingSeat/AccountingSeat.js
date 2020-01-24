import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import AccountingSeatTable from 'components/accountingSeat/AccountingSeatTable';
import { P_ASIEN_CONT } from 'constants/ConfigProcessNames';
import GlobalContainer from 'components/common/globalContainer';


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

    render() {
        const { voucherType } = this.props

        return (
            <Row>
                <GlobalContainer
                    codeProccess={P_ASIEN_CONT}
                    voucherType={voucherType}
                    childForm={(voucherType) ?
                        <AccountingSeatTable
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

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(AccountingSeat)));