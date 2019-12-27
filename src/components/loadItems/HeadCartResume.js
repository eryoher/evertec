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
import { getLoadItems, getVoucherHeadInfo, voucherCancel } from '../../actions/';
import ConfirmModal from 'components/common/confirmModal';
import { withRouter } from "react-router-dom";
import { LANDING } from 'utils/RoutePath';

class HeadCartResume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.getVoucherHeadInfo({ idOperacion })
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.voucherTypeCancel !== prevProps.voucherTypeCancel && this.props.voucherTypeCancel) {
            this.props.history.push(LANDING)
        }
    }

    handleOpen = () => {
        this.setState({ showModal: true });
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }

    handleCancel = () => {
        const { idOperacion } = this.props;
        this.props.voucherCancel({ idOperacion })
    }

    render() {
        const { theme, t, itemsCart, headInfo } = this.props;

        return (
            <>
                <Col sm={12}>
                    {
                        this.state.showModal &&
                        <ShoppingCart
                            showModal={this.state.showModal}
                            handleClose={this.handleClose}
                            idOperacion={this.props.idOperacion}
                        />
                    }
                </Col>
                <Col sm={6} className={`${theme.Title} col-12 mt-3`} >
                    {t("loadItem.title")}
                </Col>
                {
                    itemsCart &&
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
                <Col sm={2}>
                    <ConfirmModal
                        messageBody={t('form.modal.confirmationMessage')}
                        onSubmitModal={this.handleCancel}
                        labelButton={t('form.button.cancel')}
                        modalTitle={t('form.modal.confirmationTitle')}
                        buttonStyle={{ fontSize: '11pt', height: '33px' }}
                    />
                </Col>

                <Col sm={2} className={"text-left  mt-3"} style={{ paddingLeft: '5px' }} >
                    <FontAwesomeIcon icon={faShoppingCart} onClick={this.handleOpen} />
                </Col>
                {
                    headInfo &&
                    <Col sm={6} style={{ lineHeight: '1.4' }} >
                        <Row>
                            <Col sm={10}>
                                <span style={{ fontSize: '13pt' }}>{`${headInfo.tipo_comprobante} - ${headInfo.descrip_comprobante}`}</span> <br />
                                <span style={{ fontSize: '9pt', color: 'grey' }}>{headInfo.razon_social} </span><br />
                            </Col>
                            <Col sm={6}>
                                <span style={{ fontSize: '9pt' }}>{headInfo.dato1}</span>
                            </Col>
                            <Col sm={6}>
                                <span style={{ fontSize: '9pt' }}>{headInfo.dato2}</span>
                            </Col>
                            <Col sm={6}>
                                <span style={{ fontSize: '9pt' }}>{headInfo.dato3}</span>
                            </Col>
                            <Col sm={6}>
                                <span style={{ fontSize: '9pt' }}>{headInfo.dato4}</span>
                            </Col>
                        </Row>
                    </Col>
                }

            </>

        )
    }
}

const mapStateToProps = ({ loadItems, voucher, vouchertype }) => {
    const { itemsCart } = loadItems;
    const { voucherTypeCancel } = vouchertype;
    const { headInfo } = voucher;
    return { itemsCart, headInfo, voucherTypeCancel };
};

const connectForm = connect(mapStateToProps, { getLoadItems, getVoucherHeadInfo, voucherCancel })(withRouter(HeadCartResume));
export default themr('LoaditemsPage', styles)(withTranslation()(connectForm));