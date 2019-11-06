import React, { Component } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Col, Button } from 'react-bootstrap';
import InputDropdown from 'components/form/inputDropdown';
import { withTranslation } from 'react-i18next';
import { Router, Redirect, withRouter } from "react-router-dom";

import { VOUCHER } from '../../utils/RoutePath';



class SelectForm extends Component {

    onSubmit = (values) => {
        this.props.history.push(`${VOUCHER}/${values.voucherType}`);
    }

    render() {
        const { t, optionsSelect } = this.props
        const initial = {}
        const inputConfig = [{ idCampo: 'voucherType', label: 'Tipo de comprobante', visible: 1, requerido: 0, editable: 1 }]

        return (
            <Col sm={12} className={"mb-1 pt-3"} >
                <Formik
                    initialValues={{ ...initial }}
                    onSubmit={(values, actions) => {
                        if (values.voucherType !== 'Seleccione un tipo') {
                            this.onSubmit(values);
                        }
                        actions.setSubmitting(false);

                    }}
                    validationSchema={Yup.object().shape({

                    })}
                    enableReinitialize={true}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                        <Form onSubmit={handleSubmit} className="voucher-info-form">
                            <Col>
                                <InputDropdown
                                    inputFormCol={{ sm: 12 }}
                                    fields={inputConfig}
                                    label={t('client.form.client_branch')}
                                    inputId={'voucherType'}
                                    name={'voucherType'}
                                    placeholder={t('client.form.insert_client_branch')}
                                    styles={{ width: '100%' }}
                                    colLabel={"col-sm-4"}
                                    colInput={"col-sm-8"}
                                    options={optionsSelect}
                                    onChange={(value) => {
                                        setFieldValue('voucherType', value.target.value)
                                    }}
                                />
                            </Col>

                            <Col style={{ textAlign: 'left', paddingLeft: '0px' }} className={"mt-5 offset-6 col-1"} >
                                <Button type={"primary"} >Enviar</Button>
                            </Col>
                        </Form>
                    )}
                />
            </Col>
        )
    }
}

export default (withTranslation()(withRouter(SelectForm)));