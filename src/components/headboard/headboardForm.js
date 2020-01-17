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
import moment from 'moment';
import { P_VTACAB } from 'constants/ConfigProcessNames';


class HeadboardForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            urlSubmitForm: '',
            timeSet: ''
        }
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.getConfigVoucher({ cod_proceso: P_VTACAB, idOperacion });
        this.props.getVoucherHead({ idOperacion });
    }

    setUrlForm = (url) => {
        const now = new moment();
        this.setState({ urlSubmitForm: url, timeSet: now })
    }

    getUrlSubmit = () => {
        let urlSubmit = ''
        if (this.state.urlSubmitForm || this.props.urlSubmitForm) {
            if (this.state.urlSubmitForm && this.props.urlSubmitForm) { //Las dos tienen url
                urlSubmit = (this.state.timeSet.isSameOrAfter(this.props.timeSet)) ? this.state.urlSubmitForm : this.props.urlSubmitForm;
            } else {
                urlSubmit = (this.props.urlSubmitForm) ? this.props.urlSubmitForm : this.state.urlSubmitForm;   //la url solo esta en una variable
            }
        }

        return urlSubmit;
    }

    render() {
        const { config, headSale, crumbs, current, urlParameter, t } = this.props;
        const defaultInitial = {
            Titulo_comp_vta: '',
            Suc_empresa_vta: '',
            fecha_comp_vta: '',
            mon_comp_vta: '',
            cotiz_comp_vta: '',
            cond_comp_vta: '',
        };

        const initial = (headSale) ? { ...headSale, Titulo_comp_vta: '', fecha_comp_vta: '', } : defaultInitial;
        const [backButton, nextButton] = (crumbs) ? getBackNextButtons(crumbs, current, urlParameter) : [];
        const validationSchema = (config) ? getValidationSchema(config.campos, t) : {};

        if (config) {
            return (
                <Col sm={12}>
                    <Formik
                        ref={this.props.formRef}
                        initialValues={{ ...defaultInitial }}
                        onSubmit={(values, actions) => {
                            const urlSubmit = this.getUrlSubmit()
                            if (urlSubmit) {
                                this.props.history.push(urlSubmit)
                            }
                        }}
                        validationSchema={validationSchema}
                        enableReinitialize={true}
                        render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                            <>
                                <Col sm={11} >
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
                                                />
                                            }
                                        </Col>
                                        <Col style={{ textAlign: 'right', paddingRight: '2%' }} className={"mt-2 col-1 offset-10"} >
                                            {
                                                nextButton &&
                                                <InputButton
                                                    nextButton
                                                    urlForm={nextButton.url}
                                                    type="primary"
                                                    onClick={() => this.setUrlForm(nextButton.url)}
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
    const config = (voucher.config) ? voucher.config[P_VTACAB] : null
    const { headSale } = voucher;
    return { config, headSale };
};


export default connect(mapStateToProps, { getConfigVoucher, getVoucherHead, voucherHeadCheckDate })(withTranslation()(withRouter(HeadboardForm)));