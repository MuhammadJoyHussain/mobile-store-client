import React from 'react';

const OrderDetails = (props) => {
    const { name, price, orderedTime } = props.orders;

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>$ {price}</td>
                <td>{(new Date(orderedTime).toDateString('MM/dd/yyyy'))}</td>
            </tr>
        </tbody>
    );
};

export default OrderDetails;