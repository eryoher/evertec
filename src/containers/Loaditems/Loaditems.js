import React, { Component, Fragment } from 'react';
import withMenu from '../../components/common/withMenu'
import { Row, Col } from 'react-bootstrap';
import LoadItemsTable from 'components/loadItems/loadItemsTable';
import InputButton from 'components/form/inputButton';
import { getVoucherType, confirmLoadItems } from '../../actions';
import { connect } from 'react-redux';
import { getBackNextButtons } from '../../lib/BreadCrumbsUtils';
import { P_CARGAITEMVTA } from 'constants/ConfigProcessNames';
import GlobalContainer from 'components/layout/globalContainer';


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

    getShorcuts = () => {
        const shorcuts = [
            {
                hotkey: { charCode: "65", modifiers: ["insert"] },
                action: this.addToCart,
                name: 'Save',
                description: 'Save a file'
            },
            {
                hotkey: { charCode: "65", modifiers: ["home"] },
                action: this.homeFocus,
                name: 'Focus',
                description: 'Focus init'
            }
        ]

        return shorcuts;
    }

    homeFocus = async () => {
        this.handleFocus();
    }

    addToCart = async (e) => {
        const { productsUpdate, search } = this.props;

        if (e.target.id) {
            const rowId = parseInt(e.target.id.split('-')[1]);
            if (productsUpdate) {
                productsUpdate.forEach(row => {
                    if (row.niprod === rowId) {
                        e.preventDefault();
                        this.addRowToCart(row);
                    }
                });
            } else if (search.productos) {
                search.productos.forEach(row => {
                    if (row.niprod === rowId) {
                        e.preventDefault();
                        this.addRowToCart(row);
                    }
                });
            }

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
                    shortcuts={this.getShorcuts()}
                    nextPage
                    childForm={(voucherType) ?
                        <Fragment >
                            <Col sm={12}>
                                <LoadItemsTable
                                    searchBox
                                    divClass={"mt-1"}
                                    idOperacion={voucherType.idOperacion}
                                    setClick={click => this.addRowToCart = click}
                                    homeFocus={click => this.handleFocus = click}
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

const mapStateToProps = ({ vouchertype, product }) => {
    const { voucherType } = vouchertype;
    const { productsUpdate, search } = product
    return { voucherType, productsUpdate, search };
};

export default connect(mapStateToProps, { getVoucherType, confirmLoadItems })(withMenu(Loaditems));