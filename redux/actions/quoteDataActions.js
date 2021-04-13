//Action Types
export const ADD_DATA_QUOTE = "ADD_DATA";

//Action Creator
export const quoteDataActions = (data) => ({
  type: ADD_DATA_QUOTE,
  payload: data,
});
