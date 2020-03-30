import React, { Component } from 'react'
import { Row, Col, Button, Toast } from 'react-bootstrap';

export default class GlobalNotfications extends Component {

    renderMessage = (message) => {
        let result = (message.Mens_error) ? message.Mens_error : '';
        const errors = []
        if (message.Errores) {
            message.Errores.forEach(error => {
                errors.push(
                    <li key={error.idCampo}>
                        {error.mensaje}
                    </li>
                )
            });
        }

        return (errors.length) ? errors : result;
    }


    render() {
        const { message, showMessage, voucherType } = this.props
        const resultMessage = (typeof (message) === 'object') ? this.renderMessage(message) : message;

        const styles = (voucherType) ? {
            position: 'absolute',
            top: 40,
            right: 0,
            minWidth: 270
        } : {
                position: 'absolute',
                top: 25,
                minWidth: 270
            };

        return (
            <Col >
                <Toast
                    onClose={() => this.props.setShow(false)}
                    show={showMessage}
                    delay={10000}
                    style={styles}
                    className={'alert alert-danger'}
                    autohide
                >
                    <Toast.Header  >
                        <strong className="mr-auto">Error!</strong>
                    </Toast.Header>
                    <Toast.Body className={'alert alert-danger'} >
                        {resultMessage}
                    </Toast.Body>
                </Toast>

            </Col>
        )
    }
}
