import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import GenerateForm from 'components/generate/generateForm';
import { getVoucherType } from '../../actions';
import { connect } from 'react-redux';
import GlobalContainer from 'components/common/globalContainer';
import { P_FINCOMPROB } from 'constants/ConfigProcessNames';

class Generate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idOperacion: null,
            completed: false
        }
    }

    componentDidMount() {
        const { match } = this.props;
        if (match.params.idComprobante) {
            const type = match.params.idComprobante;
            this.setState({ idOperacion: type });
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
                {voucherType &&
                    <GlobalContainer
                        codeProccess={P_FINCOMPROB}
                        voucherType={voucherType}
                        childForm={
                            <GenerateForm
                                handleChangeSuccess={this.successStep}
                                idOperacion={voucherType.idOperacion}
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

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(Generate)));