import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import InputTextArea from '../form/inputTextArea'


class AccountFormInput extends Component {
    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, readOnly, fields } = this.props;

        return (
            <Row>
                <InputTextArea
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('client.form.obs_current_account')}
                    inputId={'cliente_Obs_cc'}
                    name={'cliente_Obs_cc'}
                    placeholder={t('client.form.insert_obs_current_account')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    cols={3}
                    rows={3}
                    disable={readOnly}
                    errorInput={errors.cliente_Obs_cc}
                    touched={touched.cliente_Obs_cc}
                    value={values.cliente_Obs_cc}
                    onChange={(data) => {
                        setFieldValue('cliente_Obs_cc', data.target.value);
                    }}
                />

                <InputTextArea
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('client.form.obs_sales')}
                    inputId={'cliente_Obs_vta'}
                    name={'cliente_Obs_vta'}
                    placeholder={t('client.form.insert_obs_sales')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    cols={3}
                    rows={3}
                    disable={readOnly}
                    errorInput={errors.cliente_Obs_vta}
                    touched={touched.cliente_Obs_vta}
                    value={values.cliente_Obs_vta}
                    onChange={(data) => {
                        setFieldValue('cliente_Obs_vta', data.target.value);
                    }}
                />

                <Row className={'col-11'} style={{ paddingRight: '0px' }} >

                    <InputText
                        inputFormCol={{ sm: 6 }}
                        fields={fields}
                        label={t('client.form.limit_credit')}
                        type={'number'}
                        inputId={'cliente_Limcred'}
                        name={'cliente_Limcred'}
                        placeholder={t('client.form.insert_limit_credit')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle={{ paddingLeft: '17px' }}
                        disable={readOnly}
                        errorInput={errors.cliente_Limcred}
                        touched={touched.cliente_Limcred}
                        value={values.cliente_Limcred}
                        onChange={(data) => {
                            setFieldValue('cliente_Limcred', data);
                        }}
                    />

                    <InputText
                        inputFormCol={{ sm: 6, style: { paddingRight: '0px' } }}
                        fields={fields}
                        label={t('client.form.pendingCredit')}
                        inputId={'cliente_Pendcred'}
                        name={'cliente_Pendcred'}
                        placeholder={t('client.form.insert_pending_credit')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        styleLabel={{ textAlign: 'right', paddingRight: '0px' }}
                        disable={readOnly}
                        errorInput={errors.cliente_Pendcred}
                        touched={touched.cliente_Pendcred}
                        value={values.cliente_Pendcred}
                        onChange={(data) => {
                            setFieldValue('cliente_Pendcred', data);
                        }}
                    />

                </Row>
                <Row className={'col-11'} style={{ paddingRight: '0px' }} >
                    <InputText
                        inputFormCol={{ sm: 6 }}
                        fields={fields}
                        label={t('client.form.balance')}
                        inputId={'cliente_Saldo'}
                        name={'cliente_Saldo'}
                        placeholder={t('client.form.insert_client_balance')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        disable={readOnly}
                        divStyle={{ paddingLeft: '17px' }}
                        errorInput={errors.cliente_Saldo}
                        touched={touched.cliente_Saldo}
                        value={values.cliente_Saldo}
                        onChange={(data) => {
                            setFieldValue('cliente_Saldo', data);
                        }}
                    />

                </Row>
            </Row>
        )
    }
}

export default (withTranslation()(AccountFormInput));
