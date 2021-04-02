import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Orders from './Components/Orders/Orders';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageProducts from './Components/Admin/ManageProducts';
import Manage from './Components/Admin/Manage';

export const UserContext = createContext();

function App() {
  const [ loggedIn, setLoggedIn ] = useState({});

  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
    <Router>
      <Header />
      <Switch>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>

        <PrivateRoute path="/manageProduct">
          <Manage />
        </PrivateRoute>

        <PrivateRoute path="/addProduct">
          <ManageProducts />
        </PrivateRoute>
               
        <PrivateRoute path="/orders/:id">
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
