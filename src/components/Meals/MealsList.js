import React from 'react';
import styles from './MealsList.module.css'
import DUMMY_MEALS from './dummyMeals';
import MealItem from './MealItem';
import Card from '../Card';

const MealsList = ()=>{
    console.log(DUMMY_MEALS);
    return(
        <Card>
        <div className = {styles.meals}>
            {DUMMY_MEALS.map((item)=>{
                return(
                   
                    <MealItem
                    item = {item}
                    />
                   
                )
                
            })}
            
        </div>
        </Card>
    )
}

export default MealsList;