import React from "react";
import './Display.css';
import Card from "../Card/Card";


const Display = ({planets, grabId, clearSelected,passUrl}) => {
const allPlanetInfo = planets.map(planet => 
  <Card 
   wholePlanet= {planet}
   key={planet.key}
   grabId= {grabId}
   clearSelected={clearSelected}
   passUrl={passUrl}
  />
)

return (
  <section className="display-area">
    { allPlanetInfo }
  </section>
)

}
export default Display; 