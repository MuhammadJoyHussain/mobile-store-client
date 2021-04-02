import React, { useContext } from 'react';
import './Header.css'
import logo from './Logo/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggeIn, setLoggedIn] = useContext(UserContext)
    const { isSignedIn, name } = loggeIn;

    return (
        <div>
            <nav className="nav">
                <img src={logo} alt=""/>
                <h4>Apple Phone Store</h4>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/deals">Deals</Link></li>
                    {
                        isSignedIn && <Link to="/login"><button>{name}</button></Link>
                    }
                    {
                        !isSignedIn && <Link to="/login"><button>Login</button></Link>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;