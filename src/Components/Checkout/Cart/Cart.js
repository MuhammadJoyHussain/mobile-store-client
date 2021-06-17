import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, price } = props.checkout;

    const handleCheckout = () => {
        const orderDtails = {
            name: name,
            price: price,
            orderedTime: new Date()
        };

        fetch('https://dry-lowlands-44968.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDtails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('order successful')
                }
            })
    }

    return (
        <div className="container-fluid">
            <h1>Checkout</h1>
            <div className="checkout-table mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>$ {price}</td>
                            <td>$ {price}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <td>Total Amount</td>
                        <td></td>
                        <td>$ {price}</td>
                    </tbody>
                </table>
                <button onClick={handleCheckout} className="btn btn-outline-success">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;