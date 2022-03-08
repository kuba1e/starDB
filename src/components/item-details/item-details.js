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
  state = {
    item: null,
    image: null,
    loading: true,
  };

  componentDidMount = () => {
    this.getItemDetails();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.itemId !== prevProps.itemId) {
      this.getItemDetails();
      this.setState({ loading: true });
    }
  }

  getItemDetails() {
    const { itemId, getData } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then(this.onDownloadItem);
  }

  onDownloadItem = (item) => {
    const image = this.props.getImageUrl;
    this.setState({
      item,
      image,
      loading: false,
    });
  };


  render() {
    const loader = this.state.loading ? <Spinner /> : null;
    const item = this.state.item
    const itemEl = !this.state.loading ? (
      <Item
        item={this.state.item}
        image={this.state.image}
        children= {Children.map(this.props.children, (child)=>{
          return React.cloneElement(child, {item})
        })}
        onErrorState={this.onErrorState}
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
  const { id, name} = props.item;
  const { image, children } = props;

  
  return (
    <Fragment>
      <div className="img-container">
        <img src={`${image}${id}.jpg`} alt="item details"></img>
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
