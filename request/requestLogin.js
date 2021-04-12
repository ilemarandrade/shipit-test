import { authenticateActions } from "../redux/actions/authenticateActions";
import { useRouter } from "next/router";
import store from "../redux/store";
import { requestCommunes } from "./requestCommunes";
import { communesDataActions } from "../redux/actions/communesDataActions";

const requestLogin = async () => {
  /*  const response = await setTimeout(() => {
    return true;
  }, 3000);

  if (response) {
    
  } */
  const data = await requestCommunes();
  console.log(data);
  if (data) {
    store.dispatch(authenticateActions());
    store.dispatch(communesDataActions(data));
  }
};
export default requestLogin;
