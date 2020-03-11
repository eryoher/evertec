import React, { Component } from 'react';
import { Row, Col, Container, Modal, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { Card, Collapse } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import CollapseBotton from 'components/common/collapseBoton';
import { themr } from 'react-css-themr';
import styles from './generateForm.module.css';
import InputButton from 'components/form/inputButton';
import LoadItemsTableReadOnly from 'components/loadItems/loadItemsTableReadOnly';
import VoucherInvolvementTable from 'components/voucherInvolvement/voucherInvolvementTable';
import NotificationMessage from 'components/common/notificationMessage';
import { connect } from 'react-redux';
import { getClientHeadboard, finishGenerate, voucherCancel, voucherSaveAndNew, showMessage, getConfigVoucher, changeTableItems } from '../../actions';
import { withRouter } from "react-router-dom";
import VoucherAffectingTable from 'components/voucherAffecting/voucherAffectingTable';
import VoucherStateTable from 'components/voucherState/voucherStateTable';
import ConfirmModal from 'components/common/confirmModal';
import ClienteReadOnly from './clienteReadOnly';
import { LANDING, VOUCHER } from 'utils/RoutePath';
import { P_FINCOMPROB } from 'constants/ConfigProcessNames';

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
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.getClientHeadboard({ idOperacion, page_size: 1 })
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

    toggleTableVoucher = () => {
        this.setState(state => ({ collapseVoucherTable: !state.collapseVoucherTable }));
    }

    toggleVoucherAffecting = () => {
        this.setState(state => ({ collapseVoucherAffectingTable: !state.collapseVoucherAffectingTable }));
    }

    toggleVoucherState = () => {
        this.setState(state => ({ collapseVoucherStateTable: !state.collapseVoucherStateTable }));

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

        const { t } = this.props

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

    render() {
        const { t, theme, clientHeadboard } = this.props;

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

                <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                    <Row className={"mb-3"}>
                        <Col sm={6} className={theme.title} >
                            {t('voucherInvolvement.table.title')}
                        </Col>
                        <Col sm={3} className={theme.title} >

                        </Col>
                        <Col sm={2} className={"text-right"} >
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </Col>
                    </Row>
                    <Row className={'mt-2'}>
                        <Col sm={1}>
                            <CollapseBotton
                                onPress={() => this.toggleTableVoucher()}
                                status={this.state.collapseVoucherTable}
                            />
                        </Col>
                        <Col sm={11}>
                            <div className="dropdown-divider col-11 p-1" />
                        </Col>
                    </Row>
                    <Container style={{ maxWidth: '95%' }}>
                        <Row>
                            <Collapse isOpen={this.state.collapseVoucherTable}>
                                <VoucherInvolvementTable
                                    idOperacion={this.props.idOperacion}
                                    readOnly
                                />
                            </Collapse>
                        </Row>
                    </Container>
                </Card>
                <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                    <Row className={"mb-3"}>
                        <Col sm={6} className={theme.title} >
                            {t('voucherAffecting.title')}
                        </Col>
                        <Col sm={3} className={theme.title} >

                        </Col>
                        <Col sm={2} className={"text-right"} >
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </Col>
                    </Row>
                    <Row className={'mt-2'}>
                        <Col sm={1}>
                            <CollapseBotton
                                onPress={() => this.toggleVoucherAffecting()}
                                status={this.state.collapseVoucherAffectingTable}
                            />
                        </Col>
                        <Col sm={11}>
                            <div className="dropdown-divider col-11 p-1" />
                        </Col>
                    </Row>
                    <Container style={{ maxWidth: '95%' }}>
                        <Row>
                            <Collapse isOpen={this.state.collapseVoucherAffectingTable}>
                                <VoucherAffectingTable
                                    idOperacion={this.props.idOperacion}
                                    readOnly
                                />
                            </Collapse>
                        </Row>
                    </Container>
                </Card>
                <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                    <Row className={"mb-3"}>
                        <Col sm={6} className={theme.title} >
                            {t('voucherState.title')}
                        </Col>
                        <Col sm={3} className={theme.title} >

                        </Col>
                        <Col sm={2} className={"text-right"} >
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </Col>
                    </Row>
                    <Row className={'mt-2'}>
                        <Col sm={1}>
                            <CollapseBotton
                                onPress={() => this.toggleVoucherState()}
                                status={this.state.collapseVoucherStateTable}
                            />
                        </Col>
                        <Col sm={11}>
                            <div className="dropdown-divider col-11 p-1" />
                        </Col>
                    </Row>
                    <Container style={{ maxWidth: '95%' }}>
                        <Row>
                            <Collapse isOpen={this.state.collapseVoucherStateTable}>
                                <VoucherStateTable
                                    idOperacion={this.props.idOperacion}
                                    readOnly
                                />
                            </Collapse>
                        </Row>
                    </Container>
                </Card>
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
    const { clientHeadboard, generateVoucher } = generateForm;
    const { voucherConfirmation, voucherSaveParameter } = vouchertype
    return { clientHeadboard, generateVoucher, voucherConfirmation, voucherSaveParameter };
};

const connectForm = connect(mapStateToProps, { getClientHeadboard, finishGenerate, voucherCancel, voucherSaveAndNew, showMessage, getConfigVoucher, changeTableItems })(withRouter(GenerateForm));

export default themr('GenerateFormStyle', styles)(withTranslation()(connectForm));