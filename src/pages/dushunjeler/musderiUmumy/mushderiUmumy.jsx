import React from "react";
import Chart from "../../../components/BarChart";
import "./mushderi-umumy.scss";

const stats = [
  {
    id: 1,
    number: 0,
    statText: "Täze müşderiler",
  },
  {
    id: 2,
    number: 0,
    statText: "Yzyna gaýtarylan müşderiler",
  },
  {
    id: 3,
    number: 0,
    statText: "Täze müşderiler GMV",
  },
  {
    id: 4,
    number: 0,
    statText: "Yzyna gaýtarylan müşderiler GMV",
  },
];

function Stat(props) {
  return (
    <div className="stat">
      <span className="number">{props.number}</span>
      <span className="stat-text">{props.statText}</span>
    </div>
  );
}

class MushderiUmumy extends React.Component {
  render() {
    return (
      <div className="customer">
        <div className="title-customer">
          <h1>Müşderi barada umumy syn</h1>
        </div>
        <div className="chart">
          <Chart />
        </div>
        <div className="labels">
          <div className="label">
            <div className="new-order"></div>
            <span>Täze müşderi sargytlary</span>
          </div>
          <div className="label">
            <div className="returns"></div>
            <span>Müşderi sargytlaryny yzyna gaýtarmak</span>
          </div>
        </div>

        <div className="stats">
          {stats.map((stat) => {
            return (
              <Stat
                key={stat.id}
                number={stat.number}
                statText={stat.statText}
              />
            );
          })}
        </div>

        <div className="saved-info">
          <div className="info">
            <span className="info-title">Lakamlary saklaň</span>
            <div className="props">
              <span>Daşaýjy</span>
              <span>Qty</span>
              <span>Paýlaş</span>
            </div>
            <div className="data">
              <span className="empty">Entek hiç hili ulag goşmadyňyz</span>
            </div>
          </div>
          <div className="info">
            <span className="info-title">Dükan boýunça satuw</span>
            <div className="props">
              <span>Dükan</span>
              <span>Girdeji</span>
            </div>
            <div className="data">
              <span className="empty">Entek hiç hili ulag goşmadyňyz</span>
              <span className="amount">$0.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MushderiUmumy;
