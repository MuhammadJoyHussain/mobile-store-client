import axios from 'axios';
import React, { useState } from 'react';

const Product = (props) => {
    const { name, price, _id } = props.product;
    const [services, setServices] = useState([]);

    const handleDelete = id => {
        const removedServices = services.filter(item => item._id !== id);

        axios.delete(`https://dry-lowlands-44968.herokuapp.com/delete/${id}`)
            .then(res => res.data && setServices(removedServices))
            .catch(error => console.log(error))
    }


    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>$ {price}</td>
                <td><button onClick={() => handleDelete(_id)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
        </tbody>
    );
};

export default Product;
