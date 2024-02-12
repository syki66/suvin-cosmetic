import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//css
import 'bootstrap/dist/css/bootstrap.min.css'; // react bootstrap css
import 'bootstrap-css-only/css/bootstrap.min.css'; // navigation bar css
import 'mdbreact/dist/css/mdb.css'; // hover effect css

import './App.css';

//Sign in
import Login from './components/Login/Login.js';
import Register from './components/Login/Register.js';

//routes
import Home from './routes/Home';
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
import PremiumAdd from './components/Product/PremiumAdd.js';
import PremiumEdit from './components/Product/PremiumEdit.js';
import PremiumView from './components/Product/PremiumView.js';

import Special from './components/Product/Special';
import SpecialAdd from './components/Product/SpecialAdd.js';
import SpecialEdit from './components/Product/SpecialEdit.js';
import SpecialView from './components/Product/SpecialView.js';

import Others from './components/Product/Others';
import OthersAdd from './components/Product/OthersAdd.js';
import OthersEdit from './components/Product/OthersEdit.js';
import OthersView from './components/Product/OthersView.js';

import Global_Network from './components/Global_Network/Global_Network.js';

import Inquiry from './components/Inquiry/Inquiry';
import InquiryAdd from './components/Inquiry/InquiryAdd.js';
import InquiryView from './components/Inquiry/InquiryView.js';
import InquiryEdit from './components/Inquiry/InquiryEdit.js';

import Notice from './components/Customer/Notice';
import NoticeAdd from './components/Customer/NoticeAdd.js';
import NoticeView from './components/Customer/NoticeView.js';
import NoticeEdit from './components/Customer/NoticeEdit.js';
import Comments from './components/Customer/Comments';
import CommentsAdd from './components/Customer/CommentsAdd.js';
import CommentsView from './components/Customer/CommentsView.js';
import CommentsEdit from './components/Customer/CommentsEdit.js';

//common components
import MarkdownMainTextFrame from './components/common/board/MarkdownMainTextFrame';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact={true} component={Home} />

        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />

        <Route path="/Company" component={Company} />
        <Route path="/Office Map" component={OfficeMap} />

        <Route path="/Competence" component={Competence} />
        <Route path="/R & D" component={RnD} />
        <Route path="/OEM & ODM" component={OEMnODM} />

        <Route path="/premium/page/:id" component={Premium} />
        <Route path="/premium/new" component={PremiumAdd} />
        <Route path="/premium/edit/:id" component={PremiumEdit} />
        <Route path="/premium/:id" component={PremiumView} />
        <Route path="/premium">
          <Redirect to="/premium/page/1" />
        </Route>

        <Route path="/special/page/:id" component={Special} />
        <Route path="/special/new" component={SpecialAdd} />
        <Route path="/special/edit/:id" component={SpecialEdit} />
        <Route path="/special/:id" component={SpecialView} />
        <Route path="/special">
          <Redirect to="/special/page/1" />
        </Route>

        <Route path="/others/page/:id" component={Others} />
        <Route path="/others/new" component={OthersAdd} />
        <Route path="/others/edit/:id" component={OthersEdit} />
        <Route path="/others/:id" component={OthersView} />
        <Route path="/others">
          <Redirect to="/others/page/1" />
        </Route>

        <Route path="/Global Network" component={Global_Network} />

        <Route path="/inquiry/page/:id" component={Inquiry} />
        <Route path="/inquiry/new" component={InquiryAdd} />
        <Route path="/inquiry/edit/:id" component={InquiryEdit} />
        <Route path="/inquiry/:id" component={InquiryView} />
        <Route path="/inquiry">
          <Redirect to="/inquiry/page/1" />
        </Route>

        <Route path="/notice/page/:id" component={Notice} />
        <Route path="/notice/new" component={NoticeAdd} />
        <Route path="/notice/edit/:id" component={NoticeEdit} />
        <Route path="/notice/:id" component={NoticeView} />
        <Route path="/notice">
          <Redirect to="/notice/page/1" />
        </Route>

        <Route path="/comments/page/:id" component={Comments} />
        <Route path="/comments/new" component={CommentsAdd} />
        <Route path="/comments/edit/:id" component={CommentsEdit} />
        <Route path="/comments/:id" component={CommentsView} />
        <Route path="/comments">
          <Redirect to="/comments/page/1" />
        </Route>

        <Route path="/:id" component={MarkdownMainTextFrame} />

        <Route path="*" component={NoMatch} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
