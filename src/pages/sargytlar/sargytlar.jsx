import React, { lazy } from "react";
import "./sargytlar.scss";
import { Routes, Route } from "react-router-dom";
const Sonky = lazy(() => import("./iberildi/sonky"));

class Sargytlar extends React.Component {
  render() {
    return (
      <div className="sargytlar">
        <Routes>
          <Route path="/iberildi/sonky" element={<Sonky />} />
        </Routes>
      </div>
    );
  }
}

export default Sargytlar;
