import Item from "./Item";

function Lista() {
  const tarefas = [
    { tarefa: "Teste 1", tempo: "02:00:00" },
    { tarefa: "Teste 2", tempo: "01:30:00" },
    { tarefa: "Teste 3", tempo: "03:30:00" },
  ];

  return (
    <aside className="listaTarefas">
      <h2> Tarefas Selecionadas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item key={index} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
