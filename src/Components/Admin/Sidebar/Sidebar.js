import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
            <ul className="list-unstyled">
                <li className="nav-item">
                    <Link to="/home" className="nav-link"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/addProduct" className="nav-link"><FontAwesomeIcon icon={faPlus} />Add Product</Link>
                </li>
                <li className="nav-item">
                    <Link to="/manage" className="nav-link"><FontAwesomeIcon icon={faTasks} />Manage Prodct</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;