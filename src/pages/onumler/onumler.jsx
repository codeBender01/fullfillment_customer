import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./onumler.scss";

const SubOnumler = lazy(() => import("./subOnumler/subOnumler"));
const Onunden = lazy(() => import("./onunden/onunden"));
const Hasabat = lazy(() => import("./hasabatKategoriyalary/hasabatCat"));
const Inwentar = lazy(() => import("./inwentar/inwentar"));

class Onumler extends React.Component {
  render() {
    return (
      <div className="onumler">
        <Routes>
          <Route path="/onumler" element={<SubOnumler />} />
          <Route path="/onunden" element={<Onunden />} />
          <Route path="/hasabat" element={<Hasabat />} />
          <Route path="/inwentar" element={<Inwentar />} />
        </Routes>
      </div>
    );
  }
}

export default Onumler;
