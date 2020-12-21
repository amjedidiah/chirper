/**
 * Bitcoin checker Middleware
 * @param {store} store - The redux store
 * @returns {function}
 */
const checker = (store) => (next) => (action) => {
  if (
    (action.type === "ADD_TODO" &&
      action.todo.name.toLowerCase().includes("bitcoin")) ||
    (action.type === "ADD_GOAL" &&
      action.goal.name.toLowerCase().includes("bitcoin"))
  )
    return alert("This is a bad idea");

  return next(action);
};

export default checker;
