import MaterialImg from '../../assets/stm.png';
import MaterialImg2 from '../../assets/HC-05.png';
import MaterialImg3 from '../../assets/MPU6050.png';

import './styles.scss';

export function Materials() {
  return (
    <section> 
      <h1>Materiais do projeto</h1>

      <div className="materials-container">
        <div className="content-box">
          <h2 id="Stm32">Stm32</h2>
          <img width='330' height='150' id="giantImg" src={MaterialImg} alt="Material" />
          <h1>R$ 62,70</h1>
          <button><a href="https://www.wjcomponentes.com.br/placa-de-desenvolvimento-arm-stm32-stm32f103c8t6?parceiro=6298&gclid=CjwKCAjw2bmLBhBREiwAZ6ugo2AExW4gSk9xr0D3tdNTcvBIB9-f5pWPlxksosByjmcC0kuyM4GcPxoCatgQAvD_BwE">Comprar</a></button>
        </div>

        <div id="evolução" className="content-box">
          <h2 id="HC-05">HC-05</h2>
          <img width='300' height='250' src={MaterialImg2} alt="Material" />
          <h1 id="materials">R$ 151,35</h1>
          <button><a href="https://www.reichelt.com/de/en/4duino-hc-05-4-pin-wireless-module-for-arduino-arduino-hc-05-4-p170173.html">Comprar</a></button>
        </div>

        <div className="content-box">
          <h2 id="MPU6050">MPU6050</h2>
          <img width='330' height='250' src={MaterialImg3} alt="Material" />
          <h1>R$ 16,06</h1>
          <button><a href="https://www.eletrogate.com/acelerometro-e-giroscopio-3-eixos-6-dof-mpu-6050-gy-521?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gclid=CjwKCAjw2bmLBhBREiwAZ6ugo5RKtd7Nqz_xxHlzj76-9BkQ4Ra1OlF03I5s2MThbklWKs0fe4LURhoC5jMQAvD_BwE">Comprar</a></button>
        </div>

      </div>
    </section>
  )
}
