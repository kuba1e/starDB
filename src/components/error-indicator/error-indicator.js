import React, {Component} from "react";
import './error-indicator.css'

const ErrorIndicator = (props)=>{
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
    <div className="toast show align-items-center" >
  <div className="d-flex">
    <div className="toast-body">
    {props.message}
   </div>
    <button type="button" className="btn-close me-2 m-auto"></button>
  </div>
</div>
</div>
  )
}

class ErrorBoundry extends Component {
  state = {
    error: false
  }

  componentDidCatch(error){
    this.setState({error})
  }

  render(){
    if(this.state.error){
      return <ErrorIndicator message={this.state.error}/>
    }
    return this.props.children
  }
}

export {ErrorIndicator, ErrorBoundry}