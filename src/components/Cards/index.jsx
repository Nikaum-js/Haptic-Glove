import JavaScript from '../../assets/javascript.png'
import ReactJs from '../../assets/react.png'
import Sass from '../../assets/sass.png'
import OpenCv from '../../assets/opencv.png'
import MediaPipe from '../../assets/mediapipe.png'
import c from '../../assets/C.png';
import python from '../../assets/Python.png';

import './styles.css'

export function Cards() {
  return (
  <div className="container-main">
    <h1>Tecnologias utilizadas</h1>
    <div class="container-cards">

      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={ReactJs} alt="reactJs" />
            <h3>ReactJs</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: tornar a experiência do usuário com a interface mais eficiente.</p>
            <a href="https://pt-br.reactjs.org/">Saiba mais</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={JavaScript} alt="JavaScript"/>
            <h3>JavaScript</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas, web toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática.</p>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">Saiba mais</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={Sass} alt="sass" />
            <h3 id="detalhe">Sass</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>Sass (em inglês, "syntactically awesome stylesheets", ou "folhas de estilo sintaticamente incríveis") é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum.</p>
            <a href="https://sass-lang.com/">Saiba mais</a>
          </div>
        </div>
    </div>
  
      {/* Segunda coluna */}

      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={OpenCv} alt="open cv" />
            <h3>Open CV</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>OpenCV, foi, desenvolvida pela Intel, em 2000, é uma biblioteca multiplataforma, totalmente livre ao uso acadêmico e comercial, para o desenvolvimento de aplicativos na área de Visão computacional.</p>
            <a href="https://opencv.org/">Saiba mais</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={c} alt="C#" />
            <h3>C#</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              O C#, é uma linguagem de programação orientada a objetos, que foi desenvolvida pela Microsoft e faz parte da plataforma.</p>
            <a href="https://docs.microsoft.com/pt-br/dotnet/csharp/">Saiba mais</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={python} alt="python" />
            <h3>Python</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>Python é uma linguagem Open-Source para data science, machine learning, automação e muito mais.</p>
            <a href="https://www.python.org/">Saiba mais</a>
          </div>
        </div>
      </div>
  </div>
</div>
  );
}