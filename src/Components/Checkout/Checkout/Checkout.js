import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Cart from '../Cart/Cart';

const Checkout = () => {
    const [checkout, setCheckout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dry-lowlands-44968.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setCheckout(data))
    }, [])

    return (
        <div className="container">
            {
                checkout.map(checkout => <Cart checkout={checkout} />)
            }
        </div>
    );
};

export default Checkout;