import React, { Component } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { themr } from 'react-css-themr';
import styles from './generateForm.module.css';
import InputButton from 'components/form/inputButton';
import LoadItemsTableReadOnly from 'components/loadItems/loadItemsTableReadOnly';
import NotificationMessage from 'components/common/notificationMessage';
import { connect } from 'react-redux';
import {
    getClientHeadboard,
    finishGenerate,
    voucherCancel,
    voucherSaveAndNew,
    showMessage,
    getConfigVoucher,
    changeTableItems,
    changeTableAffect
} from '../../actions';
import { withRouter } from "react-router-dom";
import ConfirmModal from 'components/common/confirmModal';
import ClienteReadOnly from './clienteReadOnly';
import AffectedVoucher from './affectedVouchers';
import { LANDING, VOUCHER } from 'utils/RoutePath';
import { P_FINCOMPROB } from 'constants/ConfigProcessNames';
import ComponentCardTable from './componentCardTable';

class GenerateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseItemTable: false,
            collapse: false,
            generated: false,
            collapseVoucherTable: false,
            collapseVoucherAffectingTable: false,
            collapseVoucherStateTable: false,
            messageNotification: ''
        }

        this.fieldsSeat = [
            {
                dataField: 'cod_cta',
                text: 'Cuenta',
                align: 'center',
                headerAlign: 'center',
            },
            {
                dataField: 'descrip',
                text: 'Descripción',
                align: 'center',
                headerAlign: 'center',
            },
            {
                dataField: 'debe',
                text: 'Debe',
                align: 'center',
                headerAlign: 'center',
            },
            {
                dataField: 'haber',
                text: 'Haber',
                align: 'center',
                headerAlign: 'center',
            },
        ]

        this.fieldsImp = []
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.getClientHeadboard({ idOperacion, page_size: 10 })
    }

    componentDidUpdate = (prevProps) => {
        const { voucherSaveParameter, idOperacion, voucherConfirmation, t } = this.props;

        if (prevProps.generateVoucher !== this.props.generateVoucher && this.props.generateVoucher) {
            this.setState({ generated: true })
        }

        if (prevProps.voucherConfirmation !== this.props.voucherConfirmation && voucherConfirmation && voucherSaveParameter) {

            if (voucherConfirmation.NiMovimiento) {
                this.setState({ generated: true, messageNotification: t('voucherConfirmation', { voucher: voucherConfirmation.NiMovimiento }) })
                this.props.getConfigVoucher({ cod_proceso: P_FINCOMPROB, idOperacion });
            }
        }
    }

    handleCloseNotification = () => {
        const { voucherSaveParameter, idOperacion } = this.props;
        const urlSubmit = (voucherSaveParameter.nuevoComprobante) ? `${VOUCHER}/${idOperacion}` : LANDING;
        this.setState({ generated: false })
        this.props.history.push(urlSubmit);
    }

    handleGeneratebtn = () => {
        const { idOperacion } = this.props
        this.props.handleChangeSuccess(); //To fisinish the steps
        this.props.finishGenerate({ idOperacion });
    }

    handleVoucherCancel = () => {
        const { idOperacion } = this.props;
        this.props.voucherCancel({ idOperacion })
    }

    handleSaveVoucher = (ban) => {
        const { idOperacion } = this.props;
        this.props.voucherSaveAndNew({ idOperacion, nuevoComprobante: ban });
    }

    renderGenerateButtons = () => {

        const { t } = this.props;

        return (
            <Row>
                <Col sm={{ span: 1, offset: 6 }} className={"mt-3 mb-3"} />

                <Col sm={'auto'} style={{ textAlign: 'right' }} className={"mt-3 mb-3 "} >
                    <ConfirmModal
                        messageBody={t('form.modal.confirmationMessage')}
                        onSubmitModal={this.handleVoucherCancel}
                        labelButton={t('form.button.cancel')}
                        modalTitle={t('form.modal.confirmationTitle')}
                    />
                </Col>
                <Col sm={'auto'} style={{ textAlign: 'right', }} className={"mt-3 mb-3 "} >
                    <InputButton
                        onClick={() => this.handleSaveVoucher(true)}
                        valueButton={t('form.button.save_continue')}
                    />
                </Col>
                <Col sm={'auto'} style={{ textAlign: 'left' }} className={"mt-3 mb-3"} >
                    <InputButton
                        onClick={() => this.handleSaveVoucher(false)}
                        valueButton={t('form.button.save_exit')}
                    />
                </Col>
            </Row>
        )

    }


    handleChangeTableItem = (params) => {
        const { idOperacion } = this.props
        this.props.changeTableItems({ ...params, idOperacion });
    }

    handleChangeTableAffect = (params) => {
        const { idOperacion } = this.props
        this.props.changeTableAffect({ ...params, idOperacion });
    }

    render() {
        const { t, theme, clientHeadboard, affecItemsTable } = this.props;

        return (
            <Col sm={12}>
                {!this.state.generated &&
                    this.renderGenerateButtons()
                }
                {
                    this.state.generated &&
                    <Row>
                        <Col sm={6} >

                            <Modal
                                show={this.state.generated}
                                onHide={this.handleCloseNotification}
                                aria-labelledby={"ModalHeader"}
                            >
                                <Modal.Body>
                                    <NotificationMessage
                                        showError={this.state.generated}
                                        handleCloseError={this.handleCloseNotification}
                                        errorMessage={this.state.messageNotification}
                                    />
                                </Modal.Body>

                            </Modal>
                        </Col>
                        <Col sm={{ span: 2 }} style={{ textAlign: 'right' }} className={"mt-3 mb-3"} >
                            <InputButton
                                valueButton={t('global.print')}
                            />
                        </Col>
                        <Col sm={2} style={{ textAlign: 'center' }} className={"mt-3 mb-3"} >
                            <InputButton
                                valueButton={t('global.new')}
                            />
                        </Col>
                        <Col sm={2} style={{ textAlign: 'left' }} className={"mt-3 mb-3"} >
                            <InputButton
                                valueButton={t('global.exit')}
                            />
                        </Col>
                    </Row>
                }

                <ClienteReadOnly
                    {...this.props}
                    defaultValues={(clientHeadboard) ? clientHeadboard : null}
                />

                <LoadItemsTableReadOnly
                    {...this.props}
                    itemsTable={(clientHeadboard) ? clientHeadboard.Items : null}
                    totalTable={(clientHeadboard) ? clientHeadboard.Totales : []}
                    handleChangeTable={this.handleChangeTableItem}
                />

                <AffectedVoucher
                    {...this.props}
                    itemsTable={(clientHeadboard) ? clientHeadboard.Afectaciones : null}
                    handleChangeTable={this.handleChangeTableAffect}
                    affecItemsTable={affecItemsTable}
                />

                <ComponentCardTable
                    {...this.props}
                    title={t('AccountingSeat.title')}
                    dataTable={(clientHeadboard) ? clientHeadboard.Asiento : null}
                    fieldTable={this.fieldsSeat}
                    keyField={'nitem'}
                />

                <ComponentCardTable
                    {...this.props}
                    title={t('Taxes.title')}
                    dataTable={(clientHeadboard) ? clientHeadboard.Impuestos : null}
                    fieldTable={this.fieldsImp}
                    keyField={'nitem'}
                />

                {!this.state.generated &&
                    this.renderGenerateButtons()
                }
                {
                    this.state.generated &&
                    <Row>
                        <Col sm={{ span: 2, offset: 6 }} style={{ textAlign: 'right' }} className={"mt-3 mb-3"} >
                            <InputButton
                                valueButton={t('global.print')}
                            />
                        </Col>
                        <Col sm={2} style={{ textAlign: 'center' }} className={"mt-3 mb-3"} >
                            <InputButton
                                valueButton={t('global.new')}
                            />
                        </Col>
                        <Col sm={2} style={{ textAlign: 'left' }} className={"mt-3 mb-3"} >
                            <InputButton
                                valueButton={t('global.exit')}
                            />
                        </Col>
                    </Row>
                }
            </Col>
        )
    }
}

const mapStateToProps = ({ generateForm, vouchertype }) => {
    const { clientHeadboard, generateVoucher, affecItemsTable } = generateForm;
    const { voucherConfirmation, voucherSaveParameter } = vouchertype
    return { clientHeadboard, generateVoucher, affecItemsTable, voucherConfirmation, voucherSaveParameter };
};

const connectForm = connect(mapStateToProps, { getClientHeadboard, finishGenerate, voucherCancel, voucherSaveAndNew, showMessage, getConfigVoucher, changeTableItems, changeTableAffect })(withRouter(GenerateForm));

export default themr('GenerateFormStyle', styles)(withTranslation()(connectForm));