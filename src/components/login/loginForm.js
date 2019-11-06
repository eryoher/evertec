import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import InputGroupText from 'components/form/inputGroupText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { userSignIn } from '../../actions';
import { LANDING } from '../../utils/RoutePath';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { isLoggedIn } from 'lib/AuthUtils';


class LoginForm extends Component {

    componentDidUpdate = (prevProps) => {
        const { auth } = this.props;
        if (prevProps.auth !== auth && isLoggedIn(auth)) {
            this.props.history.push(LANDING) //Accion para cuando se logea
        }
    }

    componentDidMount = () => {
        const { auth } = this.props;
        console.log(auth, 'auth')
        if (isLoggedIn(auth)) {
            this.props.history.push(LANDING) //Accion para cuando se carga el form y se encuentra logeado
        }
    }

    render() {
        const { t } = this.props;

        const initial = {
            user: '',
            pass: ''
        }
        return (
            <Col sm={12} className={"mb-1"} style={{ margin: '0px auto' }} >
                <Formik
                    initialValues={{ ...initial }}
                    onSubmit={(values, actions) => {
                        this.props.userSignIn(values);
                        actions.setSubmitting(false);
                    }}
                    validationSchema={Yup.object().shape({
                        //user: Yup.number().required(t('validation-required', { field: t('Sequence') })).min(0, t('sequence-error-min')),
                        //pass: Yup.string().required(t('validation-required', { field: t('Description') })),
                    })}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                        <Form onSubmit={handleSubmit} className="voucher-info-form">
                            <Col sm={12}>
                                <InputGroupText
                                    label={t('login.form.username')}
                                    inputId={'user'}
                                    name={'user'}
                                    placeholder={t('login.form.insert_username')}
                                    colLabel={"col-3 offset-3"}
                                    colInput={"col-6"}
                                    beforeInput={<FontAwesomeIcon icon={faUser} />}
                                    styles={{ width: '60%', backgroundColor: '#E8F0FD', border: '#E8F0FD', color: '#000' }}
                                    stylesGroup={{ backgroundColor: '#E8F0FD', border: '#E8F0FD' }}
                                    value={values.user}
                                    onChange={(data) => {
                                        setFieldValue('user', data.target.value);
                                    }}
                                />
                            </Col>
                            <Col sm={12}>
                                <InputGroupText
                                    label={t('login.form.password')}
                                    inputId={'pass'}
                                    name={'pass'}
                                    type={'password'}
                                    placeholder={t('login.form.insert_password')}
                                    colLabel={"col-3 offset-3"}
                                    colInput={"col-6"}
                                    beforeInput={<FontAwesomeIcon icon={faLock} />}
                                    styles={{ width: '60%', backgroundColor: '#E8F0FD', border: '#E8F0FD' }}
                                    stylesGroup={{ backgroundColor: '#E8F0FD', border: '#E8F0FD' }}
                                    value={values.pass}
                                    onChange={(data) => {
                                        setFieldValue('pass', data.target.value);
                                    }}
                                />
                            </Col>
                            <Col style={{ textAlign: 'left', paddingLeft: '15px' }} className={"mt-2 col-6 offset-3"} >
                                <Button type={"submit"} >
                                    {t('form.button.submit')}
                                </Button>
                            </Col>
                        </Form>
                    )}
                />
            </Col>
        )
    }
}


const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps, { userSignIn })(withTranslation()(withRouter(LoginForm)));