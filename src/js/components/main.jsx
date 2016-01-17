import React from 'react';
import {TextField} from 'material-ui';


const containerStyle = {
  textAlign: 'center',
  paddingTop: 200,
};

const Main = React.createClass({
  childContextTypes: {
  },
  getInitialState() {
    return {
    };
  },
  getChildContext() {
    return {
    };
  },
  componentWillMount() {
    this.setState({});
  },

  _handleRequestClose() {
    this.setState({
      open: false,
    });
  },
  _handleTouchTap() {
    this.setState({
      open: true,
    });
  },
  render() {
    const standardActions = "";
    return (
      <div style={containerStyle}>
        <h1>material-ui</h1>
        <h2>example project</h2>
      </div>
    );
  },
});

export default Main;
