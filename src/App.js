import React, {Fragment, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import Search from './components/users/Search.js';
import Alert from './components/users/Alert.js';
import About from './components/pages/About'
import './App.css';
import GithubState from './context/github/GithubState.js';

const App = () => {


  const [alert, setAlerts] = useState(null);

  

  
  

  const setAlert = (msg, type) => {
    setAlerts({msg, type});

    setTimeout(() => setAlerts(null), 3000);
  }

  return (
    <GithubState>
    <Router>
    <div className="App">
    <Navbar/>
    <div className='container'>
      <Switch>
        <Route exact path = '/' render = {(props =>
        <Fragment>
        <Alert alert={alert} />
        <Search  setAlert={setAlert} />
        <Users />
        </Fragment>
        )} />
        <Route 
        exact path='/about' component={About}
        />
      </Switch>
    </div>
    </div>
    </Router>
    </GithubState>
  );
}


export default App;
