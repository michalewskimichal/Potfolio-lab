import React from "react";
import ReactDOM from "react-dom";
import '../src/scss/main.scss';
import { HashRouter, Route, Switch, } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
      <HashRouter>
        <>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/logowanie' component={Login} />
            <Route exact path='/rejestrowanie' component={Register} />
          </Switch>
        </>
      </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
