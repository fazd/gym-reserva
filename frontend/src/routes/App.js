import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../App.scss';
import Login from '../pages/Login/Login';
import Request from '../pages/Request/Request';
import Pattern from '../pages/Pattern/Pattern';
import Patterns from '../pages/Patterns/Patterns';

function App() {
  return (
    <div className="img-background">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reservas" component={Request} />
          <Route exact path="/patron" component={Patterns} />
          <Route exact path="/patron/nuevo" component={Pattern} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
