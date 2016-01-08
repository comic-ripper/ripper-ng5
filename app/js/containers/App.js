import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActionCreators as UndoActions } from 'redux-undo';


class App extends Component {
  render() {
    return (
      <div className="Layout">
        <h1>Ripper</h1>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

function select(state, props) {
  return { };
}

export default connect(select)(App);
