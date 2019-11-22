import React, { Component } from 'react'
import InputText from 'components/form/inputText'
import { setInputFocus } from '../../actions';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import ModalPriceUnit from './modalPriceUnit';
import { withTranslation } from 'react-i18next';

class InputPriceUnit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    openModal = () => {
        this.setState({ showModal: true });
    }

    handleCancelModal = () => {
        this.setState({ showModal: false });
    }

    componentDidUpdate = (prevProps) => {

        if (this.props.focusInput !== prevProps.focusInput && this.props.focusInput) {
            this.props.handleFocus(this.props.focusInput);
        }
    }

    handleSubmit = (selectPrice) => {
        const { row } = this.props;
        const params = { niprod: row.niprod, idCampo: 'pcio_unit', value: selectPrice };
        const newPrice = (parseFloat(row.cantidad) * parseFloat(selectPrice)) / parseFloat(row.base_v);
        const paramsNeto = { niprod: row.niprod, idCampo: 'neto', value: newPrice.toString() }
        this.props.setData([params, paramsNeto]);
        console.log(params)
        this.handleCancelModal();
    }

    render() {
        const { optionsInput, row, fieldCant, calSubTotal, idOperacion } = this.props;
        const cantField = (fieldCant) ? fieldCant : 'cantidad';
        return (
            <Row>
                {false && <InputText
                    {...optionsInput}
                    inputFormCol={{ sm: 10 }}
                    divStyle={{ paddingRight: '5px', paddingLeft: "17px" }}
                    onBlur={(value) => {
                        const customValue = (value) ? parseFloat(value.split(',').join('.')) : 0;
                        const customCantidad = (row[cantField]) ? parseFloat(row[cantField]) : 0;
                        const newPrice = (customCantidad * customValue) / parseFloat(row.base_v);
                        const params = { niprod: row.niprod, idCampo: 'neto', value: newPrice.toString() };
                        if (calSubTotal) {
                            calSubTotal({
                                "idOperacion": idOperacion,
                                "nimovcli": row.nimovcli,
                                "nitem": row.nitem,
                                "niprod": row.niprod,
                                "cod_unid": row.cod_unid,
                                "cant_afec": row[cantField],
                                "pcio_unit": value,
                                "neto": newPrice
                            })
                        }
                        this.props.setData([params, { niprod: row.niprod, idCampo: 'pcio_unit', value: value }]);
                        this.props.setInputFocus({ input: 'neto', rowId: row.niprod })
                    }}
                    handleEnterKey={() => this.props.handleFocus(row.niprod)}
                />}
                <Col sm={1} style={{ paddingLeft: '7px', paddingTop: '30%' }} >
                    <span style={{ cursor: 'pointer' }} onClick={this.openModal} > ...</span>
                </Col>
                <ModalPriceUnit
                    {...this.props}
                    showModal={this.state.showModal}
                    handleClose={this.handleCancelModal}
                    handleSubmit={this.handleSubmit}
                />
            </Row>
        )
    }
}

const mapStateToProps = ({ product }) => {
    const { productsUpdate, focusInput } = product

    return { productsUpdate, focusInput };
};

export default connect(mapStateToProps, { setInputFocus })(withTranslation()(InputPriceUnit));
