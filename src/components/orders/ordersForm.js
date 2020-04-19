import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import InputGroupText from 'components/form/inputGroupText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faAt, faPhone, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { createOrder } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import NotificationsErrors from 'components/common/notificationsErrors';
import NotificationMessage from 'components/common/notificationMessage';


class OrdersForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showError: false,
            errorMessage: '',
            type: 'danger'
        }
    }

    componentDidMount = () => {

    }
    componentDidUpdate = (prevProps) => {
    }

    render() {
        const { initValue } = this.props;
        
        const initial = {
            customer_name: (initValue) ? initValue.customer_name : '',
            customer_lastname: (initValue) ? initValue.customer_lastname : '',
            customer_email: (initValue) ? initValue.customer_email : '',
            customer_mobile: (initValue) ? initValue.customer_mobile : '',
            customer_cedula: (initValue) ? initValue.customer_cedula : ''
        }
        return (
            <Col sm={12} className={"mb-1"} style={{ margin: '0px auto' }} >
                <Formik
                    initialValues={{ ...initial }}
                    enableReinitialize={true}
                    onSubmit={(values, actions) => {
                        values.status = 'CREATED';
                        values.productsId = 1; //Se envia siempre el mismo producto
                        this.props.createOrder(values);
                        actions.setSubmitting(false);
                    }}
                    validationSchema={Yup.object().shape({
                        customer_name: Yup.string().required('El campo Nombre es requerido'),
                        customer_email: Yup.string().required('El campo Correo es requerido').email('El campo Correo no tiene el formato de email'),
                        customer_mobile: Yup.string().required('El campo Telefono es requerido'),
                        customer_cedula: Yup.string().required('El campo Cedula es requerido'),
                    })}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                        <Form onSubmit={handleSubmit} className="voucher-info-form">

                            <Col sm={11} >
                                <NotificationsErrors
                                    errors={errors}
                                    touched={touched}
                                />
                            </Col>
                            <Col sm={12}>
                                <InputGroupText
                                    label={'Nombre'}
                                    inputId={'customer_name'}
                                    name={'customer_name'}
                                    placeholder={'Ingrese el Nombre del cliente *'}
                                    colLabel={"col-2 offset-3"}
                                    colInput={"col-7"}
                                    beforeInput={<FontAwesomeIcon icon={faUser} />}
                                    styles={{ width: '60%', backgroundColor: '#E8F0FD', border: '#E8F0FD', color: '#000' }}
                                    stylesGroup={{ backgroundColor: '#E8F0FD', border: '#E8F0FD' }}
                                    value={values.customer_name}
                                    onChange={(data) => {
                                        setFieldValue('customer_name', data.target.value);
                                    }}
                                />
                            </Col>
                            <Col sm={12}>
                                <InputGroupText
                                    label={'Apellido'}
                                    inputId={'customer_lastname'}
                                    name={'customer_lastname'}
                                    placeholder={'Ingrese el Apellido del cliente'}
                                    colLabel={"col-2 offset-3"}
                                    colInput={"col-7"}
                                    beforeInput={<FontAwesomeIcon icon={faUser} />}
                                    styles={{ width: '60%', backgroundColor: '#E8F0FD', border: '#E8F0FD', color: '#000' }}
                                    stylesGroup={{ backgroundColor: '#E8F0FD', border: '#E8F0FD' }}
                                    value={values.customer_lastname}
                                    onChange={(data) => {
                                        setFieldValue('customer_lastname', data.target.value);
                                    }}
                                />
                            </Col>
                            <Col sm={12}>
                                <InputGroupText
                                    label={'Cedula'}
                                    inputId={'customer_cedula'}
                                    name={'customer_cedula'}
                                    placeholder={'Ingrese la cedula del cliente *'}
                                    colLabel={"col-2 offset-3"}
                                    colInput={"col-7"}
                                    beforeInput={<FontAwesomeIcon icon={faFingerprint} />}
                                    styles={{ width: '60%', backgroundColor: '#E8F0FD', border: '#E8F0FD', color: '#000' }}
                                    stylesGroup={{ backgroundColor: '#E8F0FD', border: '#E8F0FD' }}
                                    value={values.customer_cedula}
                                    onChange={(data) => {
                                        setFieldValue('customer_cedula', data.target.value);
                                    }}
                                />
                            </Col>
                            <Col sm={12}>
                                <InputGroupText
                                    label={'Correo'}
                                    inputId={'customer_email'}
                                    name={'customer_email'}
                                    placeholder={'Ingrese el correo del cliente *'}
                                    colLabel={"col-2 offset-3"}
                                    colInput={"col-7"}
                                    beforeInput={<FontAwesomeIcon icon={faAt} />}
                                    styles={{ width: '60%', backgroundColor: '#E8F0FD', border: '#E8F0FD', color: '#000' }}
                                    stylesGroup={{ backgroundColor: '#E8F0FD', border: '#E8F0FD' }}
                                    value={values.customer_email}
                                    onChange={(data) => {
                                        setFieldValue('customer_email', data.target.value);
                                    }}
                                />
                            </Col>
                            <Col sm={12}>
                                <InputGroupText
                                    label={'Telefono'}
                                    inputId={'customer_mobile'}
                                    name={'customer_mobile'}
                                    placeholder={'Ingrese el telefono del cliente *'}
                                    colLabel={"col-2 offset-3"}
                                    colInput={"col-7"}
                                    beforeInput={<FontAwesomeIcon icon={faPhone} />}
                                    styles={{ width: '60%', backgroundColor: '#E8F0FD', border: '#E8F0FD', color: '#000' }}
                                    stylesGroup={{ backgroundColor: '#E8F0FD', border: '#E8F0FD' }}
                                    value={values.customer_mobile}
                                    onChange={(data) => {
                                        setFieldValue('customer_mobile', data.target.value);
                                    }}
                                />
                            </Col>
                            <Col style={{ textAlign: 'center', paddingLeft: '15px' }} className={"mt-2 col-6 offset-3"} >
                                <Button type={"submit"} >
                                    {'Enviar'}
                                </Button>
                            </Col>
                        </Form>
                    )}
                />
            </Col>
        )
    }
}


const mapStateToProps = ({ orders }) => {
    return { orders };
};

export default connect(mapStateToProps, { createOrder })(withTranslation()(withRouter(OrdersForm)));