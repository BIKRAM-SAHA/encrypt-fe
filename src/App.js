import "./App.css";
import Home from "./pages/Home";
import Text from "./pages/Text";
import Image from "./pages/Image";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<Image />} />
          <Route path="/text" element={<Text />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
