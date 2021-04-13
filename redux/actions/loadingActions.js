//Action Types
export const SHOW_LOADING = "SHOW_LOADING";

//Action Creator
export const loadingActions = (show) => ({
  type: SHOW_LOADING,
  payload: show,
});
