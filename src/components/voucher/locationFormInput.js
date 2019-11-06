import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';


class LocationFormInput extends Component {
    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, readOnly, fields } = this.props;

        return (
            <Row>
                <Row className={'col-11'} style={{ paddingRight: '0px' }} >

                    <InputText
                        inputFormCol={{ sm: 6 }}
                        fields={fields}
                        label={t('client.form.location')}
                        inputId={'cliente_Localidad'}
                        name={'cliente_Localidad'}
                        placeholder={t('client.form.insert_location')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle={{ paddingLeft: '17px' }}
                        disable={readOnly}
                        value={values.cliente_Localidad}
                        onChange={(data) => {
                            setFieldValue('cliente_Localidad', data.target.value);
                        }}
                    />

                    <InputText
                        inputFormCol={{ sm: 6, style: { paddingRight: '0px' } }}
                        fields={fields}
                        label={t('client.form.province')}
                        inputId={'cliente_Provincia'}
                        name={'cliente_Provincia'}
                        placeholder={t('client.form.insert_province')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle={{ paddingLeft: '23px' }}
                        styleLabel={{ textAlign: 'right' }}
                        disable={readOnly}
                        value={values.cliente_Provincia}
                        onChange={(data) => {
                            setFieldValue('cliente_Provincia', data.target.value);
                        }}
                    />
                </Row>
                <Row className={'col-11'} style={{ paddingRight: '0px' }} >
                    <InputText
                        inputFormCol={{ sm: 6 }}
                        fields={fields}
                        label={t('client.form.postalCode')}
                        inputId={'cliente_Cpos'}
                        name={'cliente_Cpos'}
                        placeholder={t('client.form.insert_postal_code')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle={{ paddingLeft: '17px' }}
                        disable={readOnly}
                        value={values.cliente_Cpos}
                        onChange={(data) => {
                            setFieldValue('cliente_Cpos', data.target.value);
                        }}
                    />
                </Row>
            </Row>
        )
    }
}

export default (withTranslation()(LocationFormInput));
