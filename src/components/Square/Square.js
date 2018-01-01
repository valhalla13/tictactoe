import React, {Component} from 'react'
import './Square.css'

class Square extends Component{
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  handleClick = ()=>(
    this.setState({value:'X'})
  )

  render(){
    return(
      <button className="square" onClick={this.handleClick}>
        {this.state.value}
      </button>
    )
  }

}

export default Square
