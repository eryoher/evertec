import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import ShoppingCart from './shoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import DisplayAmount from 'components/common/displayAmount';
import { withTranslation } from 'react-i18next';
import { themr } from 'react-css-themr';
import styles from '../../containers/Loaditems/Loaditems.module.css';
import { connect } from 'react-redux';
import { getLoadItems } from '../../actions/';

class HeadCartResume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentDidMount = () => {
        this.props.getLoadItems({ niprod: 123456 });
    }

    handleOpen = () => {
        this.setState({ showModal: true });
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }
    render() {
        const { theme, t, itemsCart } = this.props
        return (
            <>
                <Col sm={12}>
                    {this.state.showModal && <ShoppingCart
                        showModal={this.state.showModal}
                        handleClose={this.handleClose}
                        idOperacion={this.props.idOperacion}
                    />}
                </Col>
                <Col sm={6} className={`${theme.Title} col-12 mt-3`} >
                    {t("loadItem.title")}
                </Col>
                {itemsCart &&
                    <>
                        <Col sm={3} className={"text-center  mt-3 mb-3"} >
                            {`${t('loadItem.table.totalImp')} :`} <DisplayAmount amount={itemsCart.total_importe} />
                        </Col>
                        <Col sm={1} className={"text-right  mb-3"} style={{ paddingRight: '5px' }} >
                            <span className={`badge badge-primary ${theme.cantBadge}`}>
                                {`${itemsCart.total_item} / ${itemsCart.total_cant}`}
                            </span>
                        </Col>
                    </>
                }

                <Col sm={2} className={"text-left  mt-3"} style={{ paddingLeft: '5px' }} >
                    <FontAwesomeIcon icon={faShoppingCart} onClick={this.handleOpen} />
                </Col>
                {
                    //Temporal, no se conoce el componente.
                }
                <Col sm={6} style={{ lineHeight: '1.4' }} >
                    <span style={{ fontSize: '13pt' }}>Nota de Venta con Aprobación</span> <br />
                    <span style={{ fontSize: '9pt', color: 'grey' }}>CCFCIAFC01101-ASOCIACION MUTUAL DE LA POLICIA DE FSA </span><br />
                    <span style={{ fontSize: '9pt', color: 'grey' }}>0006-18/04/2019-Boris Nicolas Lucasvez</span>
                </Col>

            </>

        )
    }
}

const mapStateToProps = ({ loadItems }) => {
    const { itemsCart } = loadItems;
    return { itemsCart };
};

const connectForm = connect(mapStateToProps, { getLoadItems })(HeadCartResume);
export default themr('LoaditemsPage', styles)(withTranslation()(connectForm));