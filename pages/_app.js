import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import "../app.css";
import store from "../redux/store";
import withRedux from "next-redux-wrapper";

export async function getStaticProps(context) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/vnd.shipit.v4");
  myHeaders.append("X-Shipit-Email", "ACCOUNT_EMAIL");
  myHeaders.append("X-Shipit-Access-Token", "ACCOUNT_TOKEN");

  var raw;

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = await fetch("https://api.shipit.cl/v/communes", requestOptions);

  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
function MyApp({ Component, pageProps, data }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
