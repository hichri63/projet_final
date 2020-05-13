import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Alerts from './components/Alerts';
import Contact from './components/contact'
import Description from './components/Description'
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import setAuthToken from './utils/setAuthToken';
import Logincl from './components/Logincl';
import Acceuilcl from './components/AcceuilClient';
import Acceuil1 from './components/Acceuil1';
import Commande from './components/Commade';
import Reservation from './components/reservation';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <div  className="glob-contain">
        <Alerts />
        <Switch> 
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/acceuilclient" component={Acceuilcl} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/acceuil/:name" component={Description} /> */}
          <Route exact path="/acceuil" component={Acceuil1} />
          <Route exact path="/acceuil/client" component={Logincl} />
          <Route exact path="/commandes" component={Commande} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/acceuil/transporter" component={Login} />
          <Route exact path="/contact" component={Contact} />


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
