import React from "react";
import ItemList from "../item-list";
import WithData from "../hoc-helpers";
import withSwapiServiceList from "../hoc-helpers/with-swapi-service";


const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const mapPersonMethodsToProps = ({getAllPeople})=>{
  return {
    getData: getAllPeople
  }
}

const mapPlanetsMethodsToProps=({getAllPlanets})=>{
  return {
    getData: getAllPlanets
  }
}

const mapStarshipsMethodsToProps=({getAllStarships})=>{
  return {
    getData: getAllStarships
  }
}

const ListWithChildren = withChildFunction(ItemList, ({name, id})=><span>{name}</span>)

const PersonList = withSwapiServiceList(WithData(ListWithChildren),mapPersonMethodsToProps);

const PlanetList = withSwapiServiceList(WithData(ListWithChildren), mapPlanetsMethodsToProps);

const StarshipList = withSwapiServiceList(WithData(ListWithChildren), mapStarshipsMethodsToProps);

export { PersonList, PlanetList, StarshipList };
