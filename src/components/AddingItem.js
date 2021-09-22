import React,{useState,useContext} from 'react';
import styles from './AddingItem.module.css'
import MealsContext from './Context';


const AddingItem = (props)=>{
    const[amount,setAmount] = useState(0);
    const[item,setItem] = useState({
        name:"",
        amount:0,
        price:0
    });

    const amountChange = (event)=>{
        const newAmount = event.target.value;
        setAmount(newAmount);
    }
    const context = useContext(MealsContext);
    const addItem = ()=>{
        const myItem = {
            name:props.item.name,
            price:props.item.price,
            amount:parseInt(amount)
        }
        context.addItem(amount,myItem);
    }

    return <div className = {styles.div}>
        <span>
        <label>Amount</label>
        <input
        className = {styles.input}
        type ="number"
        value = {amount}
        onChange = {amountChange}
        />
        </span>
        <br/>
        <button 
        onClick = {addItem}
        className = {styles.button}>+Add</button>

    </div>
}
export default AddingItem;
