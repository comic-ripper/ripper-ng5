import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { ActionCreators as UndoActions } from 'redux-undo';
import { connect } from 'react-redux';

import { AppBar, IconButton, MenuItem, IconMenu } from 'material-ui';
import { NavigationMoreVert } from 'material-ui/lib/svg-icons';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Comic Ripper"
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><NavigationMoreVert /></IconButton>
              }
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>}
        />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

function select(state, props) {
  return { state, props };
}

export default connect(select)(App);
