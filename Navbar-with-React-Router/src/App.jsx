// App.js
import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import {Switch} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          {/* Add more Route components for other pages */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
