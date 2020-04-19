import React, { Component, Fragment } from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import OrderDetail from 'components/orders/orderDetail';

import { connect } from 'react-redux';
import Layout from 'components/layout/layout';
import { getOrders } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

class Orders extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showDetail: false,
      selectedOrder: false
    }
  }

  componentDidMount = () => {
    this.props.getOrders();
  }

  renderOrders = () => {
    const { listOrders } = this.props;
    const result = [];
    listOrders.forEach(order => {
      result.push(
        <tr key={order.id} >
          <td>
            {`${order.customer_name}  ${order.customer_lastname}`}
          </td>
          <td>
            {order.customer_cedula}
          </td>
          <td>
            {order.customer_email}
          </td>
          <td>
            {order.customer_mobile}
          </td>
          <td>
            {order.status}
          </td>
          <td>
            <FontAwesomeIcon icon={faEye} style={{ cursor: 'pointer' }} onClick={() => this.setState({ showDetail: true, selectedOrder: order })} />
          </td>
        </tr>
      )
    });

    return result;
  }


  render() {
    const { theme, listOrders } = this.props;
    const { showDetail, selectedOrder } = this.state;

    return (
      <Layout>
        {listOrders &&
          <Container className={'mt-5'} >
            <Row>
              <Col md={8}>
                <table className={'table table-striped'} >
                  <thead className={'thead-dark'}>
                    <tr>
                      <th> Cliente </th>
                      <th> Cedula </th>
                      <th> Correo </th>
                      <th> Telefono </th>
                      <th> Estado </th>
                      <th> Detalle </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderOrders()}
                  </tbody>
                </table>
              </Col>
              <Col md={4} >
                {showDetail &&
                  <OrderDetail order={selectedOrder} />
                }
              </Col>
            </Row>
          </Container>
        }
      </Layout>
    )
  }
}


const mapStateToProps = ({ orders }) => {
  const { listOrders } = orders
  return { listOrders };
};

export default connect(mapStateToProps, { getOrders })(Orders);