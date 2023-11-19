import React from "react";
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
            {data && data ? data.map((item, index) => (
              <tr key={index}>
                <td>{item.exerc}</td>
                <td>{item.des}</td>
              </tr>
            )) : null}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default ListaAtividade;
