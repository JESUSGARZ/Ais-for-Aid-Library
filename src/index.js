import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import ShoppingCart from './components/ShoppingCart';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';



 const domain =  process.env.REACT_APP_AUTH0_DOMAIN
 const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Auth0Provider 
        domain={domain} 
        clientId = {clientId}  
        redirectUri = {window.location.origin}
        >
          <BrowserRouter>
            <Routes>
              <Route path='/' element = {<NavBar/>}/>
              <Route index element = {<App/>}/>
              <Route path='profile' element= {<Profile/>}/>
              <Route path='shopping' element = {<ShoppingCart/>}/>
            </Routes>
          </BrowserRouter>
      </Auth0Provider>
  
    
);

reportWebVitals();
