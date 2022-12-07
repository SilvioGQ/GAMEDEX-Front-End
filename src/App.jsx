import { Route } from "react-router-dom";
import IsAdmin from "./components/Middleware/IsAdmin";
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
      <Route path="/jogos" element={<Games />} />
      <Route path="/jogos/novo" element={<IsAdmin><NewGame /></IsAdmin>} />
      <Route path="/jogos/jogo/:id" element={<GameInfo />} />
      <Route path="/jogos/jogo/:id/adicionar" element={<AddGame />} />
      <Route path="/colecionadores" element={<Collectors />} />
      <Route path="/colecionadores/perfil/:id" element={<CollectorsProfile />} />
      <Route path="/estatisticas" element={<Statistics />} />
    </Routes>
  )
};
