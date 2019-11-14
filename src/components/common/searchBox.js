import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import InputAutocomplete from 'components/form/inputAutocomplete';
import { withTranslation } from 'react-i18next';
import { searchProducts } from '../../actions';
import { connect } from 'react-redux';
import InputText from 'components/form/inputText';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Col, Row, Button } from 'react-bootstrap';

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            descProd: '',
            codProd: '',
            stock: false
        }
    }

    handleSearch = () => {
        const { descProd, codProd, stock } = this.state;
        this.props.searchProducts({ desc_prod: descProd, cod_prod: codProd, page_number: 1, page_size: 10, con_stock: stock });
    }

    handleOnChangeCheckbox = (event) => {
        this.setState({ stock: event.target.checked })
    }

    handleSelect = (selected) => {
        // console.log(selected, 'cuando seleccion')
    }

    render() {
        const { productOptions, t } = this.props;
        const auoptions = [];

        const inputConfig = [
            { idCampo: 'desc_prod', label: false, visible: 1, requerido: 0, editable: 1 },
            { idCampo: 'cod_prod', label: false, visible: 1, requerido: 0, editable: 1 },
        ]
        return (
            <Formik
                onSubmit={(values, actions) => {
                    this.handleSearch();

                }}
                initialValues={{ ...this.state }}

                enableReinitialize={true}
                render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                    <Form onSubmit={handleSubmit} className="voucher-info-form col-12">
                        <Row>
                            <InputText
                                inputFormCol={{ sm: 6 }}
                                label={false}
                                fields={inputConfig}
                                inputId={'desc_prod'}
                                name={'desc_prod'}
                                styles={{ width: '100%' }}
                                placeholder={t('searchBox.form.insert_product')}
                                colLabel={"col-sm-2"}
                                colInput={"col-sm-10"}
                                disable={false}
                                value={this.state.descProd}
                                allowClear
                                onChange={(data) => {
                                    this.setState({ descProd: data })
                                }}
                            />
                            <InputText
                                inputFormCol={{ sm: 3 }}
                                label={false}
                                fields={inputConfig}
                                placeholder={t('searchBox.form.insert_code')}
                                inputId={'cod_prod'}
                                name={'cod_prod'}
                                styles={{ width: '100%' }}
                                colLabel={"col-sm-2"}
                                colInput={"col-sm-10"}
                                disable={false}
                                value={this.state.codProd}
                                allowClear
                                onChange={(data) => {
                                    this.setState({ codProd: data })
                                }}
                            />
                            <Col sm={1} className={"pt-1"}>
                                <input type="checkbox" onChange={this.handleOnChangeCheckbox} className={"form-check-input"} value="1" />
                                <label className={"form-check-label pt-1"}>
                                    Con Stock
                                </label>
                            </Col>
                            <Col sm={1} className={"text-left"}>
                                <Button style={{ color: '#000', backgroundColor: '#fff', borderColor: '#fff' }} type={"submit"} > <FontAwesomeIcon icon={faSearch} /></Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            />
        )
    }
}

const mapStateToProps = ({ product }) => {
    const { search } = product
    return { search }
}



export default connect(mapStateToProps, { searchProducts })(withTranslation()(SearchBox));   