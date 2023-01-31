import { useState } from "react";
import Item from "./Item";

interface ITarefa {
  tarefa: string;
  tempo: string;
}

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className="listaTarefas">
      <h2>Tarefas Selecionadas </h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item key={index} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
