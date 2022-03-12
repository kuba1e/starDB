import { React, Component, Fragment } from "react";
import "./random-planet.css";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import { ErrorBoundry } from "../error-indicator";
class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 4000);
  }


  onError = (error) => {
    this.setState({
      error: error.message,
      loading: false,
    });
  };

  updatePlanet = () => {
    const id = Math.trunc(Math.random() * 19 + 2);
    this.swapi.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  render() {
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const planetComponent =
      !loading? <PlanetView planet={planet} /> : null;

    return (
      <div className="block-content d-flex align-items-center">
        <ErrorBoundry>
        {spinner}
        {planetComponent}
        </ErrorBoundry>
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <Fragment>
      <div className="img-container">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="random planet"
        ></img>
      </div>
      <div className="list-items">
        <div className="header-title">
          <h3>{name}</h3>
        </div>
        <div className="list-container">
          <ul className="list-group header-item-list">
            <li className="list-group-item">
              Population: <span>{population}</span>
            </li>
            <li className="list-group-item ">
              Rotation period: <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item ">
              Diameter: <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default RandomPlanet;
