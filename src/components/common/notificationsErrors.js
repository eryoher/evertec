import React, { Component } from 'react'
import { Row, Col, Alert } from 'react-bootstrap';
import { isArray } from 'util';
import NotificationMessage from './notificationMessage';

export default class NotificationError extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showError: true
        }
    }

    getErrors = () => {
        const { errors, touched } = this.props;
        const result = [];
        for (const error in errors) {
            if (touched[error]) {
                result.push(errors[error])
            }
        }

        return result;
    }

    handleCloseError = () => {
        //this.setState({showError:false})
    }

    render() {
        const errors = this.getErrors()
        const showError = (errors.length && this.state.showError) ? true : false;

        return (
            <NotificationMessage
                showError={showError}
                errorMessage={errors}
                handleCloseError={this.handleCloseError}
                type={'danger'}
            />
        )
    }
}
