import React from "react";

import Botao from "../button";
import style from "./Form.module.scss";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<
    React.SetStateAction<{ tarefa: string; tempo: string }[]>
  >;
}> {
  state = {
    tarefa: "",
    tempo: "00:00:00",
  };

  addTarefa(e: React.FormEvent) {
    e.preventDefault();
    this.props.setTarefas((tarefas) => [...tarefas, { ...this.state }]);
    this.setState({
      tarefa: "",
      tempo: "00:00:00",
    });
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo tópico</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={(e) =>
              this.setState({ ...this.state, tarefa: e.target.value })
            }
            placeholder="O que você quer fazer?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(e) =>
              this.setState({ ...this.state, tempo: e.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}

export default Formulario;
