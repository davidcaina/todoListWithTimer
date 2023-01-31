import Botao from "../button";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um Card </p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>

      <Botao Começar />
    </div>
  );
}
