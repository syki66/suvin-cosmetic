import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

import { HashRouter, Route } from "react-router-dom";


import Home from "./routes/Home";
import Information from "./routes/Information";
import Business from "./routes/Business";
import Product from "./routes/Product";
import Global_Network from "./routes/Global_Network";
import Inquiry from "./routes/Inquiry";
import Customer from "./routes/Customer";


function App() {
  return (
    <div>
      <Header />
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Information" component={Information} />
        <Route path="/Business" component={Business} />
        <Route path="/Product" component={Product} />
        <Route path="/Global_Network" component={Global_Network} />
        <Route path="/Inquiry" component={Inquiry} />
        <Route path="/Customer" component={Customer} />

      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;