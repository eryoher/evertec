import React, { Component } from 'react'
import { Row, Col, Button, Toast } from 'react-bootstrap';

export default class GlobalNotfications extends Component {
    render() {
        const { message, showMessage, voucherType } = this.props
        const resultMessage = (typeof (message) === 'object') ? message.Resultado.Mens_error : message;

        const styles = (voucherType) ? {
            position: 'absolute',
            top: 0,
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
                    delay={4000}
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
