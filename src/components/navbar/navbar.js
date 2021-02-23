import React, { Component } from "react";
import "../navbar/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="nav">
        <a href="#" className="nav__title">
          Sovtech ChuckNorris Assessment
        </a>
      </nav>
    );
  }
}

export default Navbar;
