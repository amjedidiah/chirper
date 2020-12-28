// Module imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

// Container imports
import Dashboard from 'components/container/Dashboard';

/**
 * App component
 */
export class App extends Component {
  /**
   * App propTypes
   */
  static propTypes = {
    handleInitialData: PropTypes.func,
    loading: PropTypes.bool,
  };

  /**
   * Executes once component mounts
   * @return {actionCreator}
   */
  componentDidMount = () => this.props.handleInitialData();

  /**
   * Renders the App UI
   * @return {object} The UI DOM object
   */
  render = () => (
    <div>
      <LoadingBar />
      {!this.props.loading && <Dashboard />}
    </div>
  );
}

/**
 * Maps state to Dashboard component props
 * @param {state} state
 * @return {appStateProps}
 */
const mapStateToProps = ({loadingBar}) => ({
  loading: loadingBar.default === 1,
});

// App export
export default connect(mapStateToProps, {handleInitialData})(App);
