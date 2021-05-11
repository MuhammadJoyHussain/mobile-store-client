import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [loggeIn] = useContext(UserContext)
    const { isSignedIn, name } = loggeIn;

    return (
        <nav class="navbar navbar-expand-lg" id="navbar">
            <div class="container-fluid">
                <Link class="navbar-brand text-white" to="/home">Mobile Shop & Store</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-lg-auto">
                        <li class="nav-item">
                            <Link to="/home" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/orders" class="nav-link">Orders</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/admin/addProduct" class="nav-link">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/deals" class="nav-link">Deals</Link>
                        </li>
                        <li class="nav-item">
                            {
                                isSignedIn && <Link to="/login" class="nav-link btn btn-outline-success">{name}</Link>
                            }
                            {
                                !isSignedIn && <Link to="/login" class="nav-link btn btn-outline-success" style={{width: "70px", padding: "8px"}}>Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;