import React, {Component} from "react";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: [],
    };

    componentDidMount() {
      getData().then(this.onListDownload);
    }

    onListDownload = (data) => {
      this.setState({
        data,
      });
    };

    render() {
      const { data } = this.state;

      return <View {...this.props} data={data}/>;
    }
  };
};

export default withData