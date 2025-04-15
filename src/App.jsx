import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home-page/HomePage";
import AboutPage from "./components/about-page/AboutPage";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
    </>
  );
};

export default App;
