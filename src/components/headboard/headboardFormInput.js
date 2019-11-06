import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import InputDropdown from 'components/form/inputDropdown';
import { Collapse } from 'reactstrap'
import CollapseBotton from 'components/common/collapseBoton';
import GenericInputForm from 'components/form/genericInputForm';
import InputDate from 'components/form/inputDate';
import { voucherHeadValidatekey, voucherHeadCheckDate } from '../../actions';
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
            if (checkDate.codigo !== 200) {
                setFieldValue('date', new Date());
                this.setError(checkDate);
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
        const { values, setFieldValue } = this.props;
        const code = select.target.value;
        values.moneda.forEach(currency => {
            if (currency.cod_moneda === code) {
                setFieldValue('cotiz', currency.cotiz)
            }
        });
    }

    handleValidateInput = (data) => {
        //Se debe adicionar el idproceso
        this.props.voucherHeadValidatekey({ idproceso: '123456', clave: data })
    }

    handleChangeDate = (date) => {
        //console.log(date, 'esta es la fecha')
        const { setFieldValue } = this.props;
        setFieldValue('fecha', date);
        const dateFormated = moment(date).format("MM/DD/YYYY");

        //Se debe adicionar el idproceso
        this.props.voucherHeadCheckDate({ idproceso: '123456', fecha: dateFormated });
    }

    handleCloseError = () => {
        this.setState({ showError: false })
    }

    renderCarrier = () => {
        const { readOnly, t, fields, values } = this.props;
        let result = [];
        const optionsTrans = (values.transporte) ? values.transporte.map((opt) => {
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
                    onChange={() => { }}
                />
            </Row>
        )
        if (values.atrib_comp_vta) {
            values.atrib_comp_vta.forEach(element => {
                result.push(
                    <GenericInputForm config={element} key={element.cod_atrib} />
                );

            });
        }

        return result;
    }

    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, readOnly, collapse, fields } = this.props;

        if (!values) {
            return null;
        }

        const optionsCompany = (values.suc_empresa) ? values.suc_empresa.map((opt) => {
            return ({ id: opt.cod_suc, label: opt.nom_suc });
        }) : []

        const optionsCurrency = (values.moneda) ? values.moneda.map((opt) => {
            return ({ id: opt.cod_moneda, label: opt.desc_moneda })
        }) : []

        const optionsSaler = (values.vendedor) ? values.vendedor.map((opt) => {
            return ({ id: opt.cod_vendedor, label: opt.nom_vendedor })
        }) : []

        const optionsConditions = (values.cond_comp_vta) ? values.cond_comp_vta.map((opt) => {
            return ({ id: opt.cod_cond_vta, label: opt.desc_cond_vta })
        }) : []

        console.log(fields);

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
                        onChange={() => { }}
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
                            onChange={(data) => {
                                setFieldValue('Titulo_comp_vta', data.target.value);
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
                            onChange={(data) => {
                                setFieldValue('cotiz_comp_vta', data.target.value);
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
                            onChange={() => { }}
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
                            onChange={() => { }}
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
    const { checkKey, checkDate } = voucher;
    return { checkKey, checkDate };
};


export default connect(mapStateToProps, { voucherHeadValidatekey, voucherHeadCheckDate })(withTranslation()(HeadBoardFormInput));