import store from "../redux/store";
import { loadingActions } from "../redux/actions/loadingActions";

const createShipmentHandlerRequest = async (request, actions) => {
  try {
    store.dispatch(loadingActions(true));
    const data = await request;
    if (data) {
      actions && actions;
      store.dispatch(loadingActions(false));
    }
  } catch (e) {
    alert(e);
  }
};
export default createShipmentHandlerRequest;
