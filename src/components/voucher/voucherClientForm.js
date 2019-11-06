import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Col } from 'react-bootstrap';
import VoucherFormInput from './voucherFormInput';
import { withTranslation } from 'react-i18next';
import ClientFormInput from './clientFormInput';
import AccountFormInput from './accountFormInput'
import LocationFormInput from './locationFormInput';
import InputButton from 'components/form/inputButton';
import { connect } from 'react-redux';
import { searchClients, getClient, getConfigVoucher, confirmationClient } from '../../actions';
import { HEADERBOARD } from '../../utils/RoutePath';


class VoucherClientForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    componentDidMount = () => {
        const { idOperacion } = this.props
        this.props.getConfigVoucher({ cod_proceso: 'p_selcli', idOperacion })

    }

    componentDidUpdate = (prevProps) => {
        if (this.props.search !== prevProps.search && this.props.search && this.props.search.clientes.length) {
            this.setState({ loading: false });
        }
    }

    componentWillUnmount = () => {
        const { client, idOperacion } = this.props;
        if (client) {
            this.props.confirmationClient({ idOperacion, idCliente: client.idCliente })
        }
    }

    handleSearch = (value) => {
        const { idOperacion } = this.props
        this.props.searchClients({ criterio_cliente: value, idOperacion });
        this.setState({ loading: true });
    }

    handleSelect = (client) => {
        const { idOperacion } = this.props;
        const selected = client[0];
        this.props.getClient({ idCliente: selected.id, idOperacion });
    }

    render() {
        const { search, client, config } = this.props;

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
            cliente_criterio: ''
        }

        const initial = (client) ? client : defaultInitial;
        const optionsSync = (search) ? search.clientes.map((opt) => {
            return ({ id: opt.idCliente, label: opt.Rsocial });
        }) : [];

        if (config) {
            return (
                <Col sm={12} className={"mb-1"} >
                    <Formik
                        initialValues={{ ...initial }}
                        onSubmit={(values, actions) => {

                        }}
                        validationSchema={Yup.object().shape({

                        })}
                        enableReinitialize={true}
                        render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                            <Form onSubmit={handleSubmit} className="voucher-info-form">
                                <Col>
                                    <VoucherFormInput
                                        handleSearch={this.handleSearch}
                                        auoptions={optionsSync}
                                        handleLoading={this.state.loading}
                                        handleSelect={this.handleSelect}
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
                                <Col style={{ textAlign: 'left', paddingLeft: '0px' }} className={"mt-2 offset-11 col-1"} >
                                    <InputButton
                                        nextButton
                                        urlForm={HEADERBOARD}
                                    />
                                </Col>
                            </Form>
                        )}
                    />
                </Col>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = ({ clients, voucher }) => {
    const { search, client } = clients;
    const { config } = voucher;
    return { search, client, config };
};

export default connect(mapStateToProps, { searchClients, getClient, getConfigVoucher, confirmationClient })(withTranslation()(VoucherClientForm));