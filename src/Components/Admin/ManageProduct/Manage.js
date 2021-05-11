import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DeleteProduct from './DeleteProduct';

const Manage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dry-lowlands-44968.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container-fluid row">
            <Sidebar />
            <div>
                <div className="d-flex">
                    <div style={{ margin: "30px 0 0 40px" }}>
                        <h5>Product Name</h5>
                    </div>
                    <div style={{ margin: "30px 0 0 220px" }}>
                        <h5>Product Price</h5>
                    </div>
                </div>
                <hr style={{marginLeft:"25px", width: "150vh"}} />
                {
                    products.map(product => <DeleteProduct product={product} />)
                }
            </div>
        </div>
    );
};

export default Manage;