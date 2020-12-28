/**
 * Reducer function for authedUser
 * @param {id} state - current authedUser state
 * @param {action} action - Redux action
 * @return {id} - authedUser state
 */
const authedUser = (state = null, action) =>
  ({SET_AUTHED_USER: action.id}[action.type] || state);

// Export authedUser reducer
export default authedUser;
