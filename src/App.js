import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import useModalPage from "./pages/useModalPage/";
import useModalWithDataPage from "./pages/useModalWithDataPage/";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <section className="section">
          <Switch>
            <Route path="/usemodal" component={useModalPage} />
            <Route path="/usemodalwithdata" component={useModalWithDataPage} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
