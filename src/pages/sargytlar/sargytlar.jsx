import React, { lazy } from "react";
import "./sargytlar.scss";
import { Routes, Route } from "react-router-dom";
const IberSonky = lazy(() => import("./iberildi/sonky/sonky"));
const Tranzitda = lazy(() => import("./iberildi/tranzitda/tranzitda"));
const Gowshuryldy = lazy(() => import("./iberildi/gowshuryldy/gowshuryldy"));
const MeseleCykanlar = lazy(() =>
  import("./iberildi/meseleCykanlar/meseleCykanlar")
);
const Yatyrylanlar = lazy(() => import("./iberildi/yatyrylanlar/yatyrylanlar"));
const YerineSonky = lazy(() => import("./yerineYetirmek/sonky/sonky"));
const Ach = lazy(() => import("./toparlar/ac/ac"));
const Ishlenildi = lazy(() => import("./toparlar/ishlenildi/ishlenildi"));
const Arhiwlenen = lazy(() => import("./toparlar/arhiwlenen/arhiwlenen"));

class Sargytlar extends React.Component {
  render() {
    return (
      <div className="sargytlar">
        <Routes>
          <Route path="/iberildi/sonky" element={<IberSonky />} />
          <Route path="/iberildi/tranzitda" element={<Tranzitda />} />
          <Route path="/iberildi/gowshuryldy" element={<Gowshuryldy />} />
          <Route path="/iberildi/meselecykanlar" element={<MeseleCykanlar />} />
          <Route path="/iberildi/yatyrylanlar" element={<Yatyrylanlar />} />
          <Route path="/yerineyetirmek/sonky" element={<YerineSonky />} />
          <Route path="/toparlar/ach" element={<Ach />} />
          <Route path="/toparlar/ishlenildi" element={<Ishlenildi />} />
          <Route path="/toparlar/arhiwlenen" element={<Arhiwlenen />} />
        </Routes>
      </div>
    );
  }
}

export default Sargytlar;
