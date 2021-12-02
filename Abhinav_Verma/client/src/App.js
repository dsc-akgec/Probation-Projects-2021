import React from "react";
import Navbar from "./components/layouts/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layouts/Footer/Footer";
import Home from "./components/Home/Home.js";
import "./App.css"
import LoginSignup from './components/User/LoginSignup';
import productDetails from "./components/Product/productDetails.js"
import Products from './components/Product/Products.js';
import Search from './components/Product/Search.js';

const App = () => {

  // const Login = <LoginSignup route="login" />;
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={productDetails} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/search" component={Search} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/products/:keyword" component={Products} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
