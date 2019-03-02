import React, { Component } from 'react';
//port logo from './logo.svg';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import SubReddit from "./components/SubReddit";
import './App.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Some Name</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Posts</NavLink></li>
            <li><NavLink to="/contact">SubReddit</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/stuff" component={Posts}/>
            <Route path="/contact" component={SubReddit}/>
          </div>
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
