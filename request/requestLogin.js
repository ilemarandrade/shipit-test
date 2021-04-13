import { authenticateActions } from "../redux/actions/authenticateActions";
import store from "../redux/store";
import { requestCommunes } from "./requestCommunes";
import { communesDataActions } from "../redux/actions/communesDataActions";
import { loadingActions } from "../redux/actions/loadingActions";
import { dataLogin } from "../data/dataLogin";

const requestLogin = async (values) => {
  try {
    const validateUser = dataLogin.filter((e) => e.email == values.email && e.password == values.password);
    if (validateUser.length > 0) {
      store.dispatch(loadingActions(true));

      const data = await requestCommunes();
      if (data) {
        store.dispatch(authenticateActions());
        store.dispatch(communesDataActions(data));
      }
    } else {
      alert("Estos datos no pertenen a ningun usuario de esta app");
      store.dispatch(loadingActions(false));
    }
  } catch (e) {
    console.error(e);
  }
};
export default requestLogin;
