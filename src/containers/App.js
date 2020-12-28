// Module imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

/**
 * App component
 * @constructor
 */
class App extends Component {
  /**
   * App proptypes
   */
  static propTypes = {
    handleInitialData: PropTypes.func,
  };

  /**
   * Executes once component mounts
   */
  componentDidMount() {
    this.props.handleInitialData();
  }

  /**
   * Renders the App component UI
   * @return {any} The UI DOM object
   */
  render = () => <div>Starter Code</div>;
}

// App export
export default connect(null, {handleInitialData})(App);
