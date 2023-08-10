import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import Weather from './weather';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    
    <Switch>
    
      <Route path="/" component={Home} exact />
      <Route path="/weather" component={Weather} />
      <Route component ={Error}/>
    </Switch>
  );
}

export default App;
