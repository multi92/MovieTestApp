import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "../src/App.css";
import history from "../src/history";
import HomeDetails from "./Pages/HomeDetails";

function App() {
  return (
    <Router history={history}>
      {/* <nav>
        <Link to="/"> Movie1 </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeDetails" element={<HomeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
