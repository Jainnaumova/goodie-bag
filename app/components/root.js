import React from "react";
import CandiesList from "./CandiesList";

export default () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <CandiesList />
      </main>
    </div>
  );
};
