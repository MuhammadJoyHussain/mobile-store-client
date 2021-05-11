import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import { createContext, useEffect, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import Manage from './Components/Admin/ManageProduct/Manage';
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import Checkout from './Components/Checkout/Checkout/Checkout';
import Orders from './Components/Orders/Orders/Orders';

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  const [louding, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Switch>

          <Route path="/home">
            {louding ? <LoadingSpinner /> : <Home />}
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/admin/addProduct">
            <AddProduct />
          </PrivateRoute>

          <PrivateRoute path="/manage">
            <Manage />
          </PrivateRoute>

          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>

          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
