import { React, Component, Fragment } from "react";
import "./Starships.css";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";


export default class People extends Component {
  swapi = new SwapiService();


  state = {
    selectedStarship: 1,
    error: false,
  };

  onStarshipSelected = (id) => {
    this.setState({
      selectedStarship: id,
    });
  };

  getStarshipsList = () => {
    return this.swapi.getAllStarships()
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
        onPersonSelected={this.onStarshipSelected}
        selectedPerson={this.state.selectedStarship}
        getData = {this.getStarshipsList}
        renderItem={(item)=>item.name}
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
