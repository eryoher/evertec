import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getVoucherAccounting, accountConfirm } from '../../actions';
import AccountingTable from './AccountingTable';


class AccountingSeatTable extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.formConfirmation(this.handleConfirmation);

        if (idOperacion) {
            this.props.getVoucherAccounting({ idOperacion, page_size: 10, page_number: 1 });
            this.handleConfirmation = this.handleConfirmation.bind(this);
        }
    }


    componentDidUpdate = (prevProps) => {
        const { stateValidate, salesconfirm } = this.props;

        if (prevProps.stateValidate !== stateValidate && stateValidate) {
            this.setState({ total_item: stateValidate.total_item, total_cant: stateValidate.total_cant, total_importe: stateValidate.total_importe })
        }

        if (prevProps.salesconfirm !== salesconfirm && !prevProps.salesconfirm && salesconfirm) {
            this.setState({ total_item: salesconfirm.total_item, total_cant: salesconfirm.total_cant, total_importe: salesconfirm.total_importe })
        }

    }

    onChangeTable = (type, pagination) => {
        return true
        //this.props.getVoucherAccounting({ ComprobAvencer, OpcionMuestra, idOperacion, page_number: pagination.page, page_size: pagination.sizePerPage });
    }

    handleConfirmation = (callBackReturn) => {
        const { idOperacion } = this.props;
        this.props.accountConfirm({ idOperacion, callBackReturn });
    }

    render() {
        const { t, accountingItems, readOnly } = this.props;

        return (
            <Row style={{ marginLeft: '0px' }}>
                <Col sm={12} className={"pb-2 pl-0"}>
                    {accountingItems &&
                        <AccountingTable
                            products={accountingItems}
                            readOnly={readOnly}
                            idOperacion={this.props.idOperacion}
                            handleChangeTable={this.onChangeTable}
                        />
                    }
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = ({ vouchertype, accountingSeats }) => {
    const { voucherType } = vouchertype;
    const { accountingItems } = accountingSeats;
    return { voucherType, accountingItems };
};

export default connect(mapStateToProps, { getVoucherAccounting, accountConfirm })(withTranslation()(AccountingSeatTable));