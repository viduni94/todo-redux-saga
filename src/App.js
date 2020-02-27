import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import history from "./utils/history";

import "./App.css";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import List from './Pages/List/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={List} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
