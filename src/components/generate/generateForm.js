import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { Card, Collapse } from 'reactstrap'
import HeadboardFormInput from '../headboard/headboardFormInput'
import VoucherFormInput from 'components/voucher/voucherFormInput';
import ClientFormInput from 'components/voucher/clientFormInput';
import AccountFormInput from 'components/voucher/accountFormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import LocationFormInput from 'components/voucher/locationFormInput';
import CollapseBotton from 'components/common/collapseBoton';
import { themr } from 'react-css-themr';
import styles from './generateForm.module.css';
import InputButton from 'components/form/inputButton';
import { LOADITEMS } from '../../utils/RoutePath';
import LoadItemsTableReadOnly from 'components/loadItems/loadItemsTableReadOnly';
import VoucherInvolvementTable from 'components/voucherInvolvement/voucherInvolvementTable';
import NotificationMessage from 'components/common/notificationMessage';

class GenerateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseItemTable: false,
            collapse: false,
            generated: false,
            collapseVoucherTable: false
        }
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    toggleTableItem() {
        this.setState(state => ({ collapseItemTable: !state.collapseItemTable }));
    }

    toggleTableVoucher = () => {
        this.setState(state => ({ collapseVoucherTable: !state.collapseVoucherTable }));
    }


    handleCloseNotification = () => {
        this.setState({ generated: false })
    }

    handleGeneratebtn = () => {
        this.props.handleChangeSuccess()
        this.setState({ generated: true });
    }

    render() {
        const { t, theme } = this.props;
        const fields = [
            {
                idcampo: 'rsocial',
                visible: true
            },
            {
                idcampo: 'tipo_resp',
                visible: true
            },
            {
                idcampo: 'cuit',
                visible: true
            },
            {
                idcampo: 'contacto',
                visible: true
            },
            {
                idcampo: 'obs_cc',
                visible: true
            },
            {
                idcampo: 'obs_ventas',
                visible: true
            },
            {
                idcampo: 'credito',
                visible: true
            },
            {
                idcampo: 'saldo_pend',
                visible: true
            },
            {
                idcampo: 'credito_saldo',
                visible: true
            },
            {
                idcampo: 'suc_email',
                visible: true
            },
            {
                idcampo: 'suc_tel',
                visible: true
            },
            {
                idcampo: 'suc_address',
                visible: true
            },
            {
                idcampo: 'suc_local',
                visible: true
            },
            {
                idcampo: 'suc_nom_prov',
                visible: true
            },
            {
                idcampo: 'suc_cpos',
                visible: true
            },
            {
                idcampo: 'suc_empresa',
                visible: true
            },
            {
                idcampo: 'transp_comp_vta',
                visible: true
            },
            {
                idcampo: 'suc_empresa_venta',
                visible: true
            },
            {
                idcampo: 'Titulo_comp_vta',
                visible: true
            },
            {
                idcampo: 'fecha',
                visible: true
            },
            {
                idcampo: 'mon_comp_vta',
                visible: true
            },
            {
                idcampo: 'cotiz',
                visible: true
            },
            {
                idcampo: 'vend_comp_vta',
                visible: true
            },
            {
                idcampo: 'cond_comp_vta',
                visible: true
            },

        ]

        const defaultInitial = {
            rsocial: '',
            tipo_resp: '',
            cuit: '',
            contacto: '',
            obs_cc: '',
            obs_ventas: '',
            credito: '',
            saldo_pend: '',
            credito_saldo: '',
            suc_email: '',
            suc_tel: '',
            suc_address: '',
            suc_local: '',
            suc_nom_prov: '',
            suc_cpos: '',
            suc_empresa: null
        }
        return (
            <Col sm={12}>
                {!this.state.generated && <Row>

                    <Col sm={{ span: 2, offset: 8 }} style={{ textAlign: 'right' }} className={"mt-3 mb-3"} >
                        <InputButton
                            valueButton={t('global.cancelar')}
                        />
                    </Col>
                    <Col sm={2} style={{ textAlign: 'left' }} className={"mt-3 mb-3"} >
                        <InputButton
                            onClick={this.handleGeneratebtn}
                            valueButton={t('voucher.step.generate')}
                        />
                    </Col>
                </Row>}
                {
                    this.state.generated &&
                    <Row>
                        <Col sm={6} >
                            <NotificationMessage
                                showError={this.state.generated}
                                handleCloseError={this.handleCloseNotification}
                                errorMessage={'Se genero el comprobante 002569865'}
                            />
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
                <Card className={`pb-3 pt-3 ${theme.containerCard}`}  >
                    <Row className={"mb-3"}>
                        <Col sm={6} className={theme.title} >
                            {t('client.title')}
                        </Col>
                        <Col sm={5} className={"text-right"} >
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </Col>
                    </Row>
                    <VoucherFormInput
                        auoptions={[]}
                        handleLoading={false}
                        values={defaultInitial}
                        readOnly
                        fields={fields}

                    />
                    <div className="dropdown-divider col-11 p-1" />
                    <ClientFormInput
                        auoptions={[]}
                        values={defaultInitial}
                        readOnly
                        fields={fields}
                    />
                    <Row>
                        <Col sm={1}>
                            <CollapseBotton
                                onPress={() => this.toggle()}
                                status={this.state.collapse}
                            />
                        </Col>
                        <Col sm={11}>
                            <div className="dropdown-divider col-11 p-1" />
                        </Col>
                    </Row>
                    <Collapse isOpen={this.state.collapse}>
                        <LocationFormInput
                            values={defaultInitial}
                            readOnly
                            fields={fields}

                        />
                        <div className="dropdown-divider col-11 p-1" />
                        <AccountFormInput
                            readOnly
                            values={defaultInitial}
                            fields={fields}

                        />
                    </Collapse>
                </Card>
                <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                    <Row className={"mb-3"}>
                        <Col sm={6} className={theme.title} >
                            {t('headboard.title')}
                        </Col>
                        <Col sm={5} className={"text-right"} >
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </Col>
                    </Row>
                    <HeadboardFormInput
                        readOnly
                        collapse
                        values={defaultInitial}
                        fields={fields}

                    />
                </Card>
                <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                    <Row className={"mb-3"}>
                        <Col sm={6} className={theme.title} >
                            {t('shoppingCart.title')}
                        </Col>
                        <Col sm={3} className={theme.title} >

                        </Col>
                        <Col sm={{ span: 2 }} className={"text-right"} >
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </Col>
                    </Row>
                    <Row className={'mt-2'}>
                        <Col sm={1}>
                            <CollapseBotton
                                onPress={() => this.toggleTableItem()}
                                status={this.state.collapseItemTable}
                            />
                        </Col>
                        <Col sm={11}>
                            <div className="dropdown-divider col-11 p-1" />
                        </Col>
                    </Row>

                    <Collapse isOpen={this.state.collapseItemTable}>
                        <LoadItemsTableReadOnly
                            divClass={"mt-1"}
                            searchBox
                        />
                    </Collapse>

                </Card>

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
                                    readOnly
                                />
                            </Collapse>
                        </Row>
                    </Container>
                </Card>
                {!this.state.generated && <Row>
                    <Col sm={{ span: 2, offset: 8 }} style={{ textAlign: 'right' }} className={"mt-2"} >
                        <InputButton
                            valueButton={t('global.cancelar')}
                        />
                    </Col>
                    <Col sm={2} style={{ textAlign: 'left' }} className={"mt-2"} >
                        <InputButton
                            valueButton={t('voucher.step.generate')}
                            onClick={this.handleGeneratebtn}
                        />
                    </Col>
                </Row>}
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


export default themr('GenerateFormStyle', styles)(withTranslation()(GenerateForm));