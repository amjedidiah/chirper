/**
 ** TYPE DEFINITIONS
 */
/**
 * Definition for store
 * @typedef {Object} store
 * @property {function} dispatch - Updates store state
 * @property {function} getState - Gets store state
 * @property {function} subscribe - Listens for changes
 */

/**
 * Definition for action
 * @typedef {Object} action
 * @property {string} type - action type
 */

/**
 * Alternative todos state definition for a function
 * @param {Object[]} state - Store state
 * @param {string} state[].id - todo ID
 */

/**
 * Alternative action definition for a function
 * @param {Object} action - Action chnaging the state
 * @param {string}  action.type - Type of the action
 */

/**
 * Definition for TODO
 * @typedef {Object} todo
 * @property {string} id - todo ID
 * @property {boolean} complete - todo complete status
 * @property {string} name - todo name
 */

/**
 * Definition for Goal
 * @typedef {Object} goal
 * @property {string} id - goal ID
 * @property {string} name - goal name
 */

/**
 * Definition for id
 * @typedef {string} id - A goal or todo id
 */

/**
 * Definition for loading
 * @typedef {boolean} loading - loading
 */

/**
 *! APP CODE
 */

/**
 ** ACTION TYPES
 */
const RECEIVE_DATA = "RECEIVE_DATA";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

/**
 ** ACTION CREATORS
 */

/**
 * Add todos and goals from DB to store
 * @param {goal} goal - goals to add
 * @param {todo} todo - todos to add
 * @returns {{type: string, goal:goal, todo: todo}}
 */
const receiveDataAction = (goal, todo) => ({ type: RECEIVE_DATA, goal, todo });

/**
 * Async action creator to fetch Initial data from DB
 * @returns {promise}
 * 
 * The Promise.all method
 * - faster response time: all start at the same time(async)
 * - returns error for all if one fails, i.e prevents all from executing
 * 
 * Async-await 
 * - slower response time: wait for one to complete before starting another (sync)
 * - returns error for each that fails, i.e passes all before the one
 *   that failed and fails all after the one that failed
 * 
 * We use Promise.all here because we need both to work for the app to work
 * 
 * const handleInitialData = () => async (dispatch) => {
  try {
    const goals = await API.fetchGoals();
    const todos = await API.fetchTodos();

    return dispatch(receiveDataAction(goals, todos));
  } catch (error) {
    console.log(error);
  }
}; 
 */
const handleInitialData = () => (dispatch) =>
  Promise.all([API.fetchGoals(), API.fetchTodos()]).then(([goals, todos]) => {
    dispatch(receiveDataAction(goals, todos));
  });

/**
 * Action creator to add a goal
 * @param {goal} goal - The goal to add
 * @returns {{type: string, goal: goal}}
 */
const addGoalAction = (goal) => ({ type: ADD_GOAL, goal });

/**
 * Async action creator to add goal
 * @param {string} goalName - goal name to add
 * @param {function} cb - callback fundtion to empty formm input
 * @returns {promise}
 */
const handleAddGoal = (goalName, cb) => (dispatch) =>
  API.saveGoal(goalName)
    .then((goal) => {
      cb();

      dispatch(addGoalAction(goal));
    })
    .catch(() => alert("An error occurred. Try again"));

/**
 * Action craetor to remove a goal
 * @param {id} id - id of goal to remove
 * @returns {{type: string, id: id}}
 */
const removeGoalAction = (id) => ({ type: REMOVE_GOAL, id });

/**
 * Async action creator to delete goal
 * @param {goal} goal - The goal to delete
 * @return {promise}
 */
const handleDeleteGoal = (goal) => (dispatch) => {
  dispatch(removeGoalAction(goal.id));

  return API.deleteGoal(goal.id).catch(() => {
    alert("An error occurred. Try again");
    dispatch(addGoalAction(goal));
  });
};


/**
 * Action creator to add a todo
 * @param {todo} todo - todo to add
 * @returns {{type: string, todo: todo}}
 */
const addTodoAction = (todo) => ({ type: ADD_TODO, todo });

/**
 * Async action creator to add todo
 * @param {string} todoName - todo name to add
 * @param {function} cb - callback fundtion to empty formm input
 * @returns {promise}
 */
const handleAddTodo = (todoName, cb) => (dispatch) =>
  API.saveTodo(todoName)
    .then((todo) => {
      cb();
      dispatch(addTodoAction(todo));
    })
    .catch(() => alert("An error occurred. Try again"));

/**
 * Action creator to remove a todo
 * @param {id} id  - id of todo to remove
 * @returns {{type:string: id:id}}
 */
const removeTodoAction = (id) => ({ type: REMOVE_TODO, id });

/**
 * Async action creator to remove todo
 * @param {todo} todo - todo to remove
 * @return {promise}
 */
const handleDeleteTodo = (todo) => (dispatch) => {
  dispatch(removeTodoAction(todo.id));

  return API.deleteTodo(todo.id).catch(() => {
    alert("An error occurred. Try again");
    dispatch(addTodoAction(todo));
  });
};

/**
 * Action creator to toggle a todo
 * @param {id} id - id of todo to toggle
 * @returns {{type: string, id: id}}
 */
const toggleTodoAction = (id) => ({ type: TOGGLE_TODO, id });

/**
 * Async action creator to toggle todo
 * @param {id} id - id of todo to toggle
 * @returns {promise}
 */
const handleToggle = (id) => (dispatch) => {
  dispatch(toggleTodoAction(id));

  return API.saveTodoToggle(id).catch(() => {
    alert("An error occurred. Try again");
    dispatch(toggleTodoAction(id));
  });
};

/**
 ** REDUCER CODE
 */

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

/**
 * Todo reducer
 * @param {todo[]} [state=[]] - Todo state
 * @param {action} action - Action changing the state
 * @returns {todo[]} - Updated state
 */
const todos = (state = [], action) =>
  ({
    ADD_TODO: [...state, action.todo],
    REMOVE_TODO: state.filter(({ id }) => id !== action.id),
    RECEIVE_DATA: action.todo,
    TOGGLE_TODO: state.map((todo) =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
    ),
  }[action.type] || state);

/**
 * Goal Reducer
 * @param {goal[]} [state=[]] - Goal state
 * @param {action} action  - Action changing the state
 * @returns {goal[]} - Updated state
 */
const goals = (state = [], action) =>
  ({
    ADD_GOAL: [...state, action.goal],
    RECEIVE_DATA: action.goal,
    REMOVE_GOAL: state.filter(({ id }) => id !== action.id),
  }[action.type] || state);


/**
 ** STORE CODE
 */

/**
 * Custom thunk function, replaced by ReduxThunk.default
 * Allows me to dispatch a function, or async action creator
 * It allows me to even call a .then() or .catch()  even when that async action creator is returned,
 * The API variable or any other variable can be added like so: applyMiddleware(thunk.withExtraArgument({api: api, name: "Jedidiah"})) and so on
 * @param {store} store - the redux store
 */
const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") return action(store.dispatch);

  return next(action);
};

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

/**
 * Redux store
 */
const store = Redux.createStore(
  Redux.combineReducers({
    loading,
    todos,
    goals,
  }),
  Redux.applyMiddleware(
    ReduxPromiseMiddleware.default,
    ReduxThunk.default,
    checker,
    logger
  )
);

/**
 * Generates Random ID
 * @returns {id}
 */
const generateId = () =>
  Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
