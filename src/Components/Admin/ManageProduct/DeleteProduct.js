import React from 'react';

const Product = (props) => {
    const { name, price, _id } = props.product;
    const deleteProduct = () =>{
        fetch(`http://localhost:4000/deleteProduct/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            const product = document.getElementById('product')
            product.style.display = 'none';
        })
    }

    return (
        <div id="product" style={{marginTop:"30px", marginLeft: "20px", padding: "10px", display: "flex", width: "1000px", boxShadow: "1px 1px 5px gray", borderRadius:"20px"}}>
            <div style={{ marginLeft: "20px"}}>
                <h6 style={{width: "100px"}}>{name}</h6>
            </div>
            <div style={{marginLeft: "280px", }}>
                <h6 style={{width: "100px"}}>${price}</h6>
            </div>
            <button onClick={() => deleteProduct(props._id)} className="btn btn-danger" style={{marginLeft: "400px"}}>Delete</button>
        </div>
    );
};

export default Product;