// Type imports
import {RECEIVE_USERS} from 'redux/actions/types';

/**
 * Action creator for received users
 * @param {user[]} users - Users received from fetch
 * @return {object} - Action to dispatch
 */
export const receiveUsers = (users) => ({type: RECEIVE_USERS, users});
