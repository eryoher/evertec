import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import InputDropdown from 'components/form/inputDropdown';
import { salesAffectedImport } from '../../actions/';
import VoucherImportTable from './voucherImportTable';
import VoucherAffectingTotal from './VoucherAffectingTotal';
import FiltersTable from 'components/common/filtersTable';


class VoucherAffectingTable extends Component {

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
        this.props.salesAffectedImport({ ComprobAvencer, OpcionMuestra, idOperacion, page_size: 10, page_number: 1 });
    }

    onChangeTable = (type, pagination) => {
        const { ComprobAvencer, OpcionMuestra } = this.state;
        const { idOperacion } = this.props;
        this.props.salesAffectedImport({ ComprobAvencer, OpcionMuestra, idOperacion, page_number: pagination.page, page_size: pagination.sizePerPage });
    }


    handleGetCant = (e) => {
        const { idOperacion } = this.props;
        const comprobante = (e.target.checked) ? 1 : 0;
        const { OpcionMuestra } = this.state;
        this.setState({ ComprobAvencer: comprobante });
        this.props.salesAffectedImport({ ComprobAvencer: comprobante, OpcionMuestra, idOperacion, page_size: 10, page_number: 1 });
    }

    handleChangeSelect = (value) => {
        const { ComprobAvencer } = this.state;
        const { idOperacion } = this.props;
        this.setState({ OpcionMuestra: value });
        this.props.salesAffectedImport({ ComprobAvencer, OpcionMuestra: value, idOperacion, page_size: 10, page_number: 1 });
    }

    componentDidUpdate = (prevProps) => {
        const { subCalculations, cantValidate, salesconfirm } = this.props;
        if (prevProps.subCalculations !== subCalculations && !prevProps.subCalculations) {
            this.setState({ total_item: subCalculations.total_item, total_cant: subCalculations.total_cant, total_importe: subCalculations.total_importe })
        }

        if (prevProps.cantValidate !== cantValidate && !prevProps.cantValidate) {
            this.setState({ total_item: cantValidate.total_item, total_cant: cantValidate.total_cant, total_importe: cantValidate.total_importe })
        }

        if (prevProps.salesconfirm !== salesconfirm && !prevProps.salesconfirm && salesconfirm) {
            this.setState({ total_item: salesconfirm.total_item, total_cant: salesconfirm.total_cant, total_importe: salesconfirm.total_importe })
        }

    }

    render() {
        const { t, productsImport, readOnly } = this.props;
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
                            {productsImport && <VoucherAffectingTotal classDiv={'pl-5'} formatCol={{ span: 10, offset: 3 }} data={this.state} />}
                        </Col>
                    </>
                }
                {
                    readOnly &&
                    <Col sm={12} >
                        <VoucherAffectingTotal formatCol={{ span: 4 }} data={this.state} />
                    </Col>
                }
                <Col sm={12} className={"pb-2 pl-0 pr-0"}>
                    {productsImport &&
                        <VoucherImportTable
                            products={productsImport}
                            readOnly={readOnly}
                            idOperacion={this.props.idOperacion}
                            handleChangeTable={this.onChangeTable}

                        />
                    }
                    {productsImport && <VoucherAffectingTotal classDiv={'pl-0'} formatCol={customCol} data={this.state} />}
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = ({ vouchertype, salesAffected }) => {
    const { voucherType } = vouchertype;
    const { productsImport, cantValidate, subCalculations, salesconfirm } = salesAffected;
    return { voucherType, productsImport, cantValidate, subCalculations, salesconfirm };
};

export default connect(mapStateToProps, { salesAffectedImport })(withTranslation()(VoucherAffectingTable));