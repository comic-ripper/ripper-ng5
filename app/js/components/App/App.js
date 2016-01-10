import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { ActionCreators as UndoActions } from 'redux-undo';
import { connect } from 'react-redux';

import AppNav from '../AppNav';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <AppNav />
        Ripper
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
