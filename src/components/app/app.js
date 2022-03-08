import { React, Component } from "react";
import "./app.css";

import Header from "../header";
import RandomPlanet from "../random-planet";
import Row from "../row";
import { Record } from "../item-details";

import ItemDetails from "../item-details";

import SwapiService from "../../services/swapi-service";
import People from "../People/People";

export default class App extends Component {
  swapi = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  render() {
    const { getPerson, getStarship } = this.swapi;

    const personDetails = (
      <ItemDetails
        getData={getPerson}
        getImageUrl={"https://starwars-visualguide.com/assets/img/characters/"}
        itemId={3}
      >
        <Record field={"gender"} label={"Gender"} />
        <Record field={"skin"} label={"Skin"} />
        <Record field={"mass"} label={"Mass"} />
      </ItemDetails>
    );
    const starShipDetails = (
      <ItemDetails
        getData={getStarship}
        getImageUrl={"https://starwars-visualguide.com/assets/img/starships/"}
        itemId={5}
      >
        <Record field={"passengers"} label={"Passengers"} />
        <Record field={"crew"} label={"Crew"} />
        <Record field={"length"} label={"Length"} />
      </ItemDetails>
    );

    return (
      <div className="container">
        <Header />
        <RandomPlanet/>
        <People/>
        <Row left={starShipDetails} right={personDetails} app={this} />
      </div>
    );
  }
}
