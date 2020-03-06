import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { themr } from 'react-css-themr';
import styles from './shoppingCart.module.css';
import { connect } from 'react-redux';
import { getConfigVoucher, getProductsCart } from '../../actions/';
import ShoppingCartTable from './shoppingCartTable';
import ProductsTotalResume from './productsTotalResume';
import { P_CARGAITEMVTA } from 'constants/ConfigProcessNames';


class LoadItemsTableReadOnly extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.getProductsCart({ idOperacion: '21', page_number: 1, page_size: 10 });
        this.props.getConfigVoucher({ cod_proceso: P_CARGAITEMVTA, idOperacion });
        // this.props.getGenerateItems({ "idoperacion": 1 })
    }

    render() {
        const { generateItems, config } = this.props;
        return (
            <>
                <div className={"mb-2"}>
                    {generateItems && <ProductsTotalResume formatCol={{ span: 4 }} data={generateItems} />}
                </div>
                {generateItems.Items && config &&
                    <ShoppingCartTable config={config} cartProducts={{ ...generateItems, productos: generateItems.Items }} />
                }
                <div className={"mt-2"} >
                    {generateItems && <ProductsTotalResume formatCol={{ span: 4 }} data={generateItems} />}
                </div>
            </>

        )
    }
}


const mapStateToProps = ({ generateForm, voucher }) => {
    const config = (voucher && voucher.config) ? voucher.config[P_CARGAITEMVTA] : null;

    return { config };
};

const connectForm = connect(mapStateToProps, { getConfigVoucher, getProductsCart })(LoadItemsTableReadOnly);
export default themr('LoadItemsTableStyles', styles)(withTranslation()(connectForm));