import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputGroupText.module.css';

class InputGroupText extends Component {
    render() {
        const { label,
            placeholder,
            name,
            styles,
            stylesGroup,
            inputId,
            colInput,
            colLabel,
            styleLabel,
            divStyle,
            disable,
            theme,
            type,
            beforeInput,
            value,
            onChange
        } = this.props;

        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = (disable) ? theme.inputDisabled : '';
        const customType = (type) ? type : 'text';

        return (
            <Row className={"form-group"}>
                <label className={`${classLabel} ${theme.inputLabel}`} style={{ ...styleLabel, paddingTop: '5px' }} >
                    {label}
                </label>
                <Col className={classInput} style={{ ...divStyle }}>
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" style={stylesGroup} >
                                {beforeInput}
                            </span>
                        </div>
                        <input
                            id={inputId}
                            name={name}
                            type={customType}
                            style={styles}
                            placeholder={placeholder}
                            disabled={disable}
                            className={`${theme.inputText} ${classText}`}
                            value={value}
                            onChange={onChange}
                        />
                    </div>
                </Col>
            </Row>
        )
    }
}

export default themr('InputGroupTextStyle', styles)(InputGroupText);