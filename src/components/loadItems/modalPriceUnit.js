import React, { Component } from 'react'
import { Row, Col, Button, Modal } from 'react-bootstrap';
import DisplayAmount from 'components/common/displayAmount';

export default class ModalPriceUnit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.row.pcio_unit
        }
    }

    handleSubmit = () => {
        const { handleSubmit } = this.props;
        handleSubmit(this.state.inputValue);
    }

    render() {
        const { showModal, handleClose, t, row } = this.props;

        return (
            <Modal
                show={showModal}
                onHide={handleClose}
                aria-labelledby="ModalHeader"
            >
                <Modal.Header closeButton >
                    <Modal.Title id='ModalHeader'  >
                        {t('loadItem.modal.title')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={4} >
                            <b>{t('global.code')}</b>
                        </Col>
                        <Col sm={6} >
                            {row.cod_prod}
                        </Col>

                    </Row>
                    <Row className={"mb-3"}>
                        <Col sm={4} >
                            <b>{t('global.description')}</b>
                        </Col>
                        <Col sm={6} >
                            {row.desc_prod}
                        </Col>

                    </Row>
                    <Row >
                        <Col sm={4} className={'pt-2'}>
                            <b>{t('loadItem.table.unitPrice')}</b>
                        </Col>
                        <Col sm={6}>
                            <input style={{ padding: '0.375rem 0.375rem 0.375rem 0.75rem', height: '30px' }} type="text" value={this.state.inputValue}
                                onChange={(chk) => {
                                    this.setState({ inputValue: chk.target.value })
                                }}
                            />
                        </Col>
                    </Row>

                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        {t('form.button.close')}
                    </Button>
                    <Button disabled={(this.state.inputValue) ? false : true} onClick={this.handleSubmit} variant="primary">
                        {t('form.button.submit')}
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
