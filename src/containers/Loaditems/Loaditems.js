import React, { Component, Fragment } from 'react';
import withMenu from '../../components/common/withMenu'
import { Row, Col } from 'react-bootstrap';
import LoadItemsTable from 'components/loadItems/loadItemsTable';
import InputButton from 'components/form/inputButton';
import { getVoucherType, confirmLoadItems } from '../../actions';
import { connect } from 'react-redux';
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

    getShorcuts = () => {
        const shorcuts = [
            {
                hotkey: { charCode: "65", modifiers: ["insert", "ctrl+s"] },
                action: this.addToCart,
                name: 'Save',
                description: 'Save a file'
            }
        ]

        return shorcuts;
    }

    addToCart = async (e) => {
        const { productsUpdate, voucherType } = this.props;
        const { idOperacion } = voucherType;

        e.preventDefault()
        if (e.target.id) {
            const rowId = parseInt(e.target.id.split('_')[1]);
            console.log('Load item add to cart ...', e.target.id, rowId)

            productsUpdate.forEach(row => {
                console.log(row.niprod, rowId)

                if (row.niprod === rowId) {
                    const params = {
                        idOperacion,
                        Niprod: row.niprod,
                        cod_unid: row.cod_unid,
                        cantidad: row.cantidad,
                        pcio_unit: row.pcio_unit,
                        neto: row.neto,
                        fecha_entrega: row.fec_entrega
                    }
                    console.log(params)
                    this.props.confirmLoadItems(params);

                }
            });

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

const mapStateToProps = ({ vouchertype, product }) => {
    const { voucherType } = vouchertype;
    const { productsUpdate } = product
    return { voucherType, productsUpdate };
};

export default connect(mapStateToProps, { getVoucherType, confirmLoadItems })(withMenu(Loaditems));