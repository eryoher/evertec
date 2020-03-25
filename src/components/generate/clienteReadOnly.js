import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import CollapseBotton from 'components/common/collapseBoton';
import { Collapse, Card } from 'reactstrap';


export default class ClienteReadOnly extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collapseHead: false,
        }
    }

    toggle() {
        this.setState(state => ({ collapseHead: !state.collapseHead }));
    }

    renderClientFields = (fields) => {
        const result = [];

        fields.valores.forEach((field, index) => {
            result.push(
                <Fragment key={index} >
                    <Col className={'pt-2'} sm={3}> <strong>{field.titulo}</strong> </Col>
                    <Col className={'pt-2'} sm={3}>{field.valor}</Col>
                </Fragment>
            )
        });

        return (
            <Row>
                {result}
            </Row>
        )
    }

    renderGenericFields = () => {
        const { cabecera } = this.props.defaultValues;
        const result = [];
        if (cabecera.atrib_comp_vta) {
            cabecera.atrib_comp_vta.forEach(field => {
                result.push(
                    <Fragment >
                        <Col className={'pt-2'} sm={3}> <strong>{field.desc_atributo}</strong> </Col>
                        <Col className={'pt-2'} sm={3}>{field.desc_valor}</Col>
                    </Fragment>
                )
            });
        }
        return (
            <Row>
                {result}
            </Row>
        )

    }

    render() {
        const { theme, t, defaultValues } = this.props;
        if (defaultValues) {
            return (
                <Fragment>
                    <Card className={`pb-3 pt-3 ${theme.containerCard}`}>
                        <Row className={"mb-3"}>
                            <Col sm={6} className={theme.title} >
                                {t('client.title')}
                            </Col>
                            <Col sm={5} className={"text-right"} >
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Col>
                        </Row>
                        {this.renderClientFields(defaultValues.cliente)}
                    </Card>
                    <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                        <Row className={"mb-3"}>
                            <Col sm={6} className={theme.title} >
                                {t('headboard.title')}
                            </Col>
                            <Col sm={5} className={"text-right"} >
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Col>
                        </Row>

                        {this.renderClientFields(defaultValues.cabecera)}
                        <Row className={'mt-2'}>
                            <Col sm={1}>
                                <CollapseBotton
                                    onPress={() => this.toggle()}
                                    status={this.state.collapseHead}
                                />
                            </Col>
                            <Col sm={11}>
                                <div className="dropdown-divider col-11 p-1" />
                            </Col>
                        </Row>

                        <Collapse isOpen={this.state.collapseHead}>
                            {this.renderGenericFields()}
                        </Collapse>
                    </Card>
                </Fragment>
            )
        } else {
            return null
        }
    }
}
