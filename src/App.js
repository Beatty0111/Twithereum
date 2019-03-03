import React, { Component } from 'react';
//port logo from './logo.svg';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home/Home";
import Posts from "./components/Posts";
import SubReddit from "./components/SubReddit";
import './App.scss';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container">
              <NavLink to="/" class="navbar-brand">Twithereum</NavLink>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <NavLink to="/" class="nav-link">Home</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to="/stuff" class="nav-link">Posts</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to="/contact" class="nav-link">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <main class="container">
            <Route path="/" component={Home}/>
            <Route path="/stuff" component={Posts}/>
            <Route path="/contact" component={SubReddit}/>
          </main>
        </div>
      </HashRouter>
    );
    {/*return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>
    );*/}
  }
}

export default App;
