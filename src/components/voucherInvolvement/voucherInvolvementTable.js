import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { salesAffectedCant } from '../../actions/';
import InvolvementTable from './involvementTable';
import InvolvementTotalResume from './involvementTotalResume';
import FiltersTable from 'components/common/filtersTable';

class VoucherInvolvementTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total_item: 0,
            total_cant: 0,
            total_importe: 0,
            ComprobAvencer: 0,
            OpcionMuestra: 0
        }
    }

    componentDidMount = () => {
        const { ComprobAvencer, OpcionMuestra } = this.state;
        const { idOperacion } = this.props;
        if (idOperacion) {
            this.props.salesAffectedCant({ ComprobAvencer, OpcionMuestra, idOperacion, page_number: 1, page_size: 10 });
        }
    }

    onChangeTable = (type, pagination) => {
        const { paramsProductsInvol, idOperacion } = this.props;
        this.props.salesAffectedCant({ ...paramsProductsInvol, idOperacion, page_number: pagination.page, page_size: pagination.sizePerPage });
    }

    handleGetCant = (e) => {
        const comprobante = (e.target.checked) ? 1 : 0;
        const { OpcionMuestra } = this.state;
        const { idOperacion } = this.props;

        this.setState({ ComprobAvencer: comprobante });
        this.props.salesAffectedCant({ ComprobAvencer: comprobante, OpcionMuestra, idOperacion, page_number: 1, page_size: 1 });
    }

    handleChangeSelect = (value) => {
        const { ComprobAvencer } = this.state;
        const { idOperacion } = this.props;

        this.setState({ OpcionMuestra: value });
        this.props.salesAffectedCant({ ComprobAvencer, OpcionMuestra: value, idOperacion, page_number: 1, page_size: 1 });
    }

    componentDidUpdate = (prevProps) => {
        const { subCalculations, cantValidate, salesconfirm, productsInvol } = this.props;

        //console.log(productsInvol, prevProps.productsInvol)

        if (prevProps.productsInvol !== productsInvol && productsInvol) {
            this.setState({ total_item: productsInvol.total_item, total_cant: productsInvol.total_cant, total_importe: productsInvol.total_importe })
        }

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
        const { t, productsInvol, readOnly } = this.props;
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
                            {productsInvol && <InvolvementTotalResume classDiv={'pl-5'} formatCol={{ span: 10, offset: 3 }} data={this.state} />}
                        </Col>
                    </>
                }
                {
                    readOnly &&
                    <Col sm={12} >
                        <InvolvementTotalResume formatCol={{ span: 4 }} data={this.state} />
                    </Col>
                }
                <Col sm={12} className={"pb-2 pl-0"}>
                    {productsInvol &&
                        <InvolvementTable
                            products={productsInvol}
                            readOnly={readOnly}
                            idOperacion={this.props.idOperacion}
                            handleChangeTable={this.onChangeTable}
                        />
                    }
                    {productsInvol && <InvolvementTotalResume classDiv={'pl-0'} formatCol={customCol} data={this.state} />}
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = ({ vouchertype, salesAffected }) => {
    const { voucherType } = vouchertype;
    const { productsInvol, cantValidate, subCalculations, salesconfirm, paramsProductsInvol } = salesAffected;
    return { voucherType, productsInvol, cantValidate, subCalculations, salesconfirm, paramsProductsInvol };
};

export default connect(mapStateToProps, { salesAffectedCant })(withTranslation()(VoucherInvolvementTable));