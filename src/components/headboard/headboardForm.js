import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import HeadboardFormInput from './headboardFormInput';
import { connect } from 'react-redux';
import { getConfigVoucher, getVoucherHead, voucherHeadCheckDate } from '../../actions';
import InputButton from 'components/form/inputButton';
import { VOUCHER, LOADITEMS } from '../../utils/RoutePath';

class HeadboardForm extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.getConfigVoucher({ cod_proceso: 'p_vtacab', idOperacion });
        this.props.getVoucherHead({ idOperacion });
    }

    render() {
        const { config, headSale } = this.props;
        const defaultInitial = { Titulo_comp_vta: '', fecha: '', formData: { cotiz_comp_vta: '', fecha_comp_vta: '' } };
        const initial = (headSale) ? headSale : defaultInitial;
        console.log(initial)
        return (
            <Col sm={12}>
                <Formik
                    initialValues={{ ...initial }}
                    onSubmit={(values, actions) => {

                    }}
                    validationSchema={Yup.object().shape({
                        //secuencia: Yup.number().required(t('validation-required', { field: t('Sequence') })).min(0, t('sequence-error-min')),
                        //descripcion: Yup.string().required(t('validation-required', { field: t('Description') })),                                
                    })}
                    enableReinitialize={true}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
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
                                    <InputButton
                                        backButton
                                        urlForm={VOUCHER}
                                    />
                                </Col>
                                <Col style={{ textAlign: 'left', paddingLeft: '0px' }} className={"mt-2 col-1 offset-10"} >
                                    <InputButton
                                        nextButton
                                        urlForm={LOADITEMS}
                                    />
                                </Col>
                            </Row>
                        </Form>
                    )}
                />
            </Col>
        )
    }
}

const mapStateToProps = ({ voucher }) => {
    const { config, headSale } = voucher;
    return { config, headSale };
};


export default connect(mapStateToProps, { getConfigVoucher, getVoucherHead, voucherHeadCheckDate })(withTranslation()(HeadboardForm));