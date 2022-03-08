import React from "react";
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

export default ErrorIndicator