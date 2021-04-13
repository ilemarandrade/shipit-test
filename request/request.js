import store from "../redux/store";
import { loadingActions } from "../redux/actions/loadingActions";
import { quoteDataActions } from "../redux/actions/quoteDataActions";

const request = async (request, actions) => {
  store.dispatch(loadingActions(true));
  const data = await request;
  try {
    if (data) {
      actions && actions;
      store.dispatch(quoteDataActions(data));
    }
  } catch (e) {
    alert(e);
  }
};
export default request;
