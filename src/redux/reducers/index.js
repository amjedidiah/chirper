// Module imports
import {combineReducers} from 'redux';

// Reducer imports
import authedUser from 'redux/reducers/authedUser';
import {loadingBarReducer} from 'react-redux-loading';
import tweets from 'redux/reducers/tweets';
import users from 'redux/reducers/users';

// Export combineReducers
export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
  tweets,
  users,
});
