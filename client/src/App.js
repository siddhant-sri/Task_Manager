import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Home from "./Components/Home";
import Content from "./Components/Content";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/main" element={<Content />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
