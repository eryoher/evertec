import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

export default class PaymentDetail extends Component {
    render() {
        const { order, payment } = this.props.dataPay;        
        const bgState = (order.status === 'REJECTED') ? 'bg-danger' : 'bg-success';
        return (
            <Container className={"mt-5"}>
                <table className={'table table-striped'} >
                    <thead className={'thead-dark'}>
                        <tr>
                            <th colSpan={2} className={'text-center'}> Confirmacion de la Compra </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"> Cliente </th>
                            <td>{`${order.customer_name}  ${order.customer_lastname}`}</td>
                        </tr>                        
                        <tr>
                            <th scope="row"> Correo </th>
                            <td>{order.customer_email}</td>
                        </tr>                        
                        <tr>
                            <th scope="row">Producto</th>
                            <td>{ payment.request.payment.description }</td>
                        </tr>
                        <tr>
                            <th scope="row"> Precio </th>
                            <td>{ payment.request.payment.amount.total }</td>
                        </tr>
                        <tr>
                            <th scope="row"> Estado </th>
                            <td className={bgState} >{order.status}</td>
                        </tr>
                        <tr>
                            <th scope="row"> Descripción del estado </th>
                            <td>{payment.status.message}</td>
                        </tr>
                        <tr>
                            <th scope="row"> Autorizacion </th>
                            <td>{ (payment.payment) ? payment.payment[0].authorization:null}</td>
                        </tr>
                        <tr>
                            <th scope="row"> Recibo </th>
                            <td>{ (payment.payment) ?  payment.payment[0].receipt: null}</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        )
    }
}
