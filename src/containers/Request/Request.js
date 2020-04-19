import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Layout from 'components/layout/layout';
import { getPaymentByCode } from '../../actions';
import PaymentDetail from '../../components/payment/paymentDetail';

class Requests extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showDetail: false,
      selectedOrder: false
    }
  }

  componentDidMount = () => {
    const { match } = this.props;
    if (match.params.code) {
      const { code } = match.params;
      this.props.getPaymentByCode(code);
    }
  }


  render() {
    const { resposePayment } = this.props;    
    return (
      <Layout>
        {resposePayment &&
          <PaymentDetail
            dataPay={resposePayment}
          />}
      </Layout>
    )
  }
}

const mapStateToProps = ({ orders }) => {
  const { resposePayment } = orders
  return { resposePayment };
};

export default connect(mapStateToProps, { getPaymentByCode })(Requests);