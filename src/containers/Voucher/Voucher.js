import React, { Component, Fragment } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import VoucherClientForm from 'components/voucher/voucherClientForm';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import { P_SELCLI } from 'constants/ConfigProcessNames';
import GlobalContainer from 'components/common/globalContainer';


class Voucher extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: null,
            urlSubmitForm: ''
        }
        this.formRef = React.createRef();

    }

    componentDidMount() {
        const { match } = this.props;
        if (match.params.idComprobante) {
            const { idOperacion, idComprobante } = match.params;
            if (idComprobante && idOperacion) {
                this.props.getVoucherType({ idComprobante: idOperacion, idEmpresa: idComprobante }); //Comprobante nuevo.                
            } else {
                this.props.getVoucherType({ idOperacion: idComprobante }) //Comprobante. que ya existe.
            }
            this.setState({ type: idComprobante });
        }
    }

    callBackButton = (urlSubmitForm) => {
        this.formRef.current.handleSubmit();
        this.setState({ urlSubmitForm })
    }

    render() {
        const { t, theme, voucherType } = this.props;

        return (
            <Row>
                {voucherType &&
                    <GlobalContainer
                        codeProccess={P_SELCLI}
                        callBackButton={this.callBackButton}
                        voucherType={voucherType}
                        breadCrumbButtonType={'primary'}
                        childForm={
                            <VoucherClientForm
                                idOperacion={voucherType.idOperacion}
                                crumbs={(voucherType) ? voucherType.procesos : []}
                                current={P_SELCLI}
                                urlParameter={voucherType.idOperacion}
                                formRef={this.formRef}
                                urlSubmitForm={this.state.urlSubmitForm}
                            />
                        }
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

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(Voucher)));