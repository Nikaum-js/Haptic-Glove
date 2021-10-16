import developerImg from '../../assets/developer.svg'

import './styles.scss';

export function Project() {
  return (
    <div className="project">
      <h1 id="projeto">Projeto</h1>,l70 nnnnnnnnnnnnj94fvg,yhlkħ

      <div className="container-project">
        <div className="content-image">
          <img src={developerImg} alt="sobre o projeto" />
        </div>

        <div className="content-project">
          <h2>Sobre o projeto</h2>

          <p>
          Haptic glove é um projeto que envolve IA e VR, o intuito do projeto é conseguir alcançar areas novas de tecnologia, entretenimento, e areas profissionais diversas, nós estamos fazendo esse projeto usando um arduino para conseguir detectar a posição dos dedos, e inclinação da mão, a inteligencia artificial que estamos usando serve para que consigamos localizar a posição da mão no espaço, uma das limitações é justamente apenas conseguirmos mover a mão no software, enquanto a mão do usuario estiver dentro do ponto de visão da camera, e a nossa limitação partindo do hardware, seria a limitação de distancia entre a luva e o computador, ja que estamos usando blueetooth
          </p>
        </div>
      </div>
    </div>
  );
}