import React from "react";
import './Header.css';
import alien from '../../images/alien.png'
const Header = () => {
 
 
 return (
 <section className="intro">
    <h1> Welcome to Planetarium! </h1>
    <h2> Transverse The Universe! </h2>
    <img className="alien" src={alien} alt="cute alien floating around" />
 </section>
 )
 
}
export default Header