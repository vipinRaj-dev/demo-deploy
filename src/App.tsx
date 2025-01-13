import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import "./App.css";
import VitePage from "./components/VitePage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vite" element={<VitePage />} />
      </Routes>
    </Router>
  );
}

export default App;
