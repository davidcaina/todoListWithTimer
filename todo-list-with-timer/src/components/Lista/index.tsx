import React from "react";
import "./styles.scss";

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
          <li key={index} className="item">
            <h3> {tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
