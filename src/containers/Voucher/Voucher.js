import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import VoucherClientForm from 'components/voucher/voucherClientForm';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';


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
            const type = match.params.idComprobante;
            this.setState({ type: type });
            this.props.getVoucherType({ idComprobante: type, idEmpresa: 1 }); //Comprobante que ya existe
            //this.props.getVoucherType({ idOperacion: type })

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
                <Col sm={12} className={theme.Title} >
                    {t("voucher.title")}
                </Col>
                {voucherType &&
                    <VoucherBreadCrumbs
                        crumbs={(voucherType) ? voucherType.procesos : []}
                        current={'p_selcli'}
                        urlParameter={voucherType.idOperacion}
                        callBackButton={this.callBackButton}
                        buttonsType={'primary'}

                    />
                }
                {voucherType &&
                    <VoucherClientForm
                        idOperacion={voucherType.idOperacion}
                        crumbs={(voucherType) ? voucherType.procesos : []}
                        current={'p_selcli'}
                        urlParameter={voucherType.idOperacion}
                        formRef={this.formRef}
                        urlSubmitForm={this.state.urlSubmitForm}
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