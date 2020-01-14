import React, { Component, Fragment } from 'react';
import withMenu from '../../components/common/withMenu'
import { Row, Col } from 'react-bootstrap';
import LoadItemsTable from 'components/loadItems/loadItemsTable';
import InputButton from 'components/form/inputButton';
import { getVoucherType } from '../../actions';
import { connect } from 'react-redux';
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import HeadCartResume from 'components/loadItems/HeadCartResume';
import { getBackNextButtons } from '../../lib/BreadCrumbsUtils';
import { P_CARGAITEMVTA } from 'constants/ConfigProcessNames';
import GlobalContainer from 'components/common/globalContainer';


class Loaditems extends Component {

    constructor(props) {
        super(props);
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
        const { voucherType } = this.props;
        const [backButton, nextButton] = (voucherType) ? getBackNextButtons((voucherType) ? voucherType.procesos : [], P_CARGAITEMVTA, voucherType.idOperacion) : [];

        return (
            <Row>
                <GlobalContainer
                    codeProccess={P_CARGAITEMVTA}
                    voucherType={voucherType}
                    childForm={(voucherType) ?
                        <Fragment >
                            <Col sm={12}>
                                <LoadItemsTable
                                    searchBox
                                    divClass={"mt-1"}
                                    idOperacion={voucherType.idOperacion}
                                />
                            </Col>
                            <Col sm={1} style={{ textAlign: 'left', paddingLeft: '2rem' }} className={"mt-2"} >
                                {
                                    backButton &&
                                    <InputButton
                                        backButton
                                        urlForm={backButton.url}
                                    />
                                }
                            </Col>
                            <Col style={{ textAlign: 'rigth' }} className={"mt-2 col-1 offset-10"} >
                                {
                                    nextButton &&
                                    <InputButton
                                        nextButton
                                        urlForm={nextButton.url}
                                    />}
                            </Col>
                        </Fragment>
                        : <div />
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

export default connect(mapStateToProps, { getVoucherType })(withMenu(Loaditems));