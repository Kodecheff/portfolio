import React from 'react';
import Home from './Home';
import Works from './Works';
import About from './About';
import './app.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/works" component={Works}/>
      <Route exact path="/about" component={About}/>
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
