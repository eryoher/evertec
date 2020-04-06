import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Col, Button } from 'react-bootstrap';
import VoucherFormInput from './voucherFormInput';
import { withTranslation } from 'react-i18next';
import ClientFormInput from './clientFormInput';
import AccountFormInput from './accountFormInput'
import LocationFormInput from './locationFormInput';
import InputButton from 'components/form/inputButton';
import { connect } from 'react-redux';
import { searchClients, getClient, getConfigVoucher, confirmationClient } from '../../actions';
import { getBackNextButtons } from '../../lib/BreadCrumbsUtils';
import NotificationsErrors from '../common/notificationsErrors';
import { getValidationSchema } from '../../lib/FieldValidations';
import { withRouter } from "react-router-dom";
import { P_SELCLI } from 'constants/ConfigProcessNames';

class VoucherClientForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            showError: false,
            errrorTitle: '',
            errorMessage: '',
            urlForm: ''
        }

        this.firtsRefs = React.createRef();
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.formConfirmation(this.handleConfirmation);

        if (idOperacion) {
            this.props.getConfigVoucher({ cod_proceso: P_SELCLI, idOperacion });
            this.handleConfirmation = this.handleConfirmation.bind(this);
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.search !== prevProps.search && this.props.search && this.props.search.clientes.length) {
            this.setState({ loading: false });
        }

        if (this.props.config !== prevProps.config) {
            if (this.firtsRefs.current) {
                this.firtsRefs.current._instance.focus();
            }
        }
    }

    handleConfirmation = () => {
        const { client, idOperacion } = this.props;
        if (client) {
            this.props.confirmationClient({ idOperacion, idCliente: client.idCliente })
        }
    }

    handleCloseError = () => {
        this.setState({ showError: false });
    }

    handleSearch = (value) => {
        const { idOperacion } = this.props
        this.props.searchClients({ criterio_cliente: value, idOperacion });
        this.setState({ loading: true });
    }

    handleSelect = (client) => {
        const { idOperacion } = this.props;
        const selected = client[0];
        if (selected) {
            this.props.getClient({ idCliente: selected.id, idOperacion });
            this.setState({ cliente_criterio: selected.label })
        }
    }


    render() {
        const { search, client, config, crumbs, current, urlParameter, t } = this.props;
        const [backButton, nextButton] = getBackNextButtons(crumbs, current, urlParameter);
        const defaultInitial = {
            cliente_razon_social: '',
            cliente_codigo: '',
            cliente_Tipo_resp: '',
            cliente_identificador: '',
            cliente_Contacto: '',
            cliente_Obs_cc: '',
            cliente_Obs_vta: '',
            cliente_Limcred: '',
            cliente_Pendcred: '',
            cliente_Saldo: '',
            cliente_email: '',
            cliente_Telefono: '',
            cliente_domicilio: '',
            cliente_Localidad: '',
            cliente_Provincia: '',
            cliente_Cpos: '',
            cliente_criterio: '',
            cliente_Sucursales: []
        }

        const initial = (client) ? { ...client, cliente_criterio: this.state.cliente_criterio } : defaultInitial;
        const optionsSync = (search) ? search.clientes.map((opt) => {
            return ({ id: opt.idCliente, label: opt.Rsocial });
        }) : [];

        const validationSchema = (config) ? getValidationSchema(config.campos, t) : {};

        if (config) {
            return (
                <Col sm={12} className={"mb-1"} >
                    <Formik
                        ref={this.props.formRef}
                        initialValues={{ ...initial }}
                        onSubmit={(values, actions) => {
                            if (this.state.urlForm || this.props.urlSubmitForm) {
                                const urlSubmit = (this.props.urlSubmitForm) ? this.props.urlSubmitForm : this.state.urlForm
                                this.props.history.push(urlSubmit)
                            }
                        }}
                        validationSchema={validationSchema}
                        enableReinitialize={true}
                        render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                            <>
                                <Col sm={11} >
                                    <NotificationsErrors
                                        errors={errors}
                                        touched={touched}
                                    />
                                </Col>
                                <Form onSubmit={handleSubmit} className="voucher-info-form">
                                    <Col>
                                        <VoucherFormInput
                                            handleSearch={this.handleSearch}
                                            auoptions={optionsSync}
                                            handleLoading={this.state.loading}
                                            handleSelect={this.handleSelect}
                                            firtsRefs={this.firtsRefs}
                                            fields={(config) ? config.campos : null}
                                            {...{
                                                values,
                                                handleBlur,
                                                handleChange,
                                                errors,
                                                touched,
                                                isSubmitting,
                                                handleSubmit,
                                                setFieldValue,
                                                setFieldTouched
                                            }}
                                        />
                                    </Col>
                                    <div className="dropdown-divider col-11 p-1" />
                                    <Col>
                                        <ClientFormInput
                                            fields={(config) ? config.campos : null}
                                            {...{
                                                values,
                                                handleBlur,
                                                handleChange,
                                                errors,
                                                touched,
                                                isSubmitting,
                                                handleSubmit,
                                                setFieldValue,
                                                setFieldTouched
                                            }}
                                        />
                                        <LocationFormInput
                                            fields={(config) ? config.campos : null}
                                            {...{
                                                values,
                                                handleBlur,
                                                handleChange,
                                                errors,
                                                touched,
                                                isSubmitting,
                                                handleSubmit,
                                                setFieldValue,
                                                setFieldTouched
                                            }}
                                        />
                                    </Col>
                                    <div className="dropdown-divider col-11 p-1" />
                                    <Col>
                                        <AccountFormInput
                                            fields={(config) ? config.campos : null}
                                            {...{
                                                values,
                                                handleBlur,
                                                handleChange,
                                                errors,
                                                touched,
                                                isSubmitting,
                                                handleSubmit,
                                                setFieldValue,
                                                setFieldTouched
                                            }}
                                        />
                                    </Col>
                                    <Col style={{ textAlign: 'right', paddingLeft: '0px' }} className={"mt-2 offset-11 col-1"} >
                                        <InputButton
                                            nextButton
                                            urlForm={nextButton.url}
                                            type="primary"
                                            onClick={() => this.setState({ urlForm: nextButton.url })}
                                        />
                                    </Col>
                                </Form>
                            </>

                        )}
                    />
                </Col>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = ({ clients, voucher, vouchertype }) => {
    const { search, client } = clients;
    const config = (voucher.config) ? voucher.config[P_SELCLI] : null;
    const { voucherTypeCancel } = vouchertype;
    return { search, client, config, voucherTypeCancel };
};

export default connect(mapStateToProps, { searchClients, getClient, getConfigVoucher, confirmationClient })(withTranslation()(withRouter(VoucherClientForm)));