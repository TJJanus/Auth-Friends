import React from 'react';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/login'> Login </Link>
        </li>
        <li>
          <Link to='/friendsList'> Friends List </Link>
        </li>
      </ul>
      <Switch>
      <PrivateRoute exact path='/friendsList' component={FriendsList} />
      <Route path='/login' component={Login} />
      <Route component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
