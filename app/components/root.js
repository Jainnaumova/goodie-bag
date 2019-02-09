import React from "react";
import { HashRouter, Route } from "react-router-dom";
import CandiesList from "./CandiesList";
import Navbar from "./Navbar";

export default () => {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <main>
          <div>
            <h1>Welcome to the Goodie Bag!</h1>
            <p>What a nice home page for your goodies!</p>
          </div>
          <Route exact path="/candies" component={CandiesList} />
        </main>
      </div>
    </HashRouter>
  );
};
