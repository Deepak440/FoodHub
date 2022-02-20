import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import  Footer  from './components/Footer'
import HomeScreen from './Screen.js/HomeScreen'
import FoodItemScreen from './Screen.js/FoodItemScreen';
import CartScreen from './Screen.js/CartScreen'



const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
           <Route path = "/" element ={<HomeScreen />} exact />
           <Route path = "/restaurant/:id" element ={<FoodItemScreen />} exact />
           <Route path ='/cart' elment =  { <CartScreen />} exact />
          </Routes>
         
        </Container>
       
      </main>
      
      <Footer />
      </Router>
  )
}

export default App