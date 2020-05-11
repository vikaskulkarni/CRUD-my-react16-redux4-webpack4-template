import React from "react";
import { Route } from "react-router-dom";
import "./styles.scss";
import Header from "../components/Header";
import { ContactListCtr, ContactFormCtr } from "./CombinedContainers";
import SideNavigation from "../components/SideNavigation";

const App = () => (
  <div>
    <Header />

    <div className="container-fluid px-4">
      <div className="row ml-1">
        <div className="col-sm-2 side-box border-gradient mt-3">
          <SideNavigation />
        </div>
        <div className="col-sm-10">
          <div className="box">
            <Route path="/contacts/new" component={ContactFormCtr} />
            <Route path="/contacts/edit/:_id" component={ContactFormCtr} />
            <Route exact path="/" component={ContactListCtr} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
