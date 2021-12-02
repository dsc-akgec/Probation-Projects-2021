import React from "react";
import NavBar from "./NavBar";
import "./HomePage.css";
import Display from "./Display";
import Features from "./Features";
import Categories from "./Categories";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
function HomePage() {
  const history = useHistory();
  history.push("/homepage");
  return (
    <>
      <NavBar />
      <Display />
      <Features />
      <Categories />
      <Footer />
    </>
  );
}

export default HomePage;
