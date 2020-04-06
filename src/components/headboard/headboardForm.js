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
        this.firtsRefs = null;
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        if (idOperacion) {
            this.props.getConfigVoucher({ cod_proceso: P_VTACAB, idOperacion });
            this.props.getVoucherHead({ idOperacion });
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.config !== prevProps.config && !prevProps.config) {
            if (this.firtsRefs.current && this.firtsRefs.current.element) {
                this.firtsRefs.current.element.focus();
            } else {
                this.firtsRefs.current.focus();
            }
        }
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

    getRefsField = (fields) => {
        fields.forEach(field => {
            if (field.editable) {
                const fieldRefs = React.createRef();
                if (!this.firtsRefs) {
                    this.firtsRefs = fieldRefs; //Se guarda el primer campo editable.
                }
                field.fwRef = fieldRefs;
            }

        });

        return fields;

    }

    render() {
        const { config, headSale, crumbs, current, urlParameter, t } = this.props;
        const defaultInitial = (!headSale) ? {
            Titulo_comp_vta: '',
            Suc_empresa_vta: '',
            fecha_comp_vta: '',
            mon_comp_vta: '',
            cotiz_comp_vta: '',
            cond_comp_vta: '',
        } : {
                Suc_empresa_vta: headSale.suc_empresa[0].Cod_Suc,
                mon_comp_vta: headSale.moneda[0].cod_moneda,
                cond_comp_vta: headSale.cond_comp_vta[0].cod_cond_vta,
                vend_comp_vta: headSale.vendedor[0].cod_vend,
                fecha_comp_vta: moment(headSale.fecha_comp_vta),
                Titulo_comp_vta: '',
                cotiz_comp_vta: '',
            };


        const [backButton, nextButton] = (crumbs) ? getBackNextButtons(crumbs, current, urlParameter) : [];
        const validationSchema = (config) ? getValidationSchema(config.campos, t) : {};
        const fields = (config) ? this.getRefsField(config.campos) : {};

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
                                <Form onSubmit={handleSubmit} className={"voucher-info-form"}>
                                    <Col>
                                        <HeadboardFormInput
                                            formConfirmation={this.props.formConfirmation}
                                            fields={fields}
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