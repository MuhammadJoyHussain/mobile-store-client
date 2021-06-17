import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DeleteProduct from './DeleteProduct';
import './Manage.css'

const Manage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dry-lowlands-44968.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <Sidebar />
            <div className="wrapper">
                <table className="table table-sm border-right border-left border-bottom">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th></th>
                        </tr>
                    </thead>
                        {
                            products.map(product => <DeleteProduct product={product} />)
                        }
                </table>
            </div>
        </>
    );
};

export default Manage;

