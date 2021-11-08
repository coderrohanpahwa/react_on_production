
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Routing = () => {
  return(
    <Router>
      <Header/>
      {/* <Footer /> */}
    </Router>
  )
}

export default Routing;