import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Man from './Man';
import Cart from './Cart';
import Header from './Header';
import Women from './Women';
import { CartProvider } from 'react-use-cart';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Explore from './Explore';

function App() {
  return (
      <div>
        
        <BrowserRouter>
          <div style={{marginTop:'1.5em'}}>
            <Link style={{marginLeft:'5em', textDecoration:'inherit', color:'inherit'}} to='/'>Ace Store</Link>
            <Link style={{marginLeft:'35em', textDecoration:'inherit', color:'inherit'}} to='/'>Home</Link>
            <Link style={{marginLeft:'3em', textDecoration:'inherit', color:'inherit'}} to='/Man'>Man</Link>
            <Link style={{marginLeft:'3em', textDecoration:'inherit', color:'inherit'}} to='/Women'>Women</Link>
            <Link style={{marginLeft:'3em', textDecoration:'inherit', color:'inherit'}} to='/Explore'>Explore All</Link>
          </div>
          <Routes>
            <Route path='/' element={<Header />}></Route>
            <Route path='/Man' element={ <CartProvider>
                                      <Man />
                                      <Cart />
                                      </CartProvider>}></Route>
            <Route path='/Women' element={ <CartProvider>
                                      <Women />
                                      <Cart />
                                      </CartProvider>}></Route>
            <Route path='/Explore' element={ <CartProvider>
                                      <Explore />
                                      <Cart />
                                      </CartProvider>}></Route>
          </Routes>

        </BrowserRouter>
      </div>
  );
}

export default App;
