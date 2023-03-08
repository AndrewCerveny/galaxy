import React, {Component} from "react";
import './Form.css'
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props)
    this.state= {
      description:'',
    }
  }
  handleChange =(e) => {
    const {name,value} = e.target
    this.setState({[name]:value}) 
  }
  clearInput = (e) => {
    this.setState({description:''})
  }
  render() {
    const {allPlanets} = this.props
    const{arrange} = this.props
    const{handleSubmit} = this.props
    
    return(
      <section className="form-area"> 
       <div className="desire-styler">
          <button onClick={()=> arrange()}> See planets in order! </button>
          <Link to="/">
            <button onClick={() => allPlanets()}> See All Planets </button>
          </Link>
       </div>
        <form>
          <input
            type='text' 
            placeholder="Find A Planet" 
            name='description'
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
          <button onClick={(e) => handleSubmit(e,this.state.description)}> Enter </button>
          <button onClick={(e) => this.clearInput(e)}> Clear </button>
          
        </form>
      </section>
    )
  }
}
export default Form; 