
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Commponents/Navbar';
import LandingPage from './Commponents/LandingPage';
import Cart from './Commponents/Cart';
import LogIn from './Commponents/LogIn';
import SignUp from './Commponents/SignUp';
import Footer from './Commponents/Footer';
import Card from './Commponents/Card';
import SearchBar from './Commponents/SearchBar';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SearchBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/card" component={Card} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
