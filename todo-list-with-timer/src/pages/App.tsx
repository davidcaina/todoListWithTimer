import React, { useState } from "react";
import Cronometro from "../components/cronometro";
import Formulario from "../components/forms";
import Lista from "../components/Lista";
import style from "./App.module.scss";

interface ITarefa {
  tarefa: string;
  tempo: string;
}

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
