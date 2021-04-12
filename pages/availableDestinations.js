import Head from "next/head";
import { couriersAvailables } from "../handler/formatDataCommunes";
import AvailableDestinations from "../views/availableDestinations";
import { connect } from "react-redux";
import { ADD_DATA_COMMUNES } from "../redux/actions/communesDataActions";
import { useSelector } from "react-redux";

function availableDestinations({}) {
  let dataCommunes = useSelector((state) => state.communesData.data);
  let dataFormat = couriersAvailables(dataCommunes, [
    "name",
    "couriers_availables",
  ]);
  return (
    <div className="container">
      <Head>
        <title>Shipit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AvailableDestinations
          {...{
            data: dataFormat,
            valuesHead: ["Nombre de la comuna", "Carriers Disponibles"],
          }}
        />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({ communes: state.communesData.request });

const mapDispatchToProps = { ADD_DATA_COMMUNES };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(availableDestinations);
