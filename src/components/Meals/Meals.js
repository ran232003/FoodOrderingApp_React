import React from 'react';
import Card from '../Card';
import MealsList from './MealsList';
import MealsText from './MealsText';

const Meals = ()=>{
    return(
        <div>
           
            <MealsText/>
           
            <MealsList/>
            
        </div>
    )
}

export default Meals;