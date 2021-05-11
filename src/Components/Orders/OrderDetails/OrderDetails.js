import React from 'react';
import './OrderDetails.css'

const OrderDetails = (props) => {
    const { name, price, orderedTime } = props.orders;

    return (
        <div>
            <ul className="d-flex list-unstyled ">
                <li className="nav-item ml-3"><a className="nav-link">{name}</a></li>
                <li className="nav-item ml-5"><a className="nav-link">{price}</a></li>
                <li className="nav-item ml-5"><a className="nav-link">{orderedTime}</a></li>
            </ul>
        </div>
    );
};

export default OrderDetails;