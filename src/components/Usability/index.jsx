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
          A luva física conta com o mpu6050, que serve para calcular a inclinação da mesma, o arduino processa os dados que são enviados  por i2c, logo depois a placa escreve isso em uma porta rx, e logo apos o modulo bluetooth le a informação e envia via bluetooth para o computador
          </p>
        </div>
      </div>
    </div>
  );
}