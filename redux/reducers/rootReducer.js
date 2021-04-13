import communesDataReducer from "./communesDataReducer";
import { combineReducers } from "redux";
import authenticatedReducer from "./authenticatedReducer";
import loadingReducer from "./loadingReducer";
import quoteDataReducer from "./quoteDataReducer";

const rootReducer = combineReducers({
  communesData: communesDataReducer,
  authenticated: authenticatedReducer,
  loading: loadingReducer,
  quoteData: quoteDataReducer,
});

export default rootReducer;
