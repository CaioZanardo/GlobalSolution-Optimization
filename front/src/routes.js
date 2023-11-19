import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from "./App";
import ListaAtividade from "./listadeatividade";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/lista" element={<ListaAtividade/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutes;