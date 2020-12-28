// Type imports
import {RECEIVE_USERS} from 'redux/actions/types';

/**
 * Action creator for received users
 * @param {users} users - Users received from fetch
 * @return {action} - Action to dispatch
 */
export const receiveUsers = (users) => ({type: RECEIVE_USERS, users});
