// Module imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

// Selector imports
import {getLoading} from 'redux/selectors';
import Dashboard from './Dashboard';
import TweetPage from './TweetPage';
import TweetForm from './TweetForm';
import Nav from 'components/presentation/Nav';

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
    <Router basename="/chirper">
      <>

        {console.log(this.props)}
        <LoadingBar />
        <div className="container">
          <Nav />
          {!this.props.loading && (
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/tweet/:id" component={TweetPage} />
              <Route path="/new" component={TweetForm} />
            </div>
          )}
        </div>
      </>
    </Router>
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
