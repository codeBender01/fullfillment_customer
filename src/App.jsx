import React, { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Bortda = lazy(() => import("./pages/bortda/bortda"));

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Header />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route exact path="/bortda" element={<Bortda />} />
            <Route path="/" element={<Navigate to="/bortda" replace />} />
            {/* <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contactus" element={<ContactUs />} /> */}
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
