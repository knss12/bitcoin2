import { useParams } from "react-router-dom";

function Coininfo(props) {
  let { id } = useParams();

  return (
    <div className="info">
      <h1 className="my-5 mx-5">{props.coin[id].name}</h1>
      <div className="row">
        <div>
          <p className="mx-5">Spot 거래량(24시간)</p>
          <h1 className="mx-5">$ {props.coin[id].quotes.USD.price}</h1>
        </div>
        <div className="col-6 my-5">
          <h2>First_Update</h2>
          <p>{props.coin[id].first_data_at}</p>
        </div>
        <div className="col-6 my-5">
          <h2>Last_Update</h2>
          <p>{props.coin[id].last_updated}</p>
        </div>
        <div className="col-6 my-5">
          <h2>Max_Supply</h2>
          <p>{props.coin[id].max_supply}</p>
        </div>
        <div className="col-6 my-5">
          <h2>Beta_Value</h2>
          <p>{props.coin[id].beta_value}</p>
        </div>
      </div>
    </div>
  );
}

export default Coininfo;
