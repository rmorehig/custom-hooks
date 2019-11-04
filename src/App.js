import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import useModalPage from "./pages/useModalPage/";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <section className="section">
          <Switch>
            <Route path="/usemodal" component={useModalPage} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
