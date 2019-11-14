import React, { Component } from 'react';
import withMenu from '../../components/common/withMenu'
import { Row, Col } from 'react-bootstrap';
import LoadItemsTable from 'components/loadItems/loadItemsTable';
import InputButton from 'components/form/inputButton';
import { HEADERBOARD, GENERATE } from '../../utils/RoutePath';
import { getVoucherType } from '../../actions';
import { connect } from 'react-redux';
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import HeadCartResume from 'components/loadItems/HeadCartResume';


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

        return (
            <Row>
                <HeadCartResume />
                <Col sm={12}>
                    <VoucherBreadCrumbs
                        crumbs={(voucherType) ? voucherType.procesos : []}
                        current={'p_cargaitemvta'}
                        urlParameter={this.state.idOperacion}
                    />
                </Col>
                <Col sm={12}>
                    {this.state.idOperacion && <LoadItemsTable
                        searchBox
                        divClass={"mt-1"}
                        idOperacion={this.state.idOperacion}
                    />}
                </Col>
                <Col sm={1} style={{ textAlign: 'left', paddingLeft: '2rem' }} className={"mt-2"} >
                    <InputButton
                        backButton
                        urlForm={HEADERBOARD}
                    />
                </Col>
                <Col style={{ textAlign: 'center' }} className={"mt-2 col-2 offset-9"} >
                    <InputButton
                        nextButton
                        urlForm={GENERATE}
                    />
                </Col>
            </Row>

        )
    }
}

const mapStateToProps = ({ vouchertype }) => {
    const { voucherType } = vouchertype;
    return { voucherType };
};

export default connect(mapStateToProps, { getVoucherType })(withMenu(Loaditems));