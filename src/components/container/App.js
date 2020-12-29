// Module imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

// Component imports
import Dashboard from 'components/container/Dashboard';
import TweetPage from './TweetPage';

// Selector imports
import {getLoading} from 'redux/selectors';

/**
 * App component
 */
class App extends Component {
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
      {!this.props.loading && (
        <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}} />
      )}
    </div>
  );
}

/**
 * Maps state to Dashboard component props
 * @param {state} state
 * @return {appStateProps}
 */
const mapStateToProps = ({authedUser}) => ({
  loading: getLoading(authedUser),
});

// App export
export default connect(mapStateToProps, {handleInitialData})(App);
