import React,{useContext, useState} from 'react'
import MealsContext from './Context'

const CartProvider = (props)=>{
    const[cartItems,setCartItems] = useState([{
        name:"",
        amount:0,
        price:0,
        totalPrice:0
    }])
    const[total,setTotal] = useState({
        totalAmount:0,
        totalItems:0
    });
    const[cartValid,setCartValid] = useState(false)
  
    const addItem = (amount,item)=>{
        console.log(item);
        const foodIndex = cartItems.findIndex((item2)=>{
           return item.name === item2.name;
        })
       let totalAmount2 = total.totalAmount+item.price*item.amount
       console.log("totalAmount2",totalAmount2)
       console.log("item.price*item.amount total.totalAmount",total.totalAmount,item.price,item.amount)
       
        setTotal({
            totalAmount:totalAmount2,
            totalItems:total.totalItems + item.amount
        })
        let oldArray = cartItems.filter((obj)=>{
            return obj.name !==item.name
        })
        const updateItem = cartItems[foodIndex];
        if(updateItem){
            const newItem = {
                ...updateItem,
                amount:updateItem.amount+item.amount,
                price:item.price,
                totalPrice:item.price*(updateItem.amount+item.amount)
            }
            oldArray.push(newItem);
            
            setCartItems(()=>{
                return oldArray
            })
        }
        else{
            const newItem = {
                name : item.name,
                amount:item.amount,
                price:item.price,
                totalPrice:item.price
            }
            oldArray.push(newItem);
            oldArray = oldArray.sort(compare)
            setCartItems(()=>{
                return oldArray
            })
        }
    }
    const removeItems = (item)=>{
        console.log("hello",item)
        if(item.amount <= 0){
            return;
        }
        let updateItem = {
            ...item,
            amount:item.amount - 1,
            totalPrice: item.totalPrice - item.price
        }
        let oldArray = cartItems.filter((obj)=>{
            return obj.name !==item.name
        })
        oldArray.push(updateItem);
        setCartItems(()=>{
            setTotal({
                totalAmount:parseFloat(total.totalAmount - item.price).toFixed(2),
                totalItems:total.totalItems - 1

            })
            return oldArray
        })

         
     }
    
     const handleCart = ()=>{
         console.log("handle")
        if(cartValid === true){
            setCartValid(false)
            props.cart(false)
        }
        else{
            setCartValid(true)
            props.cart(true)
        }
     }
     const checkCart = ()=>{
        props.cart()
     }
     function compare( a, b ) {
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name ){
          return 1;
        }
        return 0;
      }

    
     console.log("amount",total);
     console.log("cartValid",cartValid);

    return(
        <MealsContext.Provider value = {{addItem:addItem,cartItems:cartItems,
        total:total,handleCart:handleCart,cartValid:cartValid,removeItems:removeItems}}>
            {props.children}
        </MealsContext.Provider>
    )
}

export default CartProvider