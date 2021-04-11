import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../App.scss';
import Login from '../pages/Login/Login';
import Request from '../pages/Request/Request';
import Pattern from '../pages/Pattern/Pattern';
import Patterns from '../pages/Patterns/Patterns';
import PrivateRoute from "./privateRoute";

function App() {
  return (
    <div className="img-background">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/reservas" component={Request} />
          <PrivateRoute exact path="/patron" component={Patterns} />
          <PrivateRoute exact path="/patron/nuevo" component={Pattern} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
