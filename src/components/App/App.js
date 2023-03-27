import React, {Component} from 'react';
import './App.css';
// import planets from '../../data/planetData';
import Header from '../Header/Header';
import Display from '../Display/Display';
import Form from '../Form/Form';
import { Route } from 'react-router-dom';
import apiDataCall from '../../api/apicalls';


class App extends Component {
  constructor() {
    super()
    this.state = {
      planets: [],
      selectedPlanet:[],
      error:'',
      loaded: false 
    }

  }
  componentDidMount() {
    apiDataCall()
      .then((data) => this.setState({planets:data, loaded:true}))
      .catch((err) => this.setState({error:err.message}))   
  }

  seeAllPlanets = () => {
    return this.setState({selectedPlanet:[]})
  }
  
  arrangePlanets = () => {
    const arrangedOrder = this.state.planets.sort((a,b)=>  Number(a.planetOrder) - Number(b.planetOrder))
    this.setState({planets:arrangedOrder})
  }
 
  handleSubmit = (event, input) => {
    event.preventDefault()
    
    const lowerC = input.toLowerCase()
    
    const changePlanetName = this.state.planets.map((planet) => {
      planet.name = planet.name.toLowerCase()
      return planet
    })
    const findPlanet = changePlanetName.filter((planet) => planet.name.includes(lowerC))
    this.setState({selectedPlanet:findPlanet}) 
  }

 
  render() {
    const planetDetail = this.state.selectedPlanet.length && this.state.planets.length ? this.state.selectedPlanet : this.state.planets 
    {!this.state.loaded && !this.state.error && <h2>Loading ...</h2>}
    
    return(
      <main className='App'>
        <Header />
        <Form allPlanets={this.seeAllPlanets} arrange={this.arrangePlanets} handleSubmit={this.handleSubmit}/>
        <Route exact path='/'>
         <Display planets={planetDetail} grabId={this.grabId} passUrl={this.passUrl} error={this.state.error} />
        </Route>
      </main>
    )
  }

}



export default App;

