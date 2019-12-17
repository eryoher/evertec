import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import HeadboardForm from 'components/headboard/headboardForm';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import moment from 'moment';

class Headboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            idOperacion: null,
            urlSubmitForm: ''
        }
        this.formRef = React.createRef();
    }

    componentDidMount() {
        const { match } = this.props;
        if (match.params.idComprobante) {
            const idOperacion = match.params.idComprobante;
            this.setState({ idOperacion });
            this.props.getVoucherType({ idOperacion });
        }
    }

    callBackButton = (urlSubmitForm) => {
        this.formRef.current.handleSubmit();
        const now = new moment();
        this.setState({ urlSubmitForm, timeSet: now })
    }

    render() {
        const { t, voucherType } = this.props;

        return (
            <Row className="" >
                <Col sm={12} className={"title m-3 "} style={{ fontSize: '14pt' }} >
                    {t("voucher.title")}
                </Col>

                <VoucherBreadCrumbs
                    crumbs={(voucherType) ? voucherType.procesos : []}
                    current={'p_vtacab'}
                    urlParameter={this.state.idOperacion}
                    callBackButton={this.callBackButton}
                    buttonsType={'primary'}
                />

                {
                    this.state.idOperacion &&
                    <HeadboardForm
                        idOperacion={this.state.idOperacion}
                        crumbs={(voucherType) ? voucherType.procesos : []}
                        current={'p_vtacab'}
                        urlParameter={this.state.idOperacion}
                        formRef={this.formRef}
                        urlSubmitForm={this.state.urlSubmitForm}
                        timeSet={this.state.timeSet}
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

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(Headboard)));