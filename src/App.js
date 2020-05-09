import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Languages from './components/pages/Languages';
import Details from './components/pages/Details';
import Courses from './components/pages/Courses';
import Levels from './components/pages/Levels';
import AboutUs from './components/pages/AboutUs';
import PageNotFound from './components/pages/PageNotFound';



function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/languages" component={Languages}/>
      <Route path="/details" component={Details}/>
      <Route path="/courses" component={Courses}/>
      <Route path="/levels" component={Levels}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route component={PageNotFound}/>
    </Switch>
    <Footer/>
    </div >
  );
}

export default App;
