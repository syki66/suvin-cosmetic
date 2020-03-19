import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//css
import 'bootstrap/dist/css/bootstrap.min.css'; // react bootstrap css
import 'bootstrap-css-only/css/bootstrap.min.css'; // navigation bar css
import 'mdbreact/dist/css/mdb.css'; // hover effect css

import "./App.css";

//routes
import Home from "./routes/Home";
import NoMatch from './routes/NoMatch';

//footer and header
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//components
import Company from './components/Information/Company';
import OfficeMap from './components/Information/OfficeMap';

import Competence from './components/Business/Competence';
import RnD from './components/Business/RnD';
import OEMnODM from './components/Business/OEMnODM';

import Premium from './components/Product/Premium';
import Special from './components/Product/Special';
import Others from './components/Product/Others';

import Global_Network from "./components/Global_Network/Global_Network.js";

import Inquiry from "./components/Inquiry/Inquiry";

import Notice from "./components/Customer/Notice";
import Comments from "./components/Customer/Comments";


//common components
import MarkdownMainTextFrame from "./components/common/board/MarkdownMainTextFrame";

export default function App() {

  return (
    <HashRouter>

      <Header />

      <Switch>
        <Route path="/" exact={true} component={Home} />

        <Route path="/Company" component={Company} />
        <Route path="/Office Map" component={OfficeMap} />

        <Route path="/Competence" component={Competence} />
        <Route path="/R & D" component={RnD} />
        <Route path="/OEM & ODM" component={OEMnODM} />

        <Route path="/Premium" component={Premium} />
        <Route path="/Special" component={Special} />
        <Route path="/Others" component={Others} />

        <Route path="/Global Network" component={Global_Network} />

        <Route path="/Inquiry" component={Inquiry} />

        <Route path="/Notice" exact={true} component={Notice} />
        <Route path="/Comments" component={Comments} />
        
        <Route path="/:id" component={MarkdownMainTextFrame} />

        <Route path="*" component={NoMatch} />
      </Switch>

      <Footer />

    </HashRouter>
  );
}