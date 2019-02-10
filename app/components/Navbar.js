import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div id="navbar" className="row">
      <h1 className="nav-logo">Goodie Bag</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/candies">All Candies</Link>
      </div>
    </div>
  );
};
