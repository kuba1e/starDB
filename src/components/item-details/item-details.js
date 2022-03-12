import  React, {Component, Fragment, Children } from "react";
import Spinner from "../spinner";

const Record = (props) => {
  const { item, field, label } = props;
  return (
    <li className="list-group-item">
      {label}: <span>{item[field]}</span>
    </li>
  );
};

export {Record}

export default class ItemDetails extends Component {

  render() {
    const loader = this.props.loading ? <Spinner /> : null;
    const item = this.props.data
    const itemEl = !this.props.loading ? (
      <Item
        item={item}
        image={this.props.image}
        children= {Children.map(this.props.children, (child)=>{
          return React.cloneElement(child, {item})
        })}
      />
    ) : null;

    return (
      <div className="block-content d-flex align-items-center">
        {loader}
        {itemEl}
      </div>
    );
  }
}

const Item = (props) => {
  const { name} = props.item;
  const { image, children } = props;
  
  return (
    <Fragment>
      <div className="img-container">
        <img src={`${image}`} alt="item details"></img>
      </div>
      <div className="list-items">
        <div className="header-title">
          <h3>{name}</h3>
        </div>
        <div className="list-container">
          <ul className="list-group header-item-list">
           {children}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
