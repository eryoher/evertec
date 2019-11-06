import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import InputAutocomplete from 'components/form/inputAutocomplete';
import InputTextMask from 'components/form/inputTextMask';

class VoucherFormInput extends Component {

    componentDidMount() {
    }

    render() {
        const { t,
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            setFieldValue,
            setFieldTouched,
            readOnly,
            handleSearch,
            auoptions,
            handleLoading,
            handleSelect,
            fields
        } = this.props;

        return (
            <Row>
                {!readOnly &&
                    <InputAutocomplete
                        inputFormCol={{ sm: 11 }}
                        label={false}
                        inputId={'cliente_criterio'}
                        name={'cliente_criterio'}
                        placeholder={t('voucher.form.insert_customer_criterion')}
                        styles={{ width: '100%' }}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        handleSearch={handleSearch}
                        auoptions={auoptions}
                        handleLoading={handleLoading}
                        handleSelect={handleSelect}
                        labelKey={"label"}
                        disable={readOnly}
                    />}

                {!readOnly &&
                    <Col sm={1}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Col>
                }

                <InputText
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('voucher.form.business_name')}
                    inputId={'cliente_razon_social'}
                    name={'cliente_razon_social'}
                    placeholder={t('voucher.form.insert_business_name')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    disable={readOnly}
                    value={values.cliente_razon_social}
                    onChange={(data) => {
                        setFieldValue('cliente_razon_social', data.target.value);
                    }}
                />

                {!readOnly && <Col sm={1}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Col>}

                <InputText
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('voucher.form.code')}
                    inputId={'cliente_codigo'}
                    name={'cliente_codigo'}
                    placeholder={t('voucher.form.insert_code_client')}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    disable={readOnly}
                    value={values.cliente_codigo}
                    onChange={(data) => {
                        setFieldValue('cliente_codigo', data.target.value);
                    }}
                />

                <Row className={"col-11"} style={{ paddingRight: '0px' }} >
                    <InputText
                        inputFormCol={{ sm: 6 }}
                        fields={fields}
                        label={t('voucher.form.responsible_type')}
                        inputId={'cliente_Tipo_resp'}
                        name={'cliente_Tipo_resp'}
                        placeholder={t('voucher.form.insert_responsible_type')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        disable={readOnly}
                        styleLabel={{ paddingRight: '0px' }}
                        divStyle={{ paddingLeft: '17px' }}
                        value={values.cliente_Tipo_resp}
                        onChange={(data) => {
                            setFieldValue('cliente_Tipo_resp', data.target.value);
                        }}
                    />
                    <InputText
                        inputFormCol={{ sm: 6, style: { paddingRight: '0px' } }}
                        fields={fields}
                        label={t('voucher.form.cuit')}
                        inputId={'cliente_identificador'}
                        name={'cliente_identificador'}
                        placeholder={t('voucher.form.insert_cuit')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle={{ paddingLeft: '23px' }}
                        disable={readOnly}
                        styleLabel={{ textAlign: 'right' }}
                        value={values.cuit}
                        onChange={(data) => {
                            setFieldValue('cliente_identificador', data.target.value);
                        }}
                    />
                </Row>
            </Row>
        )
    }
}


export default withTranslation()(VoucherFormInput);