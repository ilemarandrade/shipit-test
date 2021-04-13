import { ADD_DATA_COMMUNES } from "../actions/communesDataActions";
const stateInitial = { data: {} };
const communesDataReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case ADD_DATA_COMMUNES:
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export default communesDataReducer;
