import React,{useState,useContext} from 'react';
import styles from './HeaderCartButton.module.css';
import { HiShoppingCart } from 'react-icons/hi';
import Cart from './Cart';
import MealsContext from '../Context';


const HeaderCartButton = ()=>{
    const[goToCart,setGoToCart] = useState(false)
    const cartText = " Your Cart"
    const context = useContext(MealsContext);
    const handleMyCart = (event)=>{
        console.log("in button",goToCart)
       
        if(event.target.name === "goToCart" || typeof event.target.name === "undefined")
        {
            setGoToCart(true);  
            console.log(event.target.name)
        }
        else{
        setGoToCart(false)
    }
}

    return(
        <button
        name = "goToCart"
        onClick = {context.handleCart}
        className = {styles.button}>
            <span className = {styles.icon}><HiShoppingCart/></span>
            <span>&nbsp;{cartText}</span>
            <span className = {styles.badge}>&nbsp;  {context.total.totalItems}</span>
           {goToCart === true?<Cart/>:null}
        </button>
    )
}


export default HeaderCartButton;