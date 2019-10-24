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


class LoadItemsTableReadOnly extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };
    }

    componentDidMount = () => {
        this.props.getConfigVoucher({ cod_proceso: 'P_CargaItemenVentas', idOperacion: 1 });
        this.props.getProductsCart({ "idoperacion": 1 })
    }

    render() {
        const { productsCart, config } = this.props;
        return (
            <>
                {productsCart && <ProductsTotalResume formatCol={3} data={productsCart} />}
                {productsCart && config && <ShoppingCartTable config={config} cartProducts={productsCart} />}
                {productsCart && <ProductsTotalResume formatCol={3} data={productsCart} />}
            </>

        )
    }
}


const mapStateToProps = ({ product, voucher }) => {
    const { config } = voucher;

    const { productsCart } = product;
    return { productsCart, config };
};

const connectForm = connect(mapStateToProps, { getProductsCart, getConfigVoucher })(LoadItemsTableReadOnly);
export default themr('LoadItemsTableStyles', styles)(withTranslation()(connectForm));