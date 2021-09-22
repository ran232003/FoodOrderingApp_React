import React,{useState,useContext} from 'react';
import Card from '../Card';
import MealsContext from '../Context';
import styles from './Cart.module.css'

const Cart = ()=>{
   const context = useContext(MealsContext);
   const closeCart = ()=>{
       console.log("hello from cart")
    context.handleCart(false);
   }
    return(
        <div className = {styles.div}>
            <div>
            <ul>
                {context.cartItems.map((item)=>{
                    if(item.name.length === 0){
                        return
                    }
                    return (
                      
                        <div className = {styles.div2}>
                            <span><h3>{item.name}</h3></span>
                            <span>${item.price} x{item.amount}<button
                            className = {styles.buttonAdd}
                            onClick = {()=>{
                                context.removeItems(item)
                            }}
                            >-
                            </button><button
                            onClick = {()=>{
                                context.removeItems(item)
                            }}
                            className = {styles.buttonAdd}
                            >+</button>
                            </span>
                        </div>
                       
                       
                    )
                })}
            </ul>
            <div className = {styles.head}>
            <h3 className = {styles.head1}>&nbsp;Total Amount</h3>
            <h3 className = {styles.head2}>${context.total.totalAmount}</h3>
            </div>
            <button
            className = {styles.button}
            onClick = {closeCart}
            >Close
            </button>
            </div>
        </div>
    )
}

export default Cart;