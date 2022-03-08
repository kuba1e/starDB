import { React, Component, Fragment } from "react";
import "./People.css";

import F from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

class ErrorBoundry extends Component{

  state= {
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render(){
    if(this.state.hasError){
      return <ErrorIndicator message={'error'}/>
    }
   return this.props.children
  }
}

export {ErrorBoundry}

export default class People extends Component {
  swapi = new SwapiService();

  state = {
    selectedPerson: 1,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  getPeopleList = () => {
    return this.swapi.getAllPeople();
  };

  

  render() {


    const peopleInfo = 
      <PeopleInfo
        onPersonSelected={this.onPersonSelected}
        selectedPerson={this.state.selectedPerson}
        getData={this.getPeopleList}
      >
        {(item) => `${item.name} ${item.gender}`}
      </PeopleInfo>

    return (
      <div className="item-container">
        <ErrorBoundry>
        {peopleInfo}
        </ErrorBoundry>
      </div>
    );
  }
}

const PeopleInfo = (props) => {
  const { onPersonSelected, selectedPerson, getData } = props;

  return (
    <Fragment>
      <F
        onItemsSelected={onPersonSelected}
        getData={getData}
        renderItem={props.children}
      />
      <ItemDetails personId={selectedPerson} />
    </Fragment>
  );
};
