import React from "react";
import { HashRouter, Route } from "react-router-dom";

//footer and header
import Header from './components/Header';
import Footer from './components/Footer';

//routes
import Home from "./routes/Home";
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

import Company from './components/Information_Components/Company';
import OfficeMap from './components/Information_Components/OfficeMap';

import NoMatch from './routes/NoMatch';


function App() {
  
  return (
      <HashRouter>

        <Header />

        <Route path="/" exact={true} component={Home} />
        
        <Route path="/Product" component={Product} />
        <Route path="/Inquiry" component={Inquiry} />
        <Route path="/Customer" component={Customer} />

        <Route path="/Competence" component={Competence} />
        <Route path="/RnD" component={RnD} />
        <Route path="/OEMnODM" component={OEMnODM} />

        <Route path="/Company" component={Company} />
        <Route path="/OfficeMap" component={OfficeMap} />

        <Route path="/Global_Network" component={Global_Network} />

        <Footer />

      </HashRouter>
  );

}

export default App;