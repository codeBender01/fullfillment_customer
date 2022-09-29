import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./mushderiler.scss";
const AhliMushderiler = lazy(() => import("./ahliMushderiler/ahliMushderiler"));

class Mushderiler extends React.Component {
  render() {
    return (
      <div className="mushderiler">
        <Routes>
          <Route path="/ahlimushderiler" element={<AhliMushderiler />} />
        </Routes>
      </div>
    );
  }
}

export default Mushderiler;
