import React, { Component, Fragment } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import HeadboardForm from 'components/headboard/headboardForm';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import moment from 'moment';
import { P_VTACAB } from 'constants/ConfigProcessNames';
import GlobalContainer from 'components/layout/globalContainer';

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
        if (this.formRef.current) {
            this.formRef.current.handleSubmit();
            const now = new moment();
            this.setState({ urlSubmitForm, timeSet: now });
        }
        this.headBoardConfirmation();
    }

    render() {
        const { t, voucherType } = this.props;

        return (
            <Row >
                <GlobalContainer
                    codeProccess={P_VTACAB}
                    callBackButton={this.callBackButton}
                    voucherType={voucherType}
                    breadCrumbButtonType={'primary'}
                    nextPage
                    childForm={(voucherType) ?
                        <HeadboardForm
                            idOperacion={this.state.idOperacion}
                            crumbs={(voucherType) ? voucherType.procesos : []}
                            current={P_VTACAB}
                            urlParameter={this.state.idOperacion}
                            formRef={this.formRef}
                            urlSubmitForm={this.state.urlSubmitForm}
                            timeSet={this.state.timeSet}
                            formConfirmation={click => this.headBoardConfirmation = click}

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

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(Headboard)));