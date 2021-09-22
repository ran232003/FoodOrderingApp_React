import React from 'react';
import styles from "./Header.module.css";
import image from '../../Img/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = ()=>{
   

    return(
            <div>
                <header  className = {styles.header}>
                    <h1>Welcome</h1>
                    <HeaderCartButton/>
                </header>
                <div className = {styles['main-image']}>
                    <img
                    src={image} />
                </div>
                
            </div>
    )
}
export default Header;