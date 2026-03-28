import { useState } from "react";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === "") return;

    setLista([...lista, tarefa]);
    setTarefa("");
  }

  function removerTarefa(index) {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
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
          <li key={index}>
            {item}
            <button onClick={() => removerTarefa(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;