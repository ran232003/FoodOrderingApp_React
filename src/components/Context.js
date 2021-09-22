import React from 'react';
import DUMMY_MEALS from './Meals/dummyMeals';

const MealsContext = React.createContext({
    meals:DUMMY_MEALS,

})

export default MealsContext;