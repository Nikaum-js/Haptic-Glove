import ProgramingMan from '../../assets/programing.svg'

import './styles.scss'

export function Presentation() {
  document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Faça parte do novo futuro!" ];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(".typing").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if ( dataText[i] && i < dataText[i].length)
        {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
  
  return (
    <main>
      <div className="container typewriter">
        <h3>👨‍💻 Olá, Bem vindo!</h3>
        <h1 className="typing">Faça parte do novo futuro!</h1>
        <h4>O mundo está mudando, e você está pronto para essa mudança!</h4>
        <button>Saiba mais</button>
      </div>
      <figure>
        <img src={ProgramingMan} alt="programing" />
      </figure>
    </main>
  );
}