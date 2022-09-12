import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./dushunjeler.scss";

const MushderiUmumy = lazy(() => import("./musderiUmumy/mushderiUmumy"));

class Dushunjeler extends React.Component {
  render() {
    return (
      <div className="dushunjeler">
        <Routes>
          <Route path="/mushderiumumy" element={<MushderiUmumy />} />
        </Routes>
      </div>
    );
  }
}

export default Dushunjeler;
