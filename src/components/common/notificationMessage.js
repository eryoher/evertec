import React, { Component } from 'react'
import { Row, Col, Alert } from 'react-bootstrap';
import { isArray } from 'util';

export default class NotificationMessage extends Component {
    render() {
        const { showError, handleCloseError, errorTitle, errorMessage, type } = this.props;
        const typeNoti = (type) ? type : 'success';

        return (
            <Alert show={showError} variant={typeNoti} onClose={handleCloseError} dismissible>
                <Alert.Heading>{errorTitle}</Alert.Heading>

                {(isArray(errorMessage)) ? errorMessage.map((error, index) => {
                    return (
                        <div key={index} className={"p-1"} >
                            {error}
                        </div>
                    )
                }) : <p> {errorMessage} </p>}

            </Alert>
        )
    }
}
