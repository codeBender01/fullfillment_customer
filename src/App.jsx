import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          {/* <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contactus" element={<ContactUs />} /> */}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
