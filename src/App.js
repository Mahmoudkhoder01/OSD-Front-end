import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import PrivateRoutes from "./Pages/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes/>}>

        <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
