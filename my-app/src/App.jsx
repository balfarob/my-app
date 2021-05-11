import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Inicio from './components/inicio.jsx';
import Shop from './components/shop.jsx';
import Contacto from './components/contacto.jsx';
import Blog from './components/blog.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div className="App">
       
        <Router>
      <div>
       <Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/">
            <Inicio/>
          </Route>
          
        </Switch>
       <Footer/>
      </div>
    </Router>
       
        
    
      </div>
  );
}

export default App;
