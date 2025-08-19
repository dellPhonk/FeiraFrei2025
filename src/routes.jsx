import { BrowserRouter, Routes , Route } from "react-router";
import Inicio from "./pages/inicio";
import E1 from "./pages/ex1";

export default function Navegacao(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/e1" element={<E1 />}/>
        </Routes>
        </BrowserRouter>
    )
}