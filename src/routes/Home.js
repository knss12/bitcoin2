import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home(props) {
  let navigate = useNavigate();

  let movinginfo0 = () => {
    if (props.coin && props.coin[0].rank) {
      console.log(props.coin[0].rank);
      navigate("/coininfo/0");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo1 = () => {
    if (props.coin && props.coin[1].rank) {
      console.log(props.coin[1].rank);
      navigate("/coininfo/1");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo2 = () => {
    if (props.coin && props.coin[2].rank) {
      console.log(props.coin[2].rank);
      navigate("/coininfo/2");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo3 = () => {
    if (props.coin && props.coin[3].rank) {
      console.log(props.coin[3].rank);
      navigate("/coininfo/3");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo4 = () => {
    if (props.coin && props.coin[4].rank) {
      console.log(props.coin[4].rank);
      navigate("/coininfo/4");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo5 = () => {
    if (props.coin && props.coin[5].rank) {
      console.log(props.coin[5].rank);
      navigate("/coininfo/5");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo6 = () => {
    if (props.coin && props.coin[6].rank) {
      console.log(props.coin[6].rank);
      navigate("/coininfo/6");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo7 = () => {
    if (props.coin && props.coin[7].rank) {
      console.log(props.coin[7].rank);
      navigate("/coininfo/7");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo8 = () => {
    if (props.coin && props.coin[8].rank) {
      console.log(props.coin[8].rank);
      navigate("/coininfo/8");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo9 = () => {
    if (props.coin && props.coin[9].rank) {
      console.log(props.coin[9].rank);
      navigate("/coininfo/9");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo10 = () => {
    if (props.coin && props.coin[10].rank) {
      console.log(props.coin[10].rank);
      navigate("/coininfo/10");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo11 = () => {
    if (props.coin && props.coin[11].rank) {
      console.log(props.coin[11].rank);
      navigate("/coininfo/11");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo12 = () => {
    if (props.coin && props.coin[12].rank) {
      console.log(props.coin[12].rank);
      navigate("/coininfo/12");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo13 = () => {
    if (props.coin && props.coin[13].rank) {
      console.log(props.coin[13].rank);
      navigate("/coininfo/13");
    } else {
      console.log("Coin name is not available");
    }
  };

  let movinginfo14 = () => {
    if (props.coin && props.coin[14].rank) {
      console.log(props.coin[14].rank);
      navigate("/coininfo/14");
    } else {
      console.log("Coin name is not available");
    }
  };

  return (
    <>
      <div>
        <h4 className="my-3 mx-3">최고의 암호화폐 거래</h4>
        <p className="mx-3">
          CoinMarket은 트래픽, 유동성, 거래량 및 보고된 거래량의 정당성에 대한
          신뢰도를 기준으로 거래소의 순위를 매기고 거래량을 파악합니다.
        </p>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>rank</th>
            <th>Total_supply</th>
          </tr>
        </thead>

        {/* <tbody>
          {props.coin.map((a, i) => {
            return (
              <tr>
                <td>{props.coin[i].rank}</td>
                <td
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={
                    movinginfo
                    // () => {navigate("/coininfo/0");
                    //navigate("/coininfo/1");
                  }
                >
                  {props.coin[i].id}
                </td>
                <td>{props.coin[i].name}</td>
                <td>{props.coin[i].symbol}</td>
                <td>{props.coin[i].rank}</td>
                <td>{props.coin[i].total_supply}</td>
              </tr>
            );
          })}
        </tbody> */}
        <tbody>
          <tr>
            <td>{props.coin[0].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo0}
            >
              {props.coin[0].id}
            </td>
            <td>{props.coin[0].name}</td>
            <td>{props.coin[0].symbol}</td>
            <td>{props.coin[0].rank}</td>
            <td>{props.coin[0].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[1].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo1}
            >
              {props.coin[1].id}
            </td>
            <td>{props.coin[1].name}</td>
            <td>{props.coin[1].symbol}</td>
            <td>{props.coin[1].rank}</td>
            <td>{props.coin[1].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[2].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo2}
            >
              {props.coin[2].id}
            </td>
            <td>{props.coin[2].name}</td>
            <td>{props.coin[2].symbol}</td>
            <td>{props.coin[2].rank}</td>
            <td>{props.coin[2].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[3].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo3}
            >
              {props.coin[3].id}
            </td>
            <td>{props.coin[3].name}</td>
            <td>{props.coin[3].symbol}</td>
            <td>{props.coin[3].rank}</td>
            <td>{props.coin[3].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[4].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo4}
            >
              {props.coin[4].id}
            </td>
            <td>{props.coin[4].name}</td>
            <td>{props.coin[4].symbol}</td>
            <td>{props.coin[4].rank}</td>
            <td>{props.coin[4].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[5].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo5}
            >
              {props.coin[5].id}
            </td>
            <td>{props.coin[5].name}</td>
            <td>{props.coin[5].symbol}</td>
            <td>{props.coin[5].rank}</td>
            <td>{props.coin[5].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[6].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo6}
            >
              {props.coin[6].id}
            </td>
            <td>{props.coin[6].name}</td>
            <td>{props.coin[6].symbol}</td>
            <td>{props.coin[6].rank}</td>
            <td>{props.coin[6].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[7].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo7}
            >
              {props.coin[7].id}
            </td>
            <td>{props.coin[7].name}</td>
            <td>{props.coin[7].symbol}</td>
            <td>{props.coin[7].rank}</td>
            <td>{props.coin[7].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[8].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo8}
            >
              {props.coin[8].id}
            </td>
            <td>{props.coin[8].name}</td>
            <td>{props.coin[8].symbol}</td>
            <td>{props.coin[8].rank}</td>
            <td>{props.coin[8].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[9].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo9}
            >
              {props.coin[9].id}
            </td>
            <td>{props.coin[9].name}</td>
            <td>{props.coin[9].symbol}</td>
            <td>{props.coin[9].rank}</td>
            <td>{props.coin[9].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[10].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo10}
            >
              {props.coin[10].id}
            </td>
            <td>{props.coin[10].name}</td>
            <td>{props.coin[10].symbol}</td>
            <td>{props.coin[10].rank}</td>
            <td>{props.coin[10].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[11].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo11}
            >
              {props.coin[11].id}
            </td>
            <td>{props.coin[11].name}</td>
            <td>{props.coin[11].symbol}</td>
            <td>{props.coin[11].rank}</td>
            <td>{props.coin[11].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[12].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo12}
            >
              {props.coin[12].id}
            </td>
            <td>{props.coin[12].name}</td>
            <td>{props.coin[12].symbol}</td>
            <td>{props.coin[12].rank}</td>
            <td>{props.coin[12].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[13].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo13}
            >
              {props.coin[13].id}
            </td>
            <td>{props.coin[13].name}</td>
            <td>{props.coin[13].symbol}</td>
            <td>{props.coin[13].rank}</td>
            <td>{props.coin[13].total_supply}</td>
          </tr>
          <tr>
            <td>{props.coin[14].rank}</td>
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={movinginfo14}
            >
              {props.coin[14].id}
            </td>
            <td>{props.coin[14].name}</td>
            <td>{props.coin[14].symbol}</td>
            <td>{props.coin[14].rank}</td>
            <td>{props.coin[14].total_supply}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Home;
