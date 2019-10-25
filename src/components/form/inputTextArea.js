import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputTextArea.module.css';


class InputTextArea extends Component {

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
        const { label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, cols, rows, disable, theme, onChange, value, inputFormCol } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = (disable) ? theme.inputDisabled : '';

        const config = this.getconfigField(inputId);

        if (config.visible) {
            return (
                <Col {...inputFormCol} >
                    <Row className={"form-group"}>
                        <label className={`${theme.label}  ${classLabel}`} style={{ ...styleLabel }} >
                            {(config.label) ? config.label : label}
                        </label>
                        <Col className={classInput} style={{ ...divStyle }}>
                            <textarea
                                id={inputId}
                                name={name}
                                style={{ margin: '5px ,0px', ...styles }}
                                placeholder={placeholder}
                                rows={rows}
                                cols={cols}
                                disabled={!config.editable}
                                className={`${theme.inputTextArea} ${classText}`}
                                onChange={(v) => onChange(v)}
                                value={value}
                            />
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

export default themr('InputTextAreaStyle', styles)(InputTextArea);
