import { SHOW_LOADING } from "../actions/loadingActions";
const stateInitial = { loading: false };
const loadingReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, loading: action.payload };
    default:
      return { ...state };
  }
};

export default loadingReducer;
