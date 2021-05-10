import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { BrowserRouter, Link, Router, Switch } from 'react-router-dom';
Link 
from 'react-router-dom'
import inicio from './components/inicio';
import shop from './components/shop';
import contacto from '.components/contacto';
import blog from './components/blog';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
{/*<Navbar/>*/}
         <Switch>
          <Router path="/blog">
             <blog />
          </Router>
          <Router path="/contacto">
            <contacto />
          </Router>
          <Router path="/shop">
            <shop />
          </Router>
          <Router path="/">
            <inicio />
          </Router>
          </Switch>
{/*<Footer/>*/}
      </div>
    </BrowserRouter>
  );
}

export default App;