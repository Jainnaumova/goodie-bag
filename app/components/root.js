import React from "react";
import { HashRouter, Route } from "react-router-dom";
import CandiesList from "./CandiesList";

export default () => {
  return (
    <HashRouter>
      <div>
        <nav>Goodie Bag</nav>
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

// <Route exact path="/" component={CandiesList} />;
