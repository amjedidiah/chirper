/**
 * Loading reducer
 * @param {loading} state - Loading state
 * @param {action} action - Action changing the state
 * @returns {loading}
 */
const loading = (state = false, action) =>
  ({
    RECEIVE_DATA: true,
  }[action.type] || state);

export default loading;
