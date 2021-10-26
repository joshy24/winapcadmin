import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import Candidates from "./Pages/Candidates";
import Dashboard from "./Pages/Dashboard";
import Donations from "./Pages/Donations";
import Error404 from "./Pages/Error404";
import Lga from "./Pages/Lga";
import Positions from "./Pages/Positions";
import States from "./Pages/States";

const App = () => {
  return (
    <Router>
      <div id="wrapper">
        {/* saidebar goes here  */}
        <SideBar />

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            {/* top bar goes here  */}
            <TopBar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/states" component={States} />
              <Route exact path="/lga" component={Lga} />
              <Route exact path="/positions" component={Positions} />
              <Route exact path="/candidates" component={Candidates} />
              <Route exact path="/donations" component={Donations} />
              <Route path="*" component={Error404} />
            </Switch>
          </div>
          {/* footer goes here  */}
        </div>
      </div>
    </Router>
  );
};

export default App;
