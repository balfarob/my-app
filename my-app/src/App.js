import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { BrowserRouter, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
         <Switch>
          <Router path="/blog">
             <blog />
          </Router>
          <Router path="/contacto">
            <contacto />
          </Router>
          <Router path="/Shop">
            <shop />
          </Router>
          <Router path="/" exact>
            <inicio />
          </Router>
          </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;