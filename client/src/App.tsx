import React from 'react';
import './App.css';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from './pages/Home';
import {Provider} from 'react-redux';
import store from './store/store';
import Adduser from './pages/Adduser';

const Routing =() =>
{
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route exact path="/adduser" >
          <Adduser/>
        </Route>
      </Switch>
    </React.Fragment>
  )
}

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
