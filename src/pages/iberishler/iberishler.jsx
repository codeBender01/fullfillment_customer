import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./iberishler.scss";

const TolegGarash = lazy(() => import("./tolegGarashyanlar/tolegGarash"));
const Tutulanlar = lazy(() => import("./tutulanlar/tutulanlar"));
const IberGarash = lazy(() => import("./iberGarashyanlar/iberGarash"));

class Iberishler extends React.Component {
  render() {
    return (
      <div className="iberishler">
        <Routes>
          <Route path="/toleggarashyanlar" element={<TolegGarash />} />
          <Route path="/tutulanlar" element={<Tutulanlar />} />
          <Route path="/ibergarashyanlar" element={<IberGarash />} />
        </Routes>
      </div>
    );
  }
}

export default Iberishler;
