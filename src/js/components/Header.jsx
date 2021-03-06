import React from 'react';
import {AppBar, LeftNav, MenuItem} from 'material-ui';
const ThemeManager = require('material-ui/lib/styles/theme-manager');
import MyRawTheme from '../mui_theme.jsx';

class Header extends React.Component {

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  constructor(props) {
    super(props);
    this.state = {open: false};
  },

  render() {
    return (
      <div>
        <AppBar
          title="CIoT"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTouchTap={this.handleToggle}
        />

        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
          >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

export default Header;
