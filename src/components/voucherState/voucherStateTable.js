import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import InputDropdown from 'components/form/inputDropdown';
import { salesAffectedState } from '../../actions';
import StateTable from './stateTable';
import VoucherAffectingTotal from '../voucherAffecting/VoucherAffectingTotal';
import FiltersTable from 'components/common/filtersTable';


class VoucherStateTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total_item: 0,
            total_cant: 0,
            total_importe: 0,
            ComprobAvencer: 0,
            OpcionMuestra: "0"
        }
    }

    componentDidMount = () => {
        const { ComprobAvencer, OpcionMuestra } = this.state;
        const { idOperacion } = this.props;
        this.props.salesAffectedState({ ComprobAvencer, OpcionMuestra, idOperacion, page_size: 10, page_number: 1 });
    }

    componentDidUpdate = (prevProps) => {
        const { stateValidate, salesconfirm, productsState } = this.props;

        if (prevProps.productsState !== productsState && productsState) {
            this.setState({ total_item: productsState.total_item, total_cant: productsState.total_cant, total_importe: productsState.total_importe })
        }

        if (prevProps.stateValidate !== stateValidate && stateValidate) {
            this.setState({ total_item: stateValidate.total_item, total_cant: stateValidate.total_cant, total_importe: stateValidate.total_importe })
        }

        if (prevProps.salesconfirm !== salesconfirm && !prevProps.salesconfirm && salesconfirm) {
            this.setState({ total_item: salesconfirm.total_item, total_cant: salesconfirm.total_cant, total_importe: salesconfirm.total_importe })
        }
    }

    onChangeTable = (type, pagination) => {
        const { ComprobAvencer, OpcionMuestra } = this.state;
        const { idOperacion } = this.props;
        this.props.salesAffectedState({ ComprobAvencer, OpcionMuestra, idOperacion, page_number: pagination.page, page_size: pagination.sizePerPage });
    }


    handleGetCant = (e) => {
        const { idOperacion } = this.props;
        const comprobante = (e.target.checked) ? 1 : 0;
        const { OpcionMuestra } = this.state;
        this.setState({ ComprobAvencer: comprobante });
        this.props.salesAffectedState({ ComprobAvencer: comprobante, OpcionMuestra, idOperacion });
    }

    handleChangeSelect = (value) => {
        const { ComprobAvencer } = this.state;
        const { idOperacion } = this.props;
        this.setState({ OpcionMuestra: value });
        this.props.salesAffectedState({ ComprobAvencer, OpcionMuestra: value, idOperacion });
    }

    render() {
        const { t, productsState, readOnly } = this.props;
        const inputConfig = [{ idCampo: 'checkComprobAvencer', label: t('voucherInvolvement.form.sample'), visible: 1, requerido: 0, editable: 1 }]
        const customCol = (readOnly) ? 4 : { span: 5, offset: 7 };

        return (
            <Row style={{ marginLeft: '0px' }}>
                {!readOnly &&
                    <>
                        <FiltersTable
                            handleGetCant={this.handleGetCant}
                            t={t}
                            inputConfig={inputConfig}
                            handleChangeSelect={(value) => this.handleChangeSelect(value)}
                        />
                        <Col sm={3}>
                            {productsState && <VoucherAffectingTotal classDiv={'pl-5'} formatCol={{ span: 10, offset: 3 }} data={this.state} />}
                        </Col>
                    </>
                }
                {
                    readOnly &&
                    <Col sm={12} >
                        <VoucherAffectingTotal formatCol={{ span: 4 }} data={this.state} />
                    </Col>
                }
                <Col sm={12} className={"pb-2 pl-0"}>
                    {productsState &&
                        <StateTable
                            products={productsState}
                            readOnly={readOnly}
                            idOperacion={this.props.idOperacion}
                            handleChangeTable={this.onChangeTable}

                        />
                    }
                    {productsState && <VoucherAffectingTotal classDiv={'pl-0'} formatCol={customCol} data={this.state} />}
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = ({ vouchertype, salesAffected }) => {
    const { voucherType } = vouchertype;
    const { productsState, stateValidate, subCalculations, salesconfirm } = salesAffected;
    return { voucherType, productsState, stateValidate, subCalculations, salesconfirm };
};

export default connect(mapStateToProps, { salesAffectedState })(withTranslation()(VoucherStateTable));