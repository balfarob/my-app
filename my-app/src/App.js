import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { BrowserRouter, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
       
        <Navbar/>
         <Switch>
           <Router path="/contacto">
             Contactanos
           </Router>
         </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
