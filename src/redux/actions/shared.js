// API import
import {getInitialData} from 'utils/api';
import {hideLoading, showLoading} from 'react-redux-loading';

// Action creator imports
import {receiveTweets} from 'redux/actions/tweets';
import {receiveUsers} from 'redux/actions/users';
import {setAuthedUser} from 'redux/actions/authedUser';

/**
 * @const {string}
 */
const AUTHED_ID = 'tylermcginnis';

/**
 * Async action creator to handle initial data
 * @return {actionCreator}
 */
export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData().then(({tweets, users}) => {
    dispatch(receiveTweets(tweets));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
    dispatch(hideLoading());
  });
};
