import PauloImg from '../../assets/paulo.jpeg';
import CaioImg from '../../assets/caio.jpeg';

import './styles.scss';

export function Team() {
  return(
  <>
    <dic className="texto">
      <h1> <div className="color">Time</div> </h1>
    </dic>
    <div className="container-team">
      <div className="box-team">
        <div className="header-team">
          <img src="https://avatars.githubusercontent.com/u/62979208?s=400&u=87528c75f81148c5b3288c8f0e9e2e80f67719b1&v=4" alt="" />
          <div id="team" className="details">
          <h3>Nikolas Santana</h3>
          <h4>Desenvolvedor Full-Stack</h4>
          </div>
        </div>
        <p>Eu sou desenvolvedor Full-Stack e atualmente trabalho em 3 empresas usando NodeJs, ReactJs e React Native, gosto de animes, futebol e música. E fui responsável por fazer esse lindo site :)</p>
    </div>

    <div className="box-team">
        <div className="header-team">
          <img src={PauloImg} alt="foto do paulo" />
          <div className="details">
          <h3>Paulo Henrique</h3>
          <h4>Estudante</h4>
          </div>
        </div>
        <p>Meu nome é Paulo Henrique, sou um cara muito extrovertido e gosto de deixar quem estar ao meu redor feliz também, sou esforçado no que eu faço e dou tudo de mim ao máximo. 
E no tcc eu fiquei responsável pelo conteúdo de artes visuais, na parte do vídeo e fotografias.</p>
    </div>

    <div className="box-team">
        <div className="header-team">
          <img src={CaioImg} alt="foto do caio" />
          <div className="details">
          <h3>Caio Caetano</h3>
          <h4>Estudante</h4>
          </div>
        </div>
        <p>Estudante de T.I, atualmente trabalhando como barmen, eu gosto bastante de praticar esportes e focar no meu rendimento físico, no nosso grupo de TCC eu fiquei responsável pela criação das artes gráficas trazendo um modelo animado representativo.</p>
    </div>

    <div className="box-team">
        <div className="header-team">
          <img src="https://avatars.githubusercontent.com/u/62979208?s=400&u=87528c75f81148c5b3288c8f0e9e2e80f67719b1&v=4" alt="" />
          <div className="details">
          <h3>Nikolas Santana</h3>
          <h4>Desenvolvedor Full-Stack</h4>
          </div>
        </div>
        <p>Eu sou desenvolvedor Full-Stack e atualmente trabalho em 3 empresas usando NodeJs, ReactJs e React Native, gosto de animes, futebol e música. E fui responsável por fazer esse lindo site :)</p>
    </div>

    <div className="box-team">
        <div className="header-team">
          <img src="https://avatars.githubusercontent.com/u/62979208?s=400&u=87528c75f81148c5b3288c8f0e9e2e80f67719b1&v=4" alt="" />
          <div className="details">
          <h3>Nikolas Santana</h3>
          <h4>Desenvolvedor Full-Stack</h4>
          </div>
        </div>
        <p>Eu sou desenvolvedor Full-Stack e atualmente trabalho em 3 empresas usando NodeJs, ReactJs e React Native, gosto de animes, futebol e música. E fui responsável por fazer esse lindo site :)</p>
    </div>
    </div>
  </>
  )
}