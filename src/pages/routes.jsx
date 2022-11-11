import { Route } from "react-router-dom";
//import { AppProvider } from "./context/appProvider";
//import { Private } from "./components/Middleware/Private";
//import { IsConsultor } from "./components/Middleware/IsConsultor";
import { Routes } from "react-router";
import Game from "./Game";
import Games from "./Games";
import Collectors from "./Collectors";
import Statistics from "./Statistics";
import Login from "./Login";
import CollectorsProfile from "./CollectionsProfile";

export default function MyRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jogos" element={<Games />} />
        <Route path="/jogos/jogo" element={<Game />} />
        <Route path="/colecionadores" element={<Collectors />} />
        <Route path="/colecionadores/perfil" element={<CollectorsProfile />} />
        <Route path="/estatisticas" element={<Statistics />} />
      </Routes>
  )
};