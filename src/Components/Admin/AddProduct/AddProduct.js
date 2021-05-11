import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import Sidebar from '../Sidebar/Sidebar';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState();


    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://dry-lowlands-44968.herokuapp.com/addProduct`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '70d681c32fc6921d44ddd09d8845db65');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res.data.data.display_url);
            })
            .then(err => {
            })

    }


    return (
        <div className="container-fluid row">
            <Sidebar />
            <div>
                <h3 style={{margin: "150px 0 0 370px"}}>Add Product</h3>
               <div className="mb-3"  style={{marginLeft: "300px", marginTop: "30px"}}>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name" ref={register} required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Product Price</label>
                        <input type="number" name="price" className="form-control" placeholder="Enter Price" ref={register} required />
                    </div>
                    <div className="mb-3">
                        <label class="form-label">Upload Image</label>
                        <input name="file" type="file" className="form-control" placeholder="Upload" onChange={handleImageUpload} required />
                    </div>
                    <div className="mb-3">
                        <input className="btn btn-outline-primary" type="submit" />
                    </div>
                </form>
               </div>
            </div>
        </div>
    );
};

export default AddProduct;