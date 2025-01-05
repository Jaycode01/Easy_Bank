import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dependability from "./components/Dependability";
import Articles from "./components/Articles";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Dependability />
      <Articles />
    </>
  );
};

export default App;
