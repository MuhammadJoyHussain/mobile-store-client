import { Link } from 'react-router-dom';

const Admin = () => {
    

    return (
        <div>
            <Link to="/manageProduct">Manage Prodct</Link>
            <br/>
            <Link to="/addProduct">Add Product</Link>
        </div>
    );
};

export default Admin;