import React, { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Dolandyrysh = lazy(() => import("./pages/dolandyrysh/dolandyrysh"));
const BazarDolandyrysh = lazy(() =>
  import("./pages/bazar/dolandyrysh/bazarDolandyrysh")
);
const Sargytlar = lazy(() => import("./pages/sargytlar/sargytlar"));
const Onumler = lazy(() => import("./pages/onumler/onumler"));
const Mushderiler = lazy(() => import("./pages/mushderiler/mushderiler"));
const Login = lazy(() => import("./pages/login/login"));
const SignUp = lazy(() => import("./pages/signup/signup"));
const Banners = lazy(() => import("./pages/bazar/bannerlar/bannerlar"));
const Messages = lazy(() => import("./pages/bazar/hatlar/hatlar"));
const Requests = lazy(() => import("./pages/bazar/teswirler/teswirler"));

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Header />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to="/management" replace />} />
            <Route path="/management" element={<Dolandyrysh />} />
            <Route path="/marketmanagement" element={<BazarDolandyrysh />} />
            <Route path="/banners" element={<Banners />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/orders" element={<Sargytlar />}></Route>
            <Route path="/products" element={<Onumler />}></Route>
            <Route path="/customers" element={<Mushderiler />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
