import React, { Component, Fragment } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Card } from 'reactstrap';
import OrdersForm from 'components/orders/ordersForm';
import OrderDetail from 'components/orders/orderDetail';
import { getOrder, clearOrder } from '../../actions';
import { connect } from 'react-redux';
import Layout from 'components/layout/layout';

type Props = {
  theme: Object
};

class Login extends Component<Props> {

  componentDidMount = () => {
    const { match } = this.props;    
    if (match.params.id) {
      const { id } = match.params;
      this.props.getOrder(id)
    }else{
      this.props.clearOrder()
    }
  }
  render() {
    const { theme, order, orderOne } = this.props;
    return (
      <Layout>
        <div className={"container"} >
          <Col sm={12} className={`mt-5 ${theme.containerLogin}`}>
            {!order &&
              <Card className={'pt-4 pb-2'} style={{ margin: '0px auto' }}>
                <OrdersForm
                  initValue={orderOne}
                />
              </Card>}
            {order && <OrderDetail
              order={order}
            />}
          </Col>
        </div>
      </Layout>
    )
  }
}


const mapStateToProps = ({ orders }) => {
  const { order, orderOne } = orders;
  return { order, orderOne };
};

export default connect(mapStateToProps, { getOrder, clearOrder })(Login);