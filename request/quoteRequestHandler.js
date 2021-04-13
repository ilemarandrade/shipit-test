import store from "../redux/store";
import { loadingActions } from "../redux/actions/loadingActions";
import { quoteDataActions } from "../redux/actions/quoteDataActions";

const quoteRequestHandler = async (request, actions) => {
  try {
    store.dispatch(loadingActions(true));
    const data = await request;
    if (data) {
      actions && actions;
      store.dispatch(quoteDataActions(data));
    }
  } catch (e) {
    alert(e);
  }
};
export default quoteRequestHandler;
