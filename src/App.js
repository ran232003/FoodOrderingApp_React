import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import styels from './App.module.css'

import Footer from "./components/Footer";
import MealsContext from "./components/Context";
import DUMMY_MEALS from "./components/Meals/dummyMeals";
import { cartContext } from "./components/Layout/HeaderCartButton";
import Cart from "./components/Layout/Cart";
import CartProvider from "./components/CartProvider";
import { useState,useContext } from "react";
function App() {
      const[cart,setCart] = useState(false)
  const context = useContext(MealsContext);
  console.log("in app",cart)
  const cartStatus = (check)=>{
    setCart(check);
  }
  
  return (
    <div>
      
      <CartProvider
      cart = {cartStatus}
      >
     <Header/>
      <Meals/>
       {cart === true? <Cart/>:null}
      <Footer/>
     
      </CartProvider>
    </div>

  );
}

export default App;
