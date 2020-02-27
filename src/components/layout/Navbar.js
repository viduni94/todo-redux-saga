import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../App.css";

export class Navbar extends Component {
  render() {

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <Link className="navbar-brand" to="/">
          TODO APP
        </Link>
      </nav>
    );
  }
}

export default connect(null)(Navbar);
