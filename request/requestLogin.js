import { authenticateActions } from "../redux/actions/authenticateActions";
import store from "../redux/store";
import { requestCommunes } from "./requestCommunes";
import { communesDataActions } from "../redux/actions/communesDataActions";
import { loadingActions } from "../redux/actions/loadingActions";

const requestLogin = async () => {
  store.dispatch(loadingActions(true));
  const data = await requestCommunes();
  if (data) {
    store.dispatch(authenticateActions());
    store.dispatch(communesDataActions(data));
  }
};
export default requestLogin;
