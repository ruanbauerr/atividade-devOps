import { useState } from "react";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === "") return;

    setLista([...lista, tarefa]);
    setTarefa("");
  }

  return (
    <div>
      <h1>To-Do DevOps</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;