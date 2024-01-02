import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer.jsx";

import Inicio from "./paginas/inicio/Inicio.jsx";
import Donato from "./paginas/Donato/Donato.jsx";
import Servicos from "./paginas/servicos/Servicos.jsx";
import Produtos from "./paginas/produtos/Produtos.jsx";
import Contatos from "./paginas/contatos/Contatos.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/donato" element={<Donato />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
