import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import GenerateForm from 'components/generate/generateForm';
import { getVoucherType } from '../../actions';
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import { connect } from 'react-redux';

class Generate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idComprobante: null,
            completed: false
        }
    }

    componentDidMount() {
        const { match } = this.props;
        if (match.params.idComprobante) {
            const type = match.params.idComprobante;
            this.setState({ idComprobante: type });
            this.props.getVoucherType({ idOperacion: type });
        }
    }

    successStep = () => {
        this.setState({ completed: true })
    }

    render() {
        const { t, voucherType } = this.props

        return (
            <Row>
                <Col sm={12} className={"title mt-3 "} style={{ fontSize: '14pt' }} >
                    {t("voucher.title")}
                </Col>
                <VoucherBreadCrumbs
                    crumbs={(voucherType) ? voucherType.procesos : []}
                    current={'p_fincomprob'}
                    completed={this.state.completed}
                    urlParameter={this.state.idComprobante}
                />
                {
                    <GenerateForm
                        handleChangeSuccess={this.successStep}
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

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(Generate)));