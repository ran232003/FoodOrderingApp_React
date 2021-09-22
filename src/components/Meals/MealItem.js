import React from 'react';
import AddingItem from '../AddingItem';
import Styles from './MealItem.module.css';

const MealItem = (props)=>{

    return(
        <div>
            <div className = {Styles.meal}>
            <h3>{props.item.name}</h3>
            </div>
            <AddingItem
            item = {props.item}
            />
            <p className = {Styles.description}>{props.item.description}</p>
            <p className = {Styles.price}>${props.item.price}</p>
        </div>
    )
}

export default MealItem;