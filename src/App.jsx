import React, { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Iberishler from "./pages/iberishler/iberishler";

const Bortda = lazy(() => import("./pages/bortda/bortda"));
const Dushunjeler = lazy(() => import("./pages/dushunjeler/dushunjeler"));
const Sargytlar = lazy(() => import("./pages/sargytlar/sargytlar"));
const Onumler = lazy(() => import("./pages/onumler/onumler"));
// const Iberishler = lazy(() => import("./pages/iberishler/iberishler"));
const Mushderiler = lazy(() => import("./pages/mushderiler/mushderiler"));
const Login = lazy(() => import("./pages/login/login"));
const SignUp = lazy(() => import("./pages/signup/signup"));

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
            <Route path="/dushunjeler/*" element={<Dushunjeler />}></Route>
            <Route path="/sargytlar/*" element={<Sargytlar />}></Route>
            <Route path="/onumler/*" element={<Onumler />}></Route>
            <Route path="/iberishler/*" element={<Iberishler />}></Route>
            <Route path="/mushderiler/*" element={<Mushderiler />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
