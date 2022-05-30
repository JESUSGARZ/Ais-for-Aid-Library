import React,{useEffect} from 'react'
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import {useAuth0} from '@auth0/auth0-react'
import LibraryProvider from './context';
import List from './components/List';
import ShoppingCart from './components/ShoppingCart';
import axios from 'axios';
//import data from './components/data2.json';
import data from './components/data2.json'

function App() {
  const {isAuthenticated, isLoading} = useAuth0();
  if (isLoading) return <h1>Loading ...</h1>
  return (
    <LibraryProvider>
      <div className='App'>
        <h1>Aplication</h1>
        {
          isAuthenticated ? 
          <div>
            <LogoutButton/> 
            <Profile/>
            <List/>
            <ShoppingCart/>
            <ShoppingCart/>
          </div>
          : <LoginButton/>
        }
        
      </div>

    </LibraryProvider>
  );
}

export default App;
