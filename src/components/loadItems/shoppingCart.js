import React, { Component } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { themr } from 'react-css-themr';
import styles from './shoppingCart.module.css';
import DisplayAmount from 'components/common/displayAmount';
import { connect } from 'react-redux';
import { getProductsCart, getConfigVoucher } from '../../actions/';
import ShoppingCartTable from './shoppingCartTable';
import ProductsTotalResume from './productsTotalResume';
import { P_CARGAITEMVTA } from 'constants/ConfigProcessNames';


class ShoppingCart extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.getConfigVoucher({ cod_proceso: P_CARGAITEMVTA, idOperacion })
        this.props.getProductsCart({ idOperacion, page_number: 1, page_size: 10 });
    }

    handleChangeTable = (type, pagination) => {
        const { idOperacion } = this.props;
        this.props.getProductsCart({ idOperacion, page_number: pagination.page, page_size: pagination.sizePerPage });
    }

    render() {
        const { showModal, handleClose, t, theme, productsCart, config, idOperacion } = this.props;
        return (
            <Modal
                show={showModal}
                size="xl"
                onHide={handleClose}
                aria-labelledby="ModalHeader"
            >
                <Modal.Header closeButton className={theme.divHeader}>
                    <Modal.Title id='ModalHeader' className={theme.divTitle} >
                        {t('shoppingCart.title')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6} style={{ lineHeight: '1.4' }} >
                            <span style={{ fontSize: '13pt' }}>Nota de Venta con Aprobación</span> <br />
                            <span style={{ fontSize: '9pt', color: 'grey' }}>CCFCIAFC01101-ASOCIACION MUTUAL DE LA POLICIA DE FSA </span><br />
                            <span style={{ fontSize: '9pt', color: 'grey' }}>0006-18/04/2019-Boris Nicolas Lucasvez</span>
                        </Col>
                        {productsCart && <ProductsTotalResume formatCol={{ span: 7, offset: 5 }} data={productsCart} />}
                    </Row>
                    {productsCart && config &&
                        <ShoppingCartTable
                            config={config}
                            cartProducts={productsCart}
                            idOperacion={idOperacion}
                            handleChangeTable={this.handleChangeTable}
                        />
                    }
                    {productsCart && <ProductsTotalResume formatCol={{ span: 4, offset: 8 }} data={productsCart} />}

                </Modal.Body>
            </Modal>
        )
    }
}


const mapStateToProps = ({ product, voucher }) => {
    const config = (voucher.config) ? voucher.config[P_CARGAITEMVTA] : null;
    const { productsCart } = product;
    return { productsCart, config };
};

const connectForm = connect(mapStateToProps, { getProductsCart, getConfigVoucher })(ShoppingCart);
export default themr('LoadItemsTableStyles', styles)(withTranslation()(connectForm));