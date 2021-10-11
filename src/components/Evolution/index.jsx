import GloveImg from '../../assets/glove.png';
import GloveImg2 from '../../assets/glove2.png';
import GloveImg3 from '../../assets/glove3.png';

import './styles.scss';

export function Evolution() {
  return (
    <section> 
      <h1>Evoluções do projeto</h1>

      <div className="evolution-container">

        <div className="content-box">
          <h2>Versão 1.0</h2>
          <img id="giantImg" src={GloveImg3} alt="bla bla bla" />
        </div>

        <div id="evolução" className="content-box">
          <h2>Versão 1.1</h2>
          <img src={GloveImg2} alt="bla bla bla" />
        </div>

        <div className="content-box">
          <h2>Versão final</h2>
          <img src={GloveImg} alt="bla bla bla" />
        </div>

      </div>
    </section>
  )
}
