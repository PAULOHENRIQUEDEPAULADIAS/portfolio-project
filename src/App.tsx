import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Album from "./components/album/album";
import Work from "./components/work/work";
import Writing from "./components/writing/writing";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Album" element={<Album />} />
        <Route path="/Writing" element={<Writing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
