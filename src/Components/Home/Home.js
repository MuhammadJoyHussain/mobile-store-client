import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeDetails from './HomeDetails';
import * as ReactBootstrap from 'react-bootstrap'

const Home = () => {
    const [ products, setProducts ] = useState([])
    const [ louding, setLouding ] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
        setLouding(true)
    }, [])
    

    return (
        <>
        <div className="row">
            {
                products.map(detail => <HomeDetails detail={detail} />)
            }
        </div>
        <div>
            {louding ? <ReactBootstrap.Spinner animation="border" /> : products}
        </div>
        </>
    );
};

export default Home;