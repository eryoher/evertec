import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MenuHeader from '../common/menuHeader';

export default class Layout extends Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <MenuHeader />
                </Col>
                <Col md={12}>
                    {this.props.children}
                </Col>

            </Row>
        )
    }
}
