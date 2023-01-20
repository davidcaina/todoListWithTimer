import React from "react";

import Botao from "../button";

class Formulario extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="tarefa">Adicione um novo tópico</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer fazer?"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Botao />
      </form>
    );
  }
}

export default Formulario;
