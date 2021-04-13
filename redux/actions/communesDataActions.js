//Action Types
export const ADD_DATA_COMMUNES = "ADD_DATA_COMMUNES";

//Action Creator
export const communesDataActions = (data) => ({
  type: ADD_DATA_COMMUNES,
  payload: data,
});
