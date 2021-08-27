import ProgramingMan from '../../assets/programing.svg'

import './styles.scss'

export function Presentation() {
  return (
    <main>
      <div className="container">
        <h3>👨‍💻 Olá, Bem vindo!</h3>
        <h1 className="hello">Faça parte do novo futuro!</h1>
        <h4>O mundo está mudando, e você está pronto para essa mudança!</h4>
        <button>Saiba mais</button>
      </div>
      <figure>
        <img src={ProgramingMan} alt="programing" />
      </figure>
    </main>
  );
}