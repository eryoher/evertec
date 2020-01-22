import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import InputDropdown from 'components/form/inputDropdown';
import { Collapse } from 'reactstrap'
import CollapseBotton from 'components/common/collapseBoton';
import GenericInputForm from 'components/form/genericInputForm';
import InputDate from 'components/form/inputDate';
import { voucherHeadValidatekey, voucherHeadCheckDate, voucherHeadConfirm } from '../../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import NotificationMessage from 'components/common/notificationMessage';


class HeadBoardFormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: true,
            showError: false,
            errrorTitle: '',
            errorMessage: ''
        }
    }

    componentDidUpdate = (prevProps) => {
        const { fields, setFieldValue, checkDate, checkKey } = this.props;

        if (!prevProps.checkKey && checkKey) {
            if (checkKey.codigo === 200) {
                fields.forEach(field => {
                    if (field.idcampo === 'cotiz') {
                        field.editable = 1;
                        setFieldValue('cotiz')
                    }
                });
            } else {
                this.setError(checkKey);
            }

        }

        if (!prevProps.checkDate && checkDate) {
            if (checkDate.codigo && checkDate.codigo !== 200) {
                setFieldValue('date', new Date());
                this.setError(checkDate);
            }
        }
    }

    componentWillUnmount = () => {
        const { idOperacion, values } = this.props;

        if (values) {
            const requestData = {
                Transp_comp_vta: values.transp_comp_vta,
                Suc_empresa_vta: values.Suc_empresa_vta,
                cond_comp_vta: values.cond_comp_vta,
                cotiz_comp_vta: values.cotiz_comp_vta,
                fecha_comp_vta: values.fecha_comp_vta,
                mon_comp_vta: values.mon_comp_vta,
                titulo_comp_vta: values.titulo_comp_vta,
                vend_comp_vta: values.vend_comp_vta,
                atrib_comp_vta: values.atrib_comp_vta_field
            }
            if (idOperacion) {
                this.props.voucherHeadConfirm({ ...requestData, idOperacion })
            }
        }
    }

    setError = (error) => {
        this.setState({ showError: true, errorMessage: error.mensaje, errorTitle: error.descripcion });
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    companyChange = (select) => {
        //console.log(select.target.value)
    }

    handleChangeCurreny = (select) => {
        const { headSale, setFieldValue } = this.props;
        const code = select.target.value;
        headSale.moneda.forEach(currency => {
            if (currency.cod_moneda === code) {
                setFieldValue('cotiz_comp_vta', currency.cotiz)
                setFieldValue('mon_comp_vta', code)
            }
        });
    }

    handleValidateInput = (data) => {
        const { idOperacion } = this.props;
        this.props.voucherHeadValidatekey({ idOperacion, clave: data })
    }

    handleChangeDate = (date) => {
        const { idOperacion, handleChange } = this.props;
        const { setFieldValue } = this.props;
        const dateFormated = moment(date).format("DD/MM/YYYY");
        this.props.voucherHeadCheckDate({ idOperacion, fecha: dateFormated });
        const valueDate = (date) ? date : '';
        setFieldValue('fecha_comp_vta', valueDate);
        handleChange();
    }

    handleChangeGeneric = (data) => {
        const { values, setFieldValue } = this.props;
        const { atrib_comp_vta_field } = values;

        let generic = (atrib_comp_vta_field) ? atrib_comp_vta_field : [];
        let ban = true;

        generic.forEach((field, index) => {
            if (field.cod_atributo === data.cod_atributo) {
                generic[index] = data; //Editando
                ban = false;
            }
        })

        if (ban) {
            generic.push(data) //La primera vez
        }

        setFieldValue('atrib_comp_vta_field', generic);
    }

    handleCloseError = () => {
        this.setState({ showError: false })
    }

    renderCarrier = () => {
        const { readOnly, t, fields, headSale, setFieldValue, handleBlur } = this.props;
        let result = [];
        const optionsTrans = (headSale.transporte) ? headSale.transporte.map((opt) => {
            return ({ id: opt.cod_transp, label: opt.nom_transp })
        }) : []

        result.push(
            <Row key={1} className={'col-11'} style={{ paddingRight: '0px' }} >
                <InputDropdown
                    inputFormCol={{ sm: 6 }}
                    fields={fields}
                    label={t('headboard.form.carrier')}
                    inputId={"transp_comp_vta"}
                    name={"transp_comp_vta"}
                    placeholder={t('headboard.form.insert_carrier')}
                    colLabel={"col-sm-4"}
                    colInput={"col-sm-8"}
                    divStyle={{ paddingLeft: '17px' }}
                    options={optionsTrans}
                    disable={readOnly}
                    onBlur={handleBlur}
                    onChange={(data) => {
                        setFieldValue('transp_comp_vta', data.target.value);
                    }}
                />
            </Row>
        )
        if (headSale.atrib_comp_vta) {
            headSale.atrib_comp_vta.forEach(element => {
                result.push(
                    <GenericInputForm config={element} key={element.cod_atrib} handleChange={this.handleChangeGeneric} />
                );
            });
        }

        return result;
    }

    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, headSale, readOnly, collapse, fields } = this.props;

        if (!headSale) {
            return null;
        }

        const optionsCompany = (headSale.suc_empresa) ? headSale.suc_empresa.map((opt) => {
            return ({ id: opt.Cod_Suc, label: opt.Nom_suc });
        }) : [];

        const optionsCurrency = (headSale.moneda) ? headSale.moneda.map((opt) => {
            return ({ id: opt.cod_moneda, label: opt.desc_moneda })
        }) : [];

        const optionsSaler = (headSale.vendedor) ? headSale.vendedor.map((opt) => {
            return ({ id: opt.cod_vend, label: opt.nom_vend })
        }) : [];

        const optionsConditions = (headSale.cond_comp_vta) ? headSale.cond_comp_vta.map((opt) => {
            return ({ id: opt.cod_cond_vta, label: opt.desc_cond_vta })
        }) : [];

        if (fields) {
            return (
                <Row>
                    <NotificationMessage
                        {...this.state}
                        handleCloseError={this.handleCloseError}
                        type={'danger'}
                    />

                    <InputDropdown
                        inputFormCol={{ sm: 11 }}
                        fields={fields}
                        label={t('headboard.form.company_branch')}
                        inputId={'Suc_empresa_vta'}
                        name={'Suc_empresa_vta'}
                        placeholder={t('voucher.headboard.form.insert_company_branch')}
                        styles={{ width: '100%' }}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        options={optionsCompany}
                        disable={readOnly}
                        value={values.Suc_empresa_vta}
                        onBlur={handleBlur}
                        onChange={(data) => {
                            setFieldValue('Suc_empresa_vta', data.target.value);
                            handleChange()
                        }}
                    />
                    <Row className={'col-11'} style={{ paddingRight: '0px' }} >
                        <InputText
                            inputFormCol={{ sm: 6 }}
                            fields={fields}
                            label={t('headboard.form.voucher')}
                            inputId={"Titulo_comp_vta"}
                            name={"Titulo_comp_vta"}
                            placeholder={t('headboard.form.insert_voucher')}
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            divStyle={{ paddingLeft: '17px' }}
                            disable={readOnly}
                            value={values.Titulo_comp_vta}
                            onBlur={handleBlur}
                            onChange={(data) => {
                                setFieldValue('Titulo_comp_vta', data.target.value);
                                handleChange()
                            }}
                        />
                        <InputText
                            inputFormCol={{ sm: 6, style: { paddingRight: '0px' } }}
                            fields={fields}
                            label={t('headboard.form.date')}
                            inputId={'fecha_comp_vta'}
                            name={'fecha_comp_vta'}
                            placeholder={t('headboard.form.insert_date')}
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            styleLabel={{ textAlign: 'right' }}
                            disable={readOnly}
                            value={values.fecha_comp_vta}
                            onChange={this.handleChangeDate}
                            onBlur={handleBlur}
                        />

                    </Row>
                    <Row className={'col-11'} style={{ paddingRight: '0px' }} >
                        <InputDropdown
                            inputFormCol={{ sm: 6 }}
                            fields={fields}
                            label={t('headboard.form.currency')}
                            inputId={"mon_comp_vta"}
                            name={"mon_comp_vta"}
                            placeholder={t('headboard.form.insert_currency')}
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            divStyle={{ paddingLeft: '17px' }}
                            disable={readOnly}
                            options={optionsCurrency}
                            onChange={this.handleChangeCurreny}
                            onBlur={handleBlur}

                        />
                        <InputText
                            inputFormCol={{ sm: 5, style: { paddingLeft: '12px' } }}
                            fields={fields}
                            lock
                            handleSubmit={this.handleValidateInput}
                            label={t('headboard.form.quotation')}
                            inputId={'cotiz_comp_vta'}
                            name={'cotiz_comp_vta'}
                            placeholder={t('headboard.form.insert_quotation')}
                            colLabel={"col-sm-5"}
                            colInput={"col-sm-7"}
                            styleLabel={{ textAlign: 'right' }}
                            disable={readOnly}
                            value={values.cotiz_comp_vta}
                            onBlur={handleBlur}
                            onChange={(data) => {
                                setFieldValue('cotiz_comp_vta', data.target.value);
                                handleChange()
                            }}

                        />
                    </Row>
                    <Row className={'col-11'} style={{ paddingRight: '0px' }} >

                        <InputDropdown
                            inputFormCol={{ sm: 6 }}
                            fields={fields}
                            label={t('headboard.form.saler')}
                            inputId={"vend_comp_vta"}
                            name={"vend_comp_vta"}
                            placeholder={t('headboard.form.insert_saler')}
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            divStyle={{ paddingLeft: '17px' }}
                            disable={readOnly}
                            options={optionsSaler}
                            value={values.vend_comp_vta}
                            onBlur={handleBlur}
                            onChange={(data) => {
                                setFieldValue('vend_comp_vta', data.target.value);
                                handleChange();
                            }}
                        />

                        <InputDropdown
                            inputFormCol={{ sm: 6, style: { paddingRight: '0px' } }}
                            fields={fields}
                            label={t('headboard.form.condSale')}
                            inputId={"cond_comp_vta"}
                            name={"cond_comp_vta"}
                            placeholder={t('headboard.form.insert_condition_sale')}
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            styleLabel={{ textAlign: 'right' }}
                            disable={readOnly}
                            options={optionsConditions}
                            value={values.cond_comp_vta}
                            onChange={(data) => {
                                setFieldValue('cond_comp_vta', data.target.value);
                                handleChange();
                            }}
                            onBlur={handleBlur}

                        />

                    </Row>
                    {
                        collapse &&
                        <>
                            <Row className={"col-12"}>
                                <Col sm={1}>
                                    <CollapseBotton
                                        onPress={() => this.toggle()}
                                        status={this.state.collapse}
                                    />
                                </Col>
                                <Col sm={11}>
                                    <div className="dropdown-divider col-11 p-2" />
                                </Col>
                            </Row>

                            <Collapse style={{ width: '100%' }} isOpen={this.state.collapse && collapse}>
                                {values && this.renderCarrier()}
                            </Collapse>
                        </>
                    }
                    {
                        !collapse && this.renderCarrier()
                    }
                </Row>
            )
        } else {
            return null;
        }
    }
}


const mapStateToProps = ({ voucher }) => {
    const { checkKey, checkDate, headSale } = voucher;
    return { checkKey, checkDate, headSale };
};


export default connect(mapStateToProps, { voucherHeadValidatekey, voucherHeadCheckDate, voucherHeadConfirm })(withTranslation()(HeadBoardFormInput));