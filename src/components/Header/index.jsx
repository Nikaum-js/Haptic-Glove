import './styles.scss';

export function Header() {
  window.onload=function(){
    let show = true;

    const menuSection = document.querySelector(".menu-section");
    const menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", () => {

      document.body.style.overflow = show ? "hidden" : "initial";

      menuSection.classList.toggle("on", show);
      show = !show;
    })
  }
  return (
  <>
    <div className="Navbar">
      <h1>Haptic <p>Glove</p></h1>

      <div class="menu-section">
          <div class="menu-toggle">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#project">Projeto</a></li>
                <li><a href="#tecnologias">Tecnologias</a></li>
                <li><a href="#materials">Materiais</a></li>
                <li><a href="#team">Nosso Time</a></li>
              </ul>
             </nav>
        </div>
    </div>
  </>
  );
}