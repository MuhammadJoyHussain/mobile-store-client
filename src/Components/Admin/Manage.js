import React, { useEffect, useState } from 'react';
import Product from './Product';

const Manage = () => {
    const [ products, setProducts ] = useState([])
    const { name, price } = products;

    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {
                products.map(product => <Product product={product} />)
            }
        </div>
    );
};

export default Manage;