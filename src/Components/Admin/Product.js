import React from 'react';

const Product = (props) => {
    const { name, price, _id } = props.product;
    const deleteProduct = () =>{
        fetch(`http://localhost:5000/deleteProduct/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            const product = document.getElementById('product')
            product.style.display = 'none';
        })
    }

    return (
        <div id="product" style={{margin:"50px"}}>
            <h5>Name and price of the product: {name} {price}</h5>
            <button onClick={() => deleteProduct(props._id)}>Delete</button>
        </div>
    );
};

export default Product;