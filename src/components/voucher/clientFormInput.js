import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import InputDropdown from '../form/inputDropdown'


class ClientFormInput extends Component {

    handleChange = (select) => {
        const { cliente_Sucursales } = this.props.values;
        const val = select.target.value;
        let result = null;
        cliente_Sucursales.forEach(opt => {
            if (opt.suc_nro === val) {
                result = opt;
            }
        });

        this.setValues(result);
    }

    setValues = (data) => {

        const { setFieldValue } = this.props;
        if (data) {
            setFieldValue('suc_email', data.suc_email);
            setFieldValue('suc_tel', data.suc_tel);
            setFieldValue('suc_address', `${data.suc_calle} ${data.suc_piso}`);
            setFieldValue('suc_local', data.suc_local);
            setFieldValue('suc_nom_prov', data.suc_nom_prov);
            setFieldValue('suc_cpos', data.suc_cpos);
        } else {
            setFieldValue('suc_email', '');
            setFieldValue('suc_tel', '');
            setFieldValue('suc_address', '');
            setFieldValue('suc_local', '');
            setFieldValue('suc_nom_prov', '');
            setFieldValue('suc_cpos', '');
        }
    }


    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, readOnly, fields } = this.props;
        const optionsSelect = (values.cliente_Sucursales) ? values.cliente_Sucursales : [];

        const options = optionsSelect.map((opt) => {
            return ({ id: opt.suc_nro, label: opt.suc_nombre });
        })

        return (
            <Row>
                <InputDropdown
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('client.form.client_branch')}
                    inputId={'cliente_Sucursales'}
                    name={'cliente_Sucursales'}
                    placeholder={t('client.form.insert_client_branch')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    options={options}
                    disable={readOnly}
                    onChange={this.handleChange}

                />
                <InputText
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('client.form.contact')}
                    inputId={'cliente_Contacto'}
                    name={'cliente_Contacto'}
                    placeholder={t('client.form.insert_contact')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    disable={readOnly}
                    value={values.cliente_Contacto}
                    onChange={(data) => {
                        setFieldValue('cliente_Contacto', data.target.value);
                    }}
                />
                <Row className={'col-11'} style={{ paddingRight: '0px' }} >
                    <InputText
                        inputFormCol={{ sm: 6 }}
                        fields={fields}
                        label={t('client.form.phone')}
                        inputId={'cliente_Telefono'}
                        name={'cliente_Telefono'}
                        placeholder={t('client.form.insert_phone')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        disable={readOnly}
                        divStyle={{ paddingLeft: '17px' }}
                        value={values.cliente_Telefono}
                        onChange={(data) => {
                            setFieldValue('cliente_Telefono', data.target.value);
                        }}
                    />

                    <InputText
                        inputFormCol={{ sm: 6, style: { paddingRight: '0px' } }}
                        fields={fields}
                        label={t('client.form.email')}
                        inputId={'cliente_email'}
                        name={'cliente_email'}
                        placeholder={t('client.form.insert_email')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        styleLabel={{ textAlign: 'right' }}
                        disable={readOnly}
                        value={values.cliente_email}
                        onChange={(data) => {
                            setFieldValue('cliente_email', data.target.value);
                        }}
                    />
                </Row>
                <InputText
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('client.form.address')}
                    inputId={'cliente_domicilio'}
                    name={'cliente_domicilio'}
                    placeholder={t('client.form.insert_address')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    disable={readOnly}
                    value={values.cliente_domicilio}
                    onChange={(data) => {
                        setFieldValue('cliente_domicilio', data.target.value);
                    }}
                />

            </Row>
        )
    }
}

export default (withTranslation()(ClientFormInput));
