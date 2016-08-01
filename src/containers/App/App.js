import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import styles from './styles.module.css'

export default class App extends React.Component{

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history}
      />
    )
  }

  render () {
    return (
      <div style={ { height: '100%'} }>
        {this.content}
      </div>
    )
  }
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
};
