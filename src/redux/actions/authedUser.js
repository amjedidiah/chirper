// Type imports
import {SET_AUTHED_USER} from 'redux/actions/types';

/**
 * Action creator to set authed user
 * @param {id} id - The ID of the authedUser
 * @return {object} - The action to dispatch
 */
export const setAuthedUser = (id) => ({type: SET_AUTHED_USER, id});
