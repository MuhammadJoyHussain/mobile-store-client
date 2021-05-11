import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeDetails from '../ProductDetails/ProductsDetails';

const Products = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('https://dry-lowlands-44968.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    return (
        <div className="container mt-5 mb-5">
            <div className="row mw-100">
                {
                    products.map(detail => <HomeDetails detail={detail} />)
                }
            </div>
        </div>
    );
};

export default Products;