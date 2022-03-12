import React from "react";
import { Redirect } from "react-router-dom";

const SecretPage = ({isLoggedIn})=>{

  if(isLoggedIn){
    return (
      <div className="d-flex justify-content-center"><h1>This page is full of secrets</h1></div>
    )
  }

  return <Redirect to='/login'/>


}

export default SecretPage