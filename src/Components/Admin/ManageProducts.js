import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

const ManageProducts = () => {
    const { register, handleSubmit } = useForm();
    const [ imageURL, setImageURL ] = useState();


    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addProduct`
        fetch (url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
    }

    const handleImageUpload = event =>{
        const imageData = new FormData();
        imageData.set('key', '35230c7f2cfd90c665d54e2a79027031');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
          setImageURL(res.data.data.display_url);
        })
        .then(err =>{
        })

    }


    return (
        <div style={{margin: "80px 500px"}}>
            <h3>Add Product</h3>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <input style={{margin:"10px"}} name="name"  placeholder="Enter Name" ref={register} />
                <br/>
                <input style={{margin:"10px"}} name="price" placeholder="Enter Price" ref={register} />
                <br/>
                <input style={{margin:"10px"}} name="exampleRequired"  type="file" onChange={handleImageUpload} />
                <br/>
                <input style={{margin:"10px"}} type="submit" />
            </form>
        </div>
    );
};

export default ManageProducts;