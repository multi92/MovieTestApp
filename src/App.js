import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "../src/App.css";
import history from "../src/history";
import Movie1Details from "./Pages/Movie1Details";
import Movie2Details from "./Pages/Movie2Details";
import Movie3Details from "./Pages/Movie3Details";

function App() {
  return (
    <Router history={history}>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies1" element={<Movie1Details />} />
        <Route path="/Movies2" element={<Movie2Details />} />
        <Route path="/Movies3" element={<Movie3Details />} />
      </Routes>
    </Router>
  );
}

export default App;
