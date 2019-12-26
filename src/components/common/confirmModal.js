import React, { Component, Fragment } from 'react'
import InputButton from 'components/form/inputButton'
import { Modal, Button } from 'react-bootstrap'

export default class ConfirmModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    handleOpenModal = () => {
        this.setState({ showModal: true })
    }

    handleCloseModal = () => {
        this.setState({ showModal: false })
    }

    handleSubmit = () => {
        const { onSubmitModal } = this.props;
        onSubmitModal();
        this.handleCloseModal();
    }

    render() {
        const { labelButton, labelCancelButtonModal, labelSubmitButton, modalTitle, messageBody, buttonStyle } = this.props;
        const { showModal } = this.state;
        const closeButton = (labelCancelButtonModal) ? labelCancelButtonModal : 'Cancelar';
        const submitButton = (labelSubmitButton) ? labelSubmitButton : 'Aceptar';

        return (
            <Fragment>
                <InputButton
                    valueButton={labelButton}
                    type="primary"
                    onClick={this.handleOpenModal}
                    customStyle={(buttonStyle) ? buttonStyle : {}}
                />
                <Modal
                    show={showModal}
                    onHide={this.handleCloseModal}
                    aria-labelledby={"ModalHeader"}
                >
                    <Modal.Header closeButton>
                        {modalTitle &&
                            <Modal.Title id={'ModalHeader'}>
                                {modalTitle}
                            </Modal.Title>
                        }
                    </Modal.Header>
                    <Modal.Body>
                        {messageBody}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            {closeButton}
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            {submitButton}
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        )
    }
}
