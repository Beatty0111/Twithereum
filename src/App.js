import React, { Component } from 'react';
//port logo from './logo.svg';
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import './App.scss';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
              <NavLink to="/" className="navbar-brand">Twithereum</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <main className="container">
            <Switch>
              <Route exact path="/" component={Posts}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default App;
