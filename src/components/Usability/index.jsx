import TestImg from '../../assets/test.svg'

import './styles.scss';

export function Usability() {
  return (
    <div className="usability">
      <h1 id="projeto">Usabilidade</h1>

      <div className="container-project">
        <div className="content-image">
          <img src={TestImg} alt="sobre o projeto" />
        </div>

        <div className="content-project">
          <h2>Principal função da luva</h2>

          <p>
          A muito tempo a tecnologia VR vem sendo explorado por grandes empresas, como principal foco o entretenimento.
          Porem nós fomos além e decidimos fazer uma luva que consegue te deixar mais imerso na Realidade Virtual, para que além de entretenimento, a tecnologia também seja util para empresas onde o treinamento é mais dificil

          </p>
        </div>
      </div>
    </div>
  );
}