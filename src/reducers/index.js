// Module imports
import { combineReducers } from "redux";

// Type definitions
import "../defiinitions.js";

// Reducer imports
import goals from "./goals";
import loading from "./loading";
import todos from "./todos";

export default combineReducers({ goals, loading, todos });
