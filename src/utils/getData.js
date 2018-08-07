import React from "react";

const withData = keyName => WrappedComponent => {
  class HOC extends React.Component {
    state = {
      [keyName]: [],
    };

    componentWillMount() {
      fetch("https://api.myjson.com/bins/npoa0")
        .then(response => response.json())
        .then(data => {
          console.log(data, "---final data");
          this.setState(prevState => ({
            [keyName]: [...data.products],
          }));
        });
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

  return HOC;
};

export default withData;
