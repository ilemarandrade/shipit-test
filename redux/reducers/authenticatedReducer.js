import { AUTHENTICATE } from "../actions/authenticateActions";
const stateInitial = { authenticated: false };
const communesDataReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, authenticated: true };
    default:
      return { ...state };
  }
};

export default communesDataReducer;
