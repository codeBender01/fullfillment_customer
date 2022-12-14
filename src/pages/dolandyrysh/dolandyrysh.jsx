import React from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../../images/profilePic.png";
import { BsDot } from "react-icons/bs";
import { IconContext } from "react-icons";
import DataTable from "../../components/table/Table";

import "./dolandyrysh.scss";

const columns = [
  { field: "name", headerName: "Aralyk", width: 150 },
  { field: "total", headerName: "Möçberi", width: 100 },
  { field: "quantity", headerName: "Sany", width: 100 },
];

const rows = [
  {
    id: "today",
    name: "Şu günki satuwlar:",
    total: "2000 TMT",
    quantity: 12,
  },
  {
    id: "week",
    name: "7 gün içinde:",
    total: "2000 TMT",
    quantity: 88,
  },
  {
    id: "twoweeks",
    name: "15 gün içinde:",
    total: "4000 TMT",
    quantity: 88,
  },
  {
    id: "month",
    name: "30 gün içinde:",
    total: "4000 TMT",
    quantity: 88,
  },
];

const arr = [1, 2, 3];

function Dolandyrysh() {
  return (
    <div className="dolandyrysh padding flex">
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

        <DataTable
          headerColor="#3C3C48"
          rows={rows}
          columns={columns}
          rowHeight={40}
          headerHeight={40}
        />
      </div>

      <div className="payment-info">
        <h3 className="font-size-medium">Tölegleriň maglumatlary</h3>
        <div className="date last-refresh">
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

        <div className="accounts">
          <div className="last-time-pays account">
            <div>
              Soňky tölegler: <span>5000 TMT</span>
            </div>
            <p className="font-size-small">
              Size 2022-nji ýylyň 15-nji noýabrynda nagt tölendi.
            </p>
          </div>
          <div className="account">
            <div>
              Bank balansy: <span>2 000 TMT</span>
            </div>
          </div>
          <div className="account">
            <div>
              Nagt pul balansy: <span>10 000 TMT</span>
            </div>
          </div>
        </div>

        <NavLink to="#">
          Giňişleýin maglumatlar<span>&gt;</span>
        </NavLink>
      </div>

      <div className="messages-tab">
        <h3 className="font-size-medium">Soňky gelen hatlar</h3>
        <div className="inbox">
          <div className="message active">
            <div className="profile-pic">
              <img src={profilePic} alt="profile" />
            </div>

            <div className="text">
              <div className="name-date">
                <span>Katy</span>
                <div className="time">
                  <span>13:46</span>
                  <span>11/12</span>
                  <IconContext.Provider value={{ color: "#F90000" }}>
                    <BsDot className="orange-dot" size={20} />
                  </IconContext.Provider>
                </div>
              </div>
              <div className="msg-preview">
                Hi I wanted to konw about etc etc?
              </div>
            </div>
          </div>

          {arr.map((el) => {
            return (
              <div className="message" key={el}>
                <div className="profile-pic">
                  <img src={profilePic} alt="profile" />
                </div>

                <div className="text">
                  <div className="name-date">
                    <span>Katy</span>
                    <div className="time">
                      <span>13:46</span>
                      <span>11/12</span>
                      <IconContext.Provider value={{ color: "#F90000" }}>
                        <BsDot className="orange-dot" size={20} />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <div className="msg-preview">
                    Hi I wanted to konw about etc etc?
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <NavLink to="#">
          Ählisini oka<span>&gt;</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Dolandyrysh;
