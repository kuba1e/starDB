import React, {Component} from "react";

const ItemHelpers = (View, getData, getImageUrl, getPersonRecordField) => {
  return class extends Component {
    state = {
      data: [],
      loading: true
    };

    

    componentDidMount() {
      getData(this.props.itemId).then(this.onListDownload);
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.props.itemId !== prevProps.itemId) {
        this.setState({ loading: true });
        getData(this.props.itemId).then(this.onListDownload);
      }
    }

    onListDownload = (data) => {
      this.setState({
        data,
        loading: false,
      });
    };

    render() {
      const { data, loading } = this.state;
      const itemId = this.props.itemId
      if(!itemId){
        return <p>Please, choose the item from the left side</p>
      }
      return <View {...this.props} data={data} loading = {loading} image = {getImageUrl(itemId)} itemId= {itemId}>
        {getPersonRecordField().props.children}
        </View>;
    }
  };
};

export default ItemHelpers