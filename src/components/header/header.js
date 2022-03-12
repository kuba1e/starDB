import { React } from "react";
import { Link } from "react-router-dom";

import './header.css'

const Header = () => {
  return (
    <div className="navbar  header">
      <div className="navbar-brand main-title">
        <h1 ><Link className="main-title" to='/'>Star DB</Link></h1>
      </div>
      <div className=" nav-list-container">
        <ul className="nav">
          <li className="nav-item "><Link className="nav-link" to="/people/">People</Link></li>
          <li className="nav-item "><Link className="nav-link" to="/planets/">Planets</Link></li>
          <li className="nav-item "><Link className="nav-link" to="/starships/">Starships</Link></li>
          <li className="nav-item "><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item "><Link className="nav-link" to="/secret-page">Secret</Link></li>
        </ul>
      </div>
      </div>
  );
};

export default Header