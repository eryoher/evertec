import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import HeadboardFormInput from './headboardFormInput';
import { connect } from 'react-redux';
import { getConfigVoucher, getVoucherHead, voucherHeadCheckDate } from '../../actions';
import InputButton from 'components/form/inputButton';
import { getBackNextButtons } from '../../lib/BreadCrumbsUtils';
import NotificationError from 'components/common/notificationsErrors';
import { getValidationSchema } from 'lib/FieldValidations';
import { withRouter } from "react-router-dom";


class HeadboardForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            urlSubmitForm: ''
        }
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.getConfigVoucher({ cod_proceso: 'p_vtacab', idOperacion });
        this.props.getVoucherHead({ idOperacion });
    }

    render() {
        const { config, headSale, crumbs, current, urlParameter, t } = this.props;
        const defaultInitial = {
            Titulo_comp_vta: '',
            fecha: '',
            formData: { cotiz_comp_vta: '', fecha_comp_vta: '' },
            Suc_empresa_vta: '',
            fecha_comp_vta: '',
            mon_comp_vta: ''
        };

        const initial = (headSale) ? { ...headSale, Titulo_comp_vta: '', fecha_comp_vta: '', } : defaultInitial;
        const [backButton, nextButton] = (crumbs) ? getBackNextButtons(crumbs, current, urlParameter) : [];
        const validationSchema = (config) ? getValidationSchema(config.campos, t) : {};
        //console.log(validationSchema)
        if (config) {
            return (
                <Col sm={12}>
                    <Formik
                        ref={this.props.formRef}
                        initialValues={{ ...initial }}
                        onSubmit={(values, actions) => {

                            if (this.state.urlSubmitForm || this.props.urlSubmitForm) {
                                const urlSubmit = (this.props.urlSubmitForm) ? this.props.urlSubmitForm : this.state.urlSubmitForm;
                                this.props.history.push(urlSubmit)
                            }

                        }}
                        validationSchema={validationSchema}
                        enableReinitialize={true}
                        render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                            <>
                                <Col sm={11} >
                                    {console.log(errors)}
                                    <NotificationError
                                        errors={errors}
                                        touched={touched}
                                    />
                                </Col>
                                <Form onSubmit={handleSubmit} className="voucher-info-form">
                                    <Col>
                                        <HeadboardFormInput
                                            fields={(config) ? config.campos : null}
                                            idOperacion={this.props.idOperacion}
                                            collapse
                                            {...{
                                                values,
                                                handleBlur,
                                                handleChange,
                                                errors,
                                                touched,
                                                isSubmitting,
                                                handleSubmit,
                                                setFieldValue,
                                                setFieldTouched
                                            }}
                                        />
                                    </Col>
                                    <div className="dropdown-divider col-11 p-1" />
                                    <Row>
                                        <Col style={{ textAlign: 'left' }} className={"mt-2 col-1 "} >
                                            {
                                                backButton &&
                                                <InputButton
                                                    backButton
                                                    urlForm={backButton.url}
                                                    type="primary"
                                                    onClick={() => this.setState({ urlSubmitForm: backButton.url })}
                                                />
                                            }
                                        </Col>
                                        <Col style={{ textAlign: 'left', paddingLeft: '0px' }} className={"mt-2 col-1 offset-10"} >
                                            {
                                                nextButton &&
                                                <InputButton
                                                    nextButton
                                                    urlForm={nextButton.url}
                                                    type="primary"
                                                    onClick={() => this.setState({ urlSubmitForm: nextButton.url })}
                                                />
                                            }
                                        </Col>
                                    </Row>
                                </Form>
                            </>
                        )}
                    />
                </Col>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = ({ voucher }) => {
    const { config, headSale } = voucher;
    return { config, headSale };
};


export default connect(mapStateToProps, { getConfigVoucher, getVoucherHead, voucherHeadCheckDate })(withTranslation()(withRouter(HeadboardForm)));