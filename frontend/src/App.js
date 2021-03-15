import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Request from './pages/Request/Request';

function App() {
  return (
    <div className="img-background">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/request" component={Request} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
