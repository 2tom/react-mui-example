import React from 'react';
import {AppBar, LeftNav, MenuItem} from 'material-ui';
const ThemeManager = require('material-ui/lib/styles/theme-manager');
import MyRawTheme from '../mui_theme.jsx';


function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
};

// top page Header
class Header extends React.Component {
  static get childContextTypes() {
    return { muiTheme: React.PropTypes.object };
  };

  getChildContext(){
    return {  muiTheme: ThemeManager.getMuiTheme(MyRawTheme)};
  };

  constructor() {
      super();
      this.state = {open: false};
      this._handleToggle = this._handleToggle.bind(this);
  };

  _handleToggle() {
    this.setState({open: !this.state.open});
    this.setState({close: this.state.open});
  };

  render() {
    return (
      <header className="header">
        <AppBar
          title="CIoT Console"
          onLeftIconButtonTouchTap={this._handleToggle}
          onTitleTouchTap={this._handleToggle}
          />
        <LeftNav open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
      </header>
    );
  };
};

export default Header;
