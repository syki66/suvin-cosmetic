import React from "react";
import { HashRouter, Route } from "react-router-dom";

//footer and header
import Header from './components/Header';
import Footer from './components/Footer';

//routes
import Home from "./routes/Home";
import Information from "./routes/Information";
import Business from "./routes/Business";
import Product from "./routes/Product";
import Global_Network from "./routes/Global_Network";
import Inquiry from "./routes/Inquiry";
import Customer from "./routes/Customer";

//css
import 'bootstrap/dist/css/bootstrap.min.css'; // react bootstrap css
//import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; // navigation bar css
import 'mdbreact/dist/css/mdb.css'; // hover effect css

import "./App.css";


import Competence from './components/Business_Components/Competence';
import RnD from './components/Business_Components/RnD';
import OEMnODM from './components/Business_Components/OEMnODM';


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

        <Route path="/Competence" component={Competence} />
        <Route path="/RnD" component={RnD} />
        <Route path="/OEMnODM" component={OEMnODM} />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;