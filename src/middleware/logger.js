/**
 * Logger middleware
 * @param {store} store - The redux store
 * @returns {function}
 */
const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log("The current state:", store.getState());
    console.log("The action:", action);
    const result = next(action);
    console.log("The new state:", store.getState());
    console.groupEnd();
  
    return result;
  };

  export default logger;