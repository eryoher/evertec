import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputDropdown.module.css';

class InputDropdown extends Component {

    componentDidUpdate = (prevProps) => {
        const { options, onChange } = this.props;

        if (prevProps.options.length !== options.length && options.length) {
            // console.log(options[0], 'opcioness  xxxxxxxx')
            if (options[0] && onChange) {
                onChange({ target: { value: options[0].id } });
            }
        }
    }

    renderOptions = () => {
        const { options } = this.props;
        const result = [];

        options.forEach(option => {
            result.push(
                <option value={option.id} key={option.id}>{option.label}</option>
            )
        });

        return result;
    }

    getconfigField = (id) => {
        const { fields } = this.props;
        let result = {};
        fields.forEach(field => {
            if (field.idCampo.trim() === id) {
                result = field;
            }
        });

        return result;
    }

    getCustomValue = (options) => {
        let result = ''
        options.forEach(opt => {
            result = opt.label;
        });
        return result;
    }

    renderField = () => {
        const { label,
            placeholder,
            name,
            styles,
            inputId,
            colInput,
            colLabel,
            styleLabel,
            divStyle,
            options,
            disable,
            theme,
            inputFormCol,
            rowStyle,
            value } = this.props;

        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const config = this.getconfigField(inputId);
        const customStyleLabel = (config.requerido) ? { ...styleLabel, paddingTop: '4px', color: 'red' } : { ...styleLabel, paddingTop: '4px' };
        const classText = (disable) ? theme.inputDisabled : '';
        let customValue = this.getCustomValue(options)

        if (config.visible) {
            return (
                <Col {...inputFormCol} >
                    <Row className={"form-group"} style={rowStyle}>
                        <label className={`${classLabel} ${theme.inputLabel}`} style={customStyleLabel} >
                            {(config.label) ? config.label : label}
                        </label>
                        {!disable && <Col className={classInput} style={{ ...divStyle }}>
                            <select
                                id={inputId}
                                name={name}
                                style={{ styles }}
                                placeholder={placeholder}
                                disabled={!config.editable}
                                className={`${theme.inputDropdown} ${classText} custom-select`}
                                onChange={(value) => this.props.onChange(value)}
                                value={value}
                            >
                                {options && this.renderOptions()}
                            </select>
                        </Col>}

                        {
                            disable &&
                            <Col className={theme.valueReadOnly}>
                                {customValue}
                            </Col>
                        }

                    </Row>
                </Col>
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

export default themr('InputDropdownStyle', styles)(InputDropdown);