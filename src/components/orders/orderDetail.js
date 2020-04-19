import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class OrderDetail extends Component {
    render() {
        const { order } = this.props;
        const bgState = (order.status === 'REJECTED') ? 'bg-danger' : (order.status === 'PAYED') ? 'bg-success' : '';

        return (
            <table className={'table table-striped'} >
                <thead className={'thead-dark'}>
                    <tr>
                        <th colSpan={2} className={'text-center'}> Detalles de la Compra </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> Cliente </th>
                        <td>{`${order.customer_name}  ${order.customer_lastname}`}</td>
                    </tr>
                    <tr>
                        <th scope="row"> Cedula </th>
                        <td>{`${order.customer_cedula}`}</td>
                    </tr>
                    <tr>
                        <th scope="row"> Correo </th>
                        <td>{order.customer_email}</td>
                    </tr>
                    <tr>
                        <th scope="row"> Telefono </th>
                        <td>{order.customer_mobile}</td>
                    </tr>
                    <tr>
                        <th scope="row">Producto</th>
                        <td>{(order.products) ? order.products.name : null}</td>
                    </tr>
                    <tr>
                        <th scope="row"> Precio </th>
                        <td>{(order.products) ? order.products.price : null}</td>
                    </tr>
                    <tr>
                        <th scope="row"> Estado </th>
                        <td className={bgState} >{order.status}</td>
                    </tr>
                    <tr>
                        {order.processUrl && order.status === 'REJECTED' &&
                            <td className={'text-center'} colSpan={2}>
                                <Link to={{ pathname: `order/${order.id}` }} replace >
                                    <Button type={"button"}>
                                        {'Reintentar'}
                                    </Button>
                                </Link>
                            </td>
                        }

                        {order.processUrl && order.status === 'CREATED' &&
                            <td className={'text-center'} colSpan={2}>
                                <a href={order.processUrl}>
                                    <Button type={"button"}>
                                        {'Ir al Pago'}
                                    </Button>
                                </a>
                            </td>
                        }
                    </tr>
                </tbody>
            </table>
        )
    }
}
