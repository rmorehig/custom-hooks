import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import useModalPage from './pages/useModalPage/';
import useModalWithDataPage from './pages/useModalWithDataPage/';
import useSubmitPage from './pages/useSubmitPage';
import useFetchPage from './pages/useFetchPage';
import useApiPage from './pages/useApiPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <section className="section">
          <Switch>
            <Route path="/usemodal" component={useModalPage} />
            <Route path="/usemodalwithdata" component={useModalWithDataPage} />
            <Route path="/usesubmit" component={useSubmitPage} />
            <Route path="/usefetch" component={useFetchPage} />
            <Route path="/useapi" component={useApiPage} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
