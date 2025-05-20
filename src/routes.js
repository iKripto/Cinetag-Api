import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "components/Container";
import FavoritosProvider from "contextos/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>
                        <Route path="/" element={<Inicio/>}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id" element={<Player />}></Route>
                        <Route path="*" element={<NaoEncontrada />}></Route>
                    </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
