import React from "react";
import { NavLink } from "react-router-dom";
import "./bazar-d.scss";

const salesTable = [
  {
    id: "coupon1",
    name: "Kupon1",
    quantity: 999,
    duration: "30 gün",
    dueDate: "12/10/2022",
  },
  {
    id: "coupon2",
    name: "Kupon2",
    quantity: 999,
    duration: "30 gün",
    dueDate: "12/10/2022",
  },
  {
    id: "coupon3",
    name: "Kupon3",
    quantity: 999,
    duration: "30 gün",
    dueDate: "12/10/2022",
  },
  {
    id: "coupon4",
    name: "Kupon4",
    quantity: 999,
    duration: "30 gün",
    dueDate: "12/10/2022",
  },
];

function bazarDolandyrysh() {
  return (
    <div className="bazar-d padding flex">
      <div className="payment-info">
        <h3 className="font-size-medium">Ulanyjy aktiwligi</h3>
        <div className="dates last-refresh">
          <label htmlFor="date" className="font-size-small">
            Soňky täzelenen wagty:
          </label>
          <span id="date" className="font-size-small">
            15:00
          </span>
          <span id="date" className="font-size-small">
            10/10/22
          </span>
        </div>
        <div className="line"></div>

        <div className="count users font-size-mid">
          <div className="days">
            1 günki ulanyjylar:<span>999</span>
          </div>
          <div className="days">
            7 günki ulanyjylar:<span>999</span>
          </div>
          <div className="days">
            30 günki ulanyjylar:<span>999</span>
          </div>
        </div>
        <div className="count sales font-size-mid">
          <div className="days">
            1 günki satyşlar:<span>999 TMT</span>
          </div>
          <div className="days">
            7 günki satyşlar:<span>999 TMT</span>
          </div>
          <div className="days">
            30 günki satyşlar:<span>999 TMT</span>
          </div>
        </div>
      </div>

      <div className="sales-info">
        <h3 className="font-size-medium">Satuwyň maglumatlary</h3>
        <div className="date last-refresh">
          <span className="font-size-small">Soňky täzelenen wagty:</span>
          <span id="date" className="font-size-small">
            15:00
          </span>
          <span id="date" className="font-size-small">
            10/10/22
          </span>
        </div>
        <table>
          <thead>
            <th>Ady</th>
            <th>Ulanylan sany</th>
            <th>Dowamlylygy</th>
            <th>Gutarýan möhleti</th>
          </thead>
          <tbody>
            {salesTable.map((tr) => {
              return (
                <tr key={tr.id}>
                  <td>{tr.name}</td>
                  <td>{tr.quantity}</td>
                  <td>{tr.duration}</td>
                  <td>{tr.dueDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <NavLink to="#">
          Ähli kuponlar<span>&gt;</span>
        </NavLink>
      </div>
    </div>
  );
}

export default bazarDolandyrysh;
