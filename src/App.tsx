import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Album from "./components/album/album";
import Work from "./components/work/work";
import Writing from "./components/writing/writing";
import NavBar from "./components/navbar/navbar";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.dataset.theme = theme; // aplica o tema globalmente
  }, [theme]);

  return (
    <BrowserRouter>
      <NavBar toggleTheme={toggleTheme} currentTheme={theme} />
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
