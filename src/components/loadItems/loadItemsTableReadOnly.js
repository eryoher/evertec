import React, { Component } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { themr } from 'react-css-themr';
import styles from './shoppingCart.module.css';
import DisplayAmount from 'components/common/displayAmount';
import { connect } from 'react-redux';
import { getGenerateItems, getConfigVoucher } from '../../actions/';
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
        this.props.getGenerateItems({ "idoperacion": 1 })
    }

    render() {
        const { generateItems, config } = this.props;
        return (
            <>
                <div className={"mb-2"}>
                    {generateItems && <ProductsTotalResume formatCol={{ span: 2, offset: 8 }} data={generateItems} />}
                </div>
                {generateItems && config && <ShoppingCartTable config={config} cartProducts={generateItems} />}
                <div className={"mt-2"} >
                    {generateItems && <ProductsTotalResume formatCol={{ span: 2, offset: 8 }} data={generateItems} />}
                </div>
            </>

        )
    }
}


const mapStateToProps = ({ generateForm, voucher }) => {
    const { config } = voucher;

    const { generateItems } = generateForm;
    return { generateItems, config };
};

const connectForm = connect(mapStateToProps, { getGenerateItems, getConfigVoucher })(LoadItemsTableReadOnly);
export default themr('LoadItemsTableStyles', styles)(withTranslation()(connectForm));