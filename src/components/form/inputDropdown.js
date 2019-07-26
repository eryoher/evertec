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
            if (field.idcampo == id) {
                result = field;
            }
        });

        return result;
    }

    renderField = () => {
        const { label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, options, disable, theme, inputFormCol } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const config = this.getconfigField(inputId);
        const customStyleLabel = (config.requerido) ? { ...styleLabel, paddingTop: '4px', color: 'red' } : { ...styleLabel, paddingTop: '4px' };
        if (config.visible) {
            return (
                <Col {...inputFormCol} >
                    <Row className={"form-group"}>
                        <label className={`${classLabel} ${theme.inputLabel}`} style={customStyleLabel} >
                            {(config.label) ? config.label : label}
                        </label>
                        <Col className={classInput} style={{ ...divStyle }}>
                            <select
                                id={inputId}
                                name={name}
                                style={{ styles }}
                                placeholder={placeholder}
                                disabled={!config.editable}
                                className={`${theme.inputDropdown} custom-select`}
                                onChange={(value) => this.props.onChange(value)}
                            >
                                {options && this.renderOptions()}
                            </select>
                        </Col>

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