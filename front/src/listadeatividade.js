import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Axios from "axios";

function ListaAtividade() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/listaAtividade")
      .then((res) => setData(res.data.tabela));
  }, []);

  return (
    <div className="App">
      <div className="menu">
        <span>Smart Vida</span>
        <Link to="/">
          <button>Sair</button>
        </Link>
      </div>

      <header className="App-header">
        <h2>Lista de Atividade</h2>

        <table className="info-table">
          <thead>
            <tr>
              <th>Atividade</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) => (
              <tr key={index}>
                <td>{item.exerc}</td>
                <td>{item.des}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default ListaAtividade;
