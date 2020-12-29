// /Module imports
import {createStore} from 'redux';

// Reducers import
import reducers from 'redux/reducers';
import middleware from 'redux/middleware';

/**
 * Redux store
 * @const {store}
 */
const store = createStore(reducers, middleware );

// Store export
export default store;
