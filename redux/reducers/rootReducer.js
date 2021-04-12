import communesDataReducer from "./communesDataReducer";
import { combineReducers } from "redux";
import authenticatedReducer from "./authenticatedReducer";

const rootReducer = combineReducers({
  communesData: communesDataReducer,
  authenticated: authenticatedReducer,
});

export default rootReducer;
