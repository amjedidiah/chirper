// /Module imports
import {createStore} from 'redux';

// Reducers import
import reducers from 'redux/reducers';

// Store
const store = createStore(reducers);

// Store export
export default store;
