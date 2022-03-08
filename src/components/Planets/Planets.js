import { React, Component, Fragment } from "react";
import "./Planets.css";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";


export default class Planets extends Component {
  swapi = new SwapiService();


  state = {
    selectedPlanet: 1,
    error: false,
  };

  onPlanetsSelected = (id) => {
    this.setState({
      selectedPlanet: id,
    });
  };

  getPlanetsList = () => {
    return this.swapi.getAllPlanets()
  };

  componentDidCatch(error, info) {
    this.setState({ error });
  }

  render() {

    if(this.state.error){
      return <ErrorIndicator message={"Error"}/>
    }

    const errorComp = this.state.error ? (
      <ErrorIndicator message={this.state.error} />
    ) : null;
    const peopleInfo = !this.state.error ? (
      <PeopleInfo
        onPersonSelected={this.onPlanetsSelected}
        selectedPerson={this.state.selectedPlanet}
        getData = {this.getPlanetsList}
        renderItem={({name, population})=>`${name} ${population}`}
      />
    ) : null;

    return (
      <div className="item-container">
        {errorComp}
        {peopleInfo}
      </div>
    );
  }
}

const PeopleInfo = (props) => {
  const { onPersonSelected, selectedPerson, getData, renderItem } = props;

  return (
    <Fragment>
      <ItemList onItemsSelected={onPersonSelected} getData={getData} renderItem={renderItem}/>
      <ItemDetails personId={selectedPerson} />
    </Fragment>
  );
};
