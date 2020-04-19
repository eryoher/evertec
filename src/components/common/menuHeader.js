import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class MenuHeader extends Component {
    render() {
        return (
            <Container>
                <Row className={''} >
                    <Col sm={{ span: 1, offset: 8 }} ></Col>

                    <Col sm={'auto'} >
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                            Inicio
                    </Link>
                    </Col>
                    <Col sm={'auto'}>
                        <Link to={'/orders'} style={{ textDecoration: 'none', color: 'black' }}>
                            Mis Ordenes
                    </Link>
                    </Col>
                </Row>

            </Container>

        )
    }
}
