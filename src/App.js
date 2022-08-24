import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Film from "./pages/Film/Film";
import Music from "./pages/Music/Music";
import Galery from "./pages/Galery/Galery";
import Profil from "./pages/Profil/Profil";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profil">Profil</Link>
        </li>
        <li>
          <Link to="/Film">Film</Link>
        </li>
        <li>
          <Link to="/Music">Music</Link>
        </li>
        <li>
          <Link to="/Galery">Galery</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Film" element={<Film />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Galery" element={<Galery />} />
      </Routes>
    </>
  );
}

export default App;
