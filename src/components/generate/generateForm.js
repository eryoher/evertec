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
import LoadItemsTableReadOnly from 'components/loadItems/loadItemsTableReadOnly';
import VoucherInvolvementTable from 'components/voucherInvolvement/voucherInvolvementTable';
import NotificationMessage from 'components/common/notificationMessage';
import { connect } from 'react-redux';
import { getClientHeadboard, finishGenerate } from '../../actions';
import VoucherAffectingTable from 'components/voucherAffecting/voucherAffectingTable';
import VoucherStateTable from 'components/voucherState/voucherStateTable';

const FIELDS = [
    {
        idCampo: 'cliente_razon_social',
        visible: true
    },
    {
        idCampo: 'cliente_codigo',
        visible: true
    },
    {
        idCampo: 'cliente_Tipo_resp',
        visible: true
    },
    {
        idCampo: 'cliente_identificador',
        visible: true
    },
    {
        idCampo: 'cliente_Contacto',
        visible: true
    },
    {
        idCampo: 'cliente_Obs_cc',
        visible: true
    },
    {
        idCampo: 'cliente_Obs_vta',
        visible: true
    },
    {
        idCampo: 'cliente_Limcred',
        visible: true
    },
    {
        idCampo: 'cliente_Pendcred',
        visible: true
    },
    {
        idCampo: 'cliente_Saldo',
        visible: true
    },
    {
        idCampo: 'cliente_email',
        visible: true
    },
    {
        idCampo: 'cliente_Telefono',
        visible: true
    },
    {
        idCampo: 'suc_address',
        visible: true
    },
    {
        idCampo: 'cliente_Localidad',
        visible: true
    },
    {
        idCampo: 'cliente_Provincia',
        visible: true
    },
    {
        idCampo: 'cliente_Cpos',
        visible: true
    },
    {
        idCampo: 'suc_empresa',
        visible: true
    },
    {
        idCampo: 'transp_comp_vta',
        visible: true
    },
    {
        idCampo: 'suc_empresa_venta',
        visible: true
    },
    {
        idCampo: 'Titulo_comp_vta',
        visible: true
    },
    {
        idCampo: 'fecha',
        visible: true
    },
    {
        idCampo: 'mon_comp_vta',
        visible: true
    },
    {
        idCampo: 'cotiz',
        visible: true
    },
    {
        idCampo: 'vend_comp_vta',
        visible: true
    },
    {
        idCampo: 'cond_comp_vta',
        visible: true
    },

]

class GenerateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseItemTable: false,
            collapse: false,
            generated: false,
            collapseVoucherTable: false,
            collapseVoucherAffectingTable: false,
            collapseVoucherStateTable: false
        }
    }

    componentDidMount = () => {
        this.props.getClientHeadboard()
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.generateVoucher !== this.props.generateVoucher && this.props.generateVoucher) {
            this.setState({ generated: true })
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

    toggleVoucherAffecting = () => {
        this.setState(state => ({ collapseVoucherAffectingTable: !state.collapseVoucherAffectingTable }));
    }

    toggleVoucherState = () => {
        this.setState(state => ({ collapseVoucherStateTable: !state.collapseVoucherStateTable }));

    }

    handleCloseNotification = () => {
        this.setState({ generated: false })
    }

    handleGeneratebtn = () => {
        const { idOperacion } = this.props
        this.props.handleChangeSuccess(); //To fisinish the steps
        this.props.finishGenerate({ idOperacion });
    }

    render() {
        const { t, theme, clientHeadboard } = this.props;

        const defaultInitial = (clientHeadboard) ? clientHeadboard.Cliente : {
            cliente_razon_social: '',
            cliente_Tipo_resp: '',
            cliente_identificador: '',
            cliente_Contacto: '',
            cliente_Obs_cc: '',
            cliente_Obs_vta: '',
            cliente_Limcred: '',
            cliente_Pendcred: '',
            credito_saldo: '',
            cliente_email: '',
            cliente_telefono: '',
            suc_address: '',
            cliente_Localidad: '',
            cliente_Provincia: '',
            cliente_Cpos: '',
            suc_empresa: null,
            Sucursal: {},
            Cabecera: {},
            cliente_Sucursale: []
        }

        return (
            <Col sm={12}>
                {!this.state.generated &&
                    <Row>
                        <Col sm={{ span: 2, offset: 8 }} style={{ textAlign: 'right' }} className={"mt-3 mb-3"} />
                        <Col sm={2} style={{ textAlign: 'left' }} className={"mt-3 mb-3"} >
                            <InputButton
                                onClick={this.handleGeneratebtn}
                                valueButton={t('voucher.step.generate')}
                            />
                        </Col>
                    </Row>
                }
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
                        fields={FIELDS}
                    />
                    <div className="dropdown-divider col-11 p-1" />
                    <ClientFormInput
                        auoptions={[]}
                        values={defaultInitial.Sucursal}
                        readOnly
                        fields={FIELDS}
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
                            fields={FIELDS}
                        />
                        <div className="dropdown-divider col-11 p-1" />
                        <AccountFormInput
                            readOnly
                            values={defaultInitial}
                            fields={FIELDS}
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
                        values={(clientHeadboard) ? clientHeadboard.Cabecera : null}
                        fields={FIELDS}
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
                            idOperacion={this.props.idOperacion}
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
                {!this.state.generated && <Row>
                    <Col sm={{ span: 2, offset: 8 }} style={{ textAlign: 'right' }} className={"mt-2"} />

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

const mapStateToProps = ({ generateForm }) => {
    const { clientHeadboard, generateVoucher } = generateForm;
    return { clientHeadboard, generateVoucher };
};

const connectForm = connect(mapStateToProps, { getClientHeadboard, finishGenerate })(GenerateForm);

export default themr('GenerateFormStyle', styles)(withTranslation()(connectForm));