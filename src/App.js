import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/Home/Home';
import Listing from './components/Listing/Listing';
import Details from './components/Details/Details';
import Calender from './components/Calender/Calender';
import AddForm from './components/AddFrom/AddFrom';

import PrivateRoute from './utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';  
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true} >
              <Home />
            </Route>
            
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/listing">
              <Listing/>
            </Route>
            <Route path="/addform">
              <AddForm/>
            </Route>
            <Route path="/calender">
              <Calender/>
            </Route>
            <Route path="/details/:slug">
              <Details showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
