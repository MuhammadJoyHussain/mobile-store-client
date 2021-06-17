import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import OrderDetails from '../OrderDetails/OrderDetails';
import './/Order.css'

const Orders = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://dry-lowlands-44968.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div>
            <Navbar />
            <div className="order-table">
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Ordred Date</th>
                        </tr>
                    </thead>
                    {
                        order.map(orders => <OrderDetails orders={orders} />)
                    }
                </table>
            </div>
        </div>
    );
};

export default Orders;