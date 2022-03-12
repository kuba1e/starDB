import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {

  if(isLoggedIn){
    return <Redirect to='/secret-page'/>
  }

  return (<form className="form p-4" onSubmit={(event=>{
    event.preventDefault()
    onLogin()

  })}>
      <div className="mb-3">
        <h3>Please, input a login</h3>
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="exampleDropdownFormPassword2"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default LoginPage;
