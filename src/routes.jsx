import { BrowserRouter, Routes , Route } from "react-router";
import Inicio from "./pages/inicio.jsx";
import Sobre from "./pages/Sobre.jsx";

export default function Navegacao(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
        </BrowserRouter>
    )
}