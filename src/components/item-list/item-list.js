import { React, Fragment } from "react";
import "./item-list.css";
import { ErrorBoundry } from "../error-indicator";

const ItemList = (props) =>{
    const itemList = 
      <Items
        people={props.data}
        onItemsSelected={props.onItemSelected}
        renderItem={props.children}
      />

    return (
      <div className="list-items">
        <ErrorBoundry>{itemList}</ErrorBoundry>
      </div>
    );
  
}

const Items = ({ people, onItemsSelected, renderItem }) => {
  const peopleListElements = people.map((element) => {
    const content = renderItem(element);
    return (
      <li
        key={element.id}
        className="list-group-item tab"
        onClick={() => {
          onItemsSelected(element.id)}}
      >
        {content}
      </li>
    );
  });
  return (
    <Fragment>
      <div className="list-container">
        <ul className="list-group header-item-list">{peopleListElements}</ul>
      </div>
    </Fragment>
  );
};


export default ItemList