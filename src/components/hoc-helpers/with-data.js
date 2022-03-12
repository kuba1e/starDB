import React, {Component} from "react";
import Spinner from "../spinner";

const WithData = (View) => {
  return class extends Component {
    state = {
      data: [],
      loading: true
    };

    componentDidMount() {
      this.props.getData().then(this.onListDownload);
    }

    onListDownload = (data) => {
      this.setState({
        data,
        loading: false
      });
    };

    render() {
      const { data, loading } = this.state;
      if(loading){
        return <Spinner/>
      } 
      return <View  {...this.props} data={data}/>;
    }
  };
};

export default WithData