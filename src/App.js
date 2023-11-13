import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={Login} />
          <Route path="/" element={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
