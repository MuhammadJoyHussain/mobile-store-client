import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {



    return (
        <div className="sidebar">
            <ul className="list-unstyled">
                <li className="nav-item">
                    <Link to="/home" className="nav-link text-white"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/addProduct" className="nav-link text-white"><FontAwesomeIcon icon={faPlus} /> Add Product</Link>
                </li>
                <li className="nav-item">
                    <Link to="/manage" className="nav-link text-white"><FontAwesomeIcon icon={faTasks} /> Manage Prodct</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;