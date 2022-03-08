import { React, Component } from "react";
import './header.css'

const Header = () => {
  return (
    <div className="navbar  header">
      <div className="navbar-brand main-title">
        <h1>Star DB</h1>
      </div>
      <div className=" nav-list-container">
        <ul className="nav">
          <li className="nav-item "><a className="nav-link">People</a></li>
          <li className="nav-item "><a className="nav-link">Planets</a></li>
          <li className="nav-item "><a className="nav-link">Starships</a></li>
        </ul>
      </div>
      </div>
  );
};

export default Header