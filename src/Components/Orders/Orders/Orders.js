import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/orders`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div>
            <div><Navbar /></div>
            <div className="container col-md-6">
                    <ul className="d-flex list-unstyled order">
                        <li className="nav-item"><a className="nav-link">Product Name</a></li>
                        <li className="nav-item"><a className="nav-link">Product Price</a></li>
                        <li className="nav-item"><a className="nav-link">Order Date</a></li>
                    </ul>
                <hr />
                {
                    order.map(orders => <OrderDetails orders={orders} />)
                }
            </div>
        </div>
    );
};

export default Orders;