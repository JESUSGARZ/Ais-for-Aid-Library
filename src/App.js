import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import LibraryProvider from './context';
import List from './components/List';
import ShoppingCart from './components/ShoppingCart';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Loading from './components/Loading';


function App() {
  const {isAuthenticated, isLoading} = useAuth0();
  if (isLoading) return <Loading/>
  return (
    
      <LibraryProvider>
        <div className='App'>
          {
            isAuthenticated ? 
            <div>
              <NavBar/>
              <List/>
              <ShoppingCart/>
            </div>
            : <Welcome/>
          } 
        </div>
      </LibraryProvider> 
  );
}
export default App;
