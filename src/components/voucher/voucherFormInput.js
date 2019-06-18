import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt  } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';


class VoucherFormInput extends Component {
    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched } = this.props;    

        return (
            <Row>
                <Col sm={11}>    
                    <InputText
                        label={false}
                        inputId={'clienteId'}
                        name={'clienteId'}
                        placeholder={t('voucher.form.insert_customer_criterion')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                    />
                </Col>
                <Col sm={1}>
                    <FontAwesomeIcon icon={faPlus} />                    
                </Col>
                <Col sm={11}>
                    <InputText
                        label={t('voucher.form.business_name')}
                        inputId={'bussines-name'}
                        name={'business-name'}                        
                        placeholder={t('voucher.form.insert_business_name')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                    />
                </Col>
                <Col sm={1}>
                    <FontAwesomeIcon icon={faPencilAlt} />                    
                </Col>
                <Col sm={11}>
                    <InputText
                        label={t('voucher.form.code')}
                        inputId={'code'}
                        name={'code'}
                        placeholder={t('voucher.form.insert_code_client')}                        
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                    />
                </Col>
                <Col sm={6}>
                    <InputText
                        label={t('voucher.form.responsible_type')}
                        inputId={'clienteId'}
                        name={'clienteId'}
                        placeholder={t('voucher.form.insert_responsible_type')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle= {{paddingLeft:'0px'}}
                    />
                </Col>
                <Col sm={6}>
                    <InputText
                        label={t('voucher.form.cuit')}
                        inputId={'clienteId'}
                        name={'clienteId'}
                        placeholder={t('voucher.form.insert_cuit')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle= {{paddingLeft:'23px'}}
                        styleLabel={{textAlign:'right'}}
                    />
                </Col>
            </Row>
        )
    }
}

export default (withTranslation()( VoucherFormInput ));
