import React, { Component } from 'react';
import '../src/styles/css/App.css';
import Login from '../src/components/Login.jsx';
import Main from '../src/components/Main.jsx';
import PageNotFound from '../src/components/PageNotFound.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pipedrive from './components/Pipedrive';
import Pipedrive01 from './components/Pipedrive01';
import Setting from './components/Setting';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/login" component={Login} />
              <Route path="/pipedrive" component={Pipedrive} />
              <Route path="/pipedrive01" component={Pipedrive01}></Route>
              <Route path="/setting" component={Setting}></Route>
              <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;


