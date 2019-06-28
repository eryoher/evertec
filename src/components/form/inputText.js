import React, { Component } from 'react'
import { Row, Col, Label } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputText.module.css';

class InputText extends Component {
    render() {
        const {label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, disable, theme, type} = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = ( disable ) ? theme.inputDisabled : '';
        const customType = (type) ? type : 'text';

        return (
            <Row className={"form-group"}>                
                <Label className={`${classLabel} ${theme.inputLabel}`} style={{...styleLabel, paddingTop:'5px'}} >
                    {label}
                </Label>
                <Col className={classInput} style={{...divStyle}}>
                    <input        
                        id={inputId}              
                        name={name}  
                        type={customType}
                        style={styles}
                        placeholder={placeholder} 
                        disabled={disable}   
                        className={`${theme.inputText} ${classText}`}                                         
                    />
                </Col>
                
            </Row>
        )
    }
}

export default themr('InputTextStyle', styles)( InputText );