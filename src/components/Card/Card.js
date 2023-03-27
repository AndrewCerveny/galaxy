import React from "react";
import './Card.css'
import { Link } from "react-router-dom";

const Card = ({wholePlanet, grabId, passUrl}) => {
  const {basicDetails} = wholePlanet;
 const mass = basicDetails[0].mass;
 const volume = basicDetails[0].volume; 
  const {description} = wholePlanet;
  const {id} = wholePlanet;
  const {imgSrc} = wholePlanet;
  const {key} = wholePlanet;
  const {name} = wholePlanet;
  const {planetOrder} = wholePlanet;
  const {wikiLink} = wholePlanet; 
  const img = imgSrc[0].img;
  const altDescription = imgSrc[0].imgDescription;
  
  const upperCaseName = name.toUpperCase()
  

  return(
    <section className="planetCard">
     <h2> {upperCaseName}:<span> Planet {planetOrder} From The Sun! </span> </h2>
      <img className="photo" src={img} alt={altDescription} /> 
     <h4> Mass:{mass}</h4>
     <h4> Volume:{volume}</h4>
     <p> {description} </p>
      <section>
       <a className='reference-tag' href={wikiLink} target='_blank'> LEARN MORE  </a>
      </section>
    </section>
  )

}
export default Card; 