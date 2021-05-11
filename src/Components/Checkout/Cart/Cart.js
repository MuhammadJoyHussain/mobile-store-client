import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, price } = props.checkout;

    const handleCheckout = () => {
        const orderDtails = {
            name: name,
            price:price,
            orderedTime: new Date()
        };

        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDtails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('order successful')
            }
        })
    }

    return (
        <div className="row">
            <div className="checkout">
                <h1>Checkout</h1>
                <div className="checkout-box">
                    <div className="d-flex ml-3 description">
                        <p>Description</p>
                        <p style={{ marginLeft: "75vh" }}>Quantity</p>
                        <p style={{ marginLeft: "38vh" }}>Price</p>
                    </div>
                    <hr />
                    <div className="d-flex ml-3">
                        <p style={{ width: "150px" }}>{name}</p>
                        <p style={{ marginLeft: "67vh" }}>1</p>
                        <p style={{ marginLeft: "42vh", width: "50px" }}>{price}</p>
                    </div>
                    <hr />
                    <div className="d-flex description ml-3">
                        <p>total</p>
                        <p style={{marginLeft: "128vh"}}>{price}</p>
                    </div>
                    <button onClick={handleCheckout} className="btn btn-outline-success">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;