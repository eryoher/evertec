import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import VoucherFormInput from 'components/voucher/voucherFormInput';
import ClientFormInput from 'components/voucher/clientFormInput';
import CollapseBotton from 'components/common/collapseBoton';
import LocationFormInput from 'components/voucher/locationFormInput';
import AccountFormInput from 'components/voucher/accountFormInput';
import { Collapse, Card } from 'reactstrap'
import HeadboardFormInput from '../headboard/headboardFormInput';


export default class ClienteReadOnly extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
        }
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    getFieldValues = (config) => {
        const FIELDS = [];
        const defaultInitial = {};
        config.valores.forEach(field => {
            const keyLabel = this.getKeyLabel(field.titulo);
            FIELDS.push(
                {
                    idCampo: keyLabel,
                    visible: true
                }
            );
            defaultInitial[keyLabel] = field.valor;
        });

        return [defaultInitial, FIELDS];

    }

    getKeyLabel = (key) => {
        let resultKey = '';

        switch (key) {
            case 'R.Social':
                resultKey = 'cliente_razon_social';
                break;
            case 'Código':
                resultKey = 'Codigo';
                break;
            case 'T.Responsable':
                resultKey = 'cliente_Tipo_resp';
                break;
            case "CUIT":
                resultKey = 'cliente_identificador';
                break;
            case "Contacto":
                resultKey = 'cliente_Contacto';
                break;
            case "Sucursal":
                resultKey = 'suc_empresa';
                break;
            case "Telefono":
                resultKey = 'cliente_Telefono';
                break;
            case "Mail":
                resultKey = 'cliente_email';
                break;
            case "Domicilio":
                resultKey = 'suc_address';
                break;
            case "Localidad":
                resultKey = 'cliente_Localidad';
                break;
            case "Provincia":
                resultKey = 'cliente_Provincia';
                break;
            case "C.Postal":
                resultKey = 'cliente_Cpos';
                break;
            case "Límite Crédito":
                resultKey = 'cliente_Limcred';
                break;
            case "Pend.Crédito":
                resultKey = 'cliente_Pendcred';
                break;
            case "Saldo":
                resultKey = 'credito_Saldo';
                break;
            case "Obs.CC":
                resultKey = 'cliente_Obs_cc';
                break;
            case "Obs.Vta.":
                resultKey = 'cliente_Obs_vta';
                break;
            default:
                break;
        }

        return resultKey;
    }

    render() {
        const { theme, t, defaultValues } = this.props;

        const [defaultInitial, FIELDS] = (defaultValues) ? this.getFieldValues(defaultValues.cliente) : [null, null];
        const [initalHead, fieldHead] = (defaultValues) ? this.getFieldValues(defaultValues.cabecera) : [null, null];
        console.log(initalHead, fieldHead)

        if (defaultInitial && FIELDS) {
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
                        <VoucherFormInput
                            auoptions={[]}
                            handleLoading={false}
                            values={defaultInitial}
                            readOnly
                            fields={FIELDS}
                        />
                        <div className="dropdown-divider col-11 p-1" />
                        <ClientFormInput
                            auoptions={[]}
                            values={defaultInitial}
                            readOnly
                            fields={FIELDS}
                        />
                        <Row>
                            <Col sm={1}>
                                <CollapseBotton
                                    onPress={() => this.toggle()}
                                    status={this.state.collapse}
                                />
                            </Col>
                            <Col sm={11}>
                                <div className="dropdown-divider col-11 p-1" />
                            </Col>
                        </Row>
                        <Collapse isOpen={this.state.collapse}>
                            <LocationFormInput
                                values={defaultInitial}
                                readOnly
                                fields={FIELDS}
                            />
                            <div className="dropdown-divider col-11 p-1" />
                            <AccountFormInput
                                readOnly
                                values={defaultInitial}
                                fields={FIELDS}
                            />
                        </Collapse>
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
                        <HeadboardFormInput
                            readOnly
                            collapse
                            values={[]}
                            fields={FIELDS}
                        />
                    </Card>
                </Fragment>
            )
        } else {
            return null
        }
    }
}
