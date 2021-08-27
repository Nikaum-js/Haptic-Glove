import './styles.scss';

export function Header() {
  return (
    <nav>
      <h1>Haptic <span>Glove</span></h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projeto">Projeto</a></li>
        <li><a href="#tecnologias">Tecnologias</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#sobremim">Sobre mim</a></li>
      </ul>
    </nav>
  );
}