import { Route } from "react-router-dom";
import IsAdmin from "./components/Middleware/IsAdmin";
import IsLogged from "./components/Middleware/IsLogged";
import { Routes } from "react-router";
import GameInfo from "./pages/GameInfo";
import AddGame from "./pages/AddGame";
import Games from "./pages/Games";
import NewGame from "./pages/NewGame";
import Collectors from "./pages/Collectors";
import Statistics from "./pages/Statistics";
import Login from "./pages/Login";
import CollectorsProfile from "./pages/CollectionsProfile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/jogos" element={<IsLogged><Games /></IsLogged>} />
      <Route path="/jogos/novo" element={<IsLogged><IsAdmin><NewGame /></IsAdmin></IsLogged>} />
      <Route path="/jogos/jogo/:id" element={<IsLogged><GameInfo /></IsLogged>} />
      <Route path="/jogos/jogo/:id/adicionar" element={<IsLogged><AddGame /></IsLogged>} />
      <Route path="/colecionadores" element={<IsLogged><Collectors /></IsLogged>} />
      <Route path="/colecionadores/perfil/:id" element={<IsLogged><CollectorsProfile /></IsLogged>} />
      <Route path="/estatisticas" element={<IsLogged><Statistics /></IsLogged>} />
    </Routes>
  )
};
