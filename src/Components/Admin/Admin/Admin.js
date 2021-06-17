import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const adminData = {
            email: data.email
        };
        const url = `https://dry-lowlands-44968.herokuapp.com/isAdmin`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => res.json())
    }

    return (
        <div>
            <Sidebar />
            <div className="text-center" style={{ marginLeft: "10%" }}>
                    <h1>Welcome to the admin panel</h1>
                    <h4>Add an Admin </h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Enter an Email</label>
                            <input style={{width: "500px", marginLeft: "29%"}} type="text" name="email" className="form-control" ref={register} required />
                            <div className="mt-3">
                                <input className="btn btn-outline-primary" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Admin;