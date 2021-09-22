import React from 'react'
import styles from './Footer.module.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

const Footer = ()=>{
    return(
        <footer className = {styles.footer}>
        Created By Ran Farjun
        <br/>
        <a href="https://www.linkedin.com/in/ran-farjun-10b33b13a/"><AiFillLinkedin/></a>
        <a href = "mailto: mike232003@gmail.com.com"><SiGmail/></a>
      </footer>
    )
}
export default Footer;