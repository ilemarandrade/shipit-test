import { ADD_DATA_QUOTE } from "../actions/quoteDataActions";
const stateInitial = { data: {} };
const quoteDataReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case ADD_DATA_QUOTE:
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export default quoteDataReducer;
