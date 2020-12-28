// Module imports
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Middleware imports
import logger from 'redux/middleware/logger';

// Export middlewares
export default applyMiddleware(thunk, logger );
