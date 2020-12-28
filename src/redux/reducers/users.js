/**
 * Reducer function for users
 * @param {users} state - current users state
 * @param {action} action - Redux action
 * @return {users} - users state
 */
const users = (state = {}, action) =>
  ({RECEIVE_USERS: {...state, ...action.users}}[action.type] || state);

// Export users reducer
export default users;
