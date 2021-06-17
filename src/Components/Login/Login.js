import React, { useContext, useState } from 'react';
import { initializeLoginFramework } from "./LoginManager";
import { UserContext } from "../../App";
import { useHistory, useLocation } from 'react-router';
import { handleGoogleSignIn } from './LoginManager';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [password, setPassword] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    initializeLoginFramework();
    const [loggedIn, setLoggedIn] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedIn(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {

            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);

            if (password && e.target.value === password) {
                isFieldValid = isPasswordValid && passwordHasNumber;
            } else if (password && e.target.value !== password) {
                alert('wrong confirm password')
            }

            if (!password) {
                setPassword(e.target.value);
            }

        }
        if (e.target.name === 'name') {
            isFieldValid = true;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);

        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.name && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }
    return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="form-container">
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Rmember Me</label>
                            </div>
                            <button className="btn btn-success btn-block" >Submit</button>
                        </form>
                        <h6 style={{ marginTop: "10px", marginLeft: "45%" }}>Or</h6> 
                        <button className="btn btn-block text-white" style={{ backgroundColor: "#DB4437" }} onClick={googleSignIn}><FontAwesomeIcon style={{ fontSize: "20px" }} icon={faGoogle} /> Sign In With Google</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                </div>
            </div>
    );
};

export default Login;

{/*  */ }