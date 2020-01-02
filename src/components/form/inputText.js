import React, { Component } from 'react'
import { Row, Col, Modal, Form } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputText.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import ModalValidate from 'components/headboard/modalValidate';
import { connect } from 'react-redux';
import { IMaskInput } from 'react-imask';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validateField } from 'lib/FieldValidations';


class InputText extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showLockModal: false,
            inputValue: this.props.value,
            configInput: this.getconfigField(props.inputId),
            requireError: (this.props.showError) ? this.props.showError : false,
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.value !== this.state.inputValue) {
            this.setState({ inputValue: nextProps.value }) //Valor inicial 
        }
    }

    _handleKeyDown = (e) => {
        //Enter
        if (e.keyCode === 13) {
            if (this.props.handleEnterKey) {
                this.props.handleEnterKey(e, this.state.inputValue);
            }
        }
    }

    handleShowModal = () => {
        this.setState({ showLockModal: true });
    }

    handleCancelModal = () => {
        this.setState({ showLockModal: false });
    }

    handleClearValue = () => {
        const { onBlur, onChange } = this.props
        this.setState({ inputValue: '' })
        if (onBlur) {
            onBlur('');
        }
        if (onChange) {
            onChange('');
        }

    }

    handleSubmit = (data) => {
        this.handleCancelModal();
        this.props.handleSubmit(data);
    }

    handleChage = (data) => {
        const { onChange } = this.props;
        const value = (data && data.target) ? data.target.value : data;
        this.setState({ inputValue: value });
        if (onChange) {
            onChange(value);
        }
    }

    handleOnblur = () => {
        const { onBlur } = this.props;
        const { configInput, inputValue } = this.state;
        let ban = true

        if (configInput.valid && !validateField(inputValue, configInput.valid)) {
            ban = false
        }

        if (onBlur && ban) {
            onBlur(this.state.inputValue);
        } else if (onBlur) {
            onBlur();
        }

        if (configInput.requerido && !this.state.inputValue) {
            this.setState({ requireError: true });
        } else if (this.state.inputValue) {
            this.setState({ requireError: false });

        }




    }

    handleNumberOnblur = (data) => {
        const { onBlur } = this.props;
        const { inputValue, configInput } = this.state
        const value = data.target.value;
        const newValue = (inputValue === '') ? inputValue : value.split('.').join('');
        this.setState({ inputValue: newValue });

        if (configInput.requerido && !inputValue) {
            this.setState({ requireError: true });
        }

        onBlur(newValue);
    }

    getconfigField = (id) => {
        const { fields } = this.props;
        let result = {};
        if (fields) {
            fields.forEach(field => {
                if (field.idCampo.trim() === id) {
                    result = field;
                }
            });
        }

        return result;
    }

    getMask = (config) => {
        const { authUser } = this.props
        const maskInput = (authUser.configApp.mascaras[config.mascara]) ? authUser.configApp.mascaras[config.mascara] : null;
        return (maskInput) ? maskInput : false;
    }

    renderInput = (options, config) => {
        let response;
        const { allowClear, refTest } = this.props;
        if (config.mascara) {
            const mask = this.getMask(config); //Se obtiene las posibles opciones de mascara.. aca se agregan validaciones.
            if (mask.tipo === 'fecha') {
                const formatDate = (mask.valor) ? mask.valor.replace(/D/g, 'd').replace(/Y/g, 'y') : 'MM-dd-yyyy';
                response = (
                    <DatePicker
                        {...options}
                        selected={(options.value) ? new Date(options.value) : null}
                        dateFormat={formatDate}
                        isClearable={true}
                    />
                )
            } else if (mask.tipo === 'personalizado') {
                const maskInput = (mask.valor) ? mask.valor.mask : null;
                response = (
                    <IMaskInput
                        {...options}
                        value={(options.value) ? options.value.toString() : null}
                        mask={maskInput}
                    />
                )
            } else if (mask.tipo === 'numero') {
                response = (
                    <IMaskInput
                        {...options}
                        mask={Number}
                        scale={mask.cantDecimales}
                        thousandsSeparator={(mask.usarSeparadorMil) ? '.' : ''}
                        onBlur={(v) => this.handleNumberOnblur(v)}
                    />
                )
            } else {
                response = (
                    <input
                        {...options}
                    />
                )
            }
        } else {
            if (allowClear) {
                response = (
                    <div className="input-group mb-3">
                        <input {...options} style={{ height: '30px', fontSize: '10pt' }} className="form-control" />
                        <div className="input-group-prepend" style={{ height: '30px' }}>
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faTimesCircle} onClick={this.handleClearValue} style={{ cursor: 'pointer' }} />
                            </span>
                        </div>
                    </div>
                )
            } else {
                response = (
                    <input
                        {...options}
                    />
                )
            }
        }

        return response;
    }

    renderField = () => {
        const { label,
            placeholder,
            name,
            styles,
            inputId,
            id,
            colInput,
            colLabel,
            styleLabel,
            divStyle,
            disable,
            theme,
            type,
            inputFormCol,
            lock,
            rowStyle,
            autoFocus,
            errorInput,
            touched,
        } = this.props;

        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = (disable) ? theme.inputDisabled : '';
        const customType = (type) ? type : 'text';
        const config = this.state.configInput;
        const customStyleLabel = (config.requerido) ? { ...styleLabel, color: 'red' } : { ...styleLabel };
        const inputStyles = (this.state.requireError) ? { ...styles, border: '1px solid red' } : styles;

        if (config.visible) {
            const optionsInput = {
                id: (id) ? id : inputId,
                name: name,
                type: customType,
                style: inputStyles,
                placeholder: placeholder,
                autoFocus: autoFocus,
                disabled: !config.editable,
                className: `${theme.inputText} ${classText}`,
                value: this.state.inputValue,
                ref: this.props.fwRef,
                onChange: (v) => this.handleChage(v),
                onBlur: (v) => this.handleOnblur(v),
                onKeyDown: this._handleKeyDown
            }

            return (
                <>
                    <Col {...inputFormCol} >
                        <Row className={"form-group"} style={rowStyle} >
                            <label className={`${theme.inputLabel}  ${classLabel}`} style={customStyleLabel} >
                                {(config.label) ? config.label : label}
                            </label>
                            <Col className={classInput} style={{ ...divStyle }}>
                                {
                                    this.renderInput(optionsInput, config)
                                }
                            </Col>
                        </Row>

                    </Col>
                    {
                        lock && <Col className={theme.lock} sm={1}>
                            <FontAwesomeIcon icon={faLock} onClick={this.handleShowModal} style={{ cursor: 'pointer' }} />
                            <ModalValidate
                                showModal={this.state.showLockModal}
                                handleClose={this.handleCancelModal}
                                handleSubmit={this.handleSubmit}
                            />
                        </Col>
                    }
                </>
            )
        } else {
            return null;
        }
    }

    render() {
        const { fields } = this.props;
        if (fields) {
            return (
                this.renderField()
            )
        } else {
            return null
        }
    }
}


const mapStateToProps = ({ auth }) => {
    const { authUser } = auth;
    return { authUser };
};

export default connect(mapStateToProps)(themr('InputTextStyle', styles)(InputText));