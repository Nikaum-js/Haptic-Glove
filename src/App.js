import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import Project from "./components/project";

import './styles/global.scss';

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Cards />
      <Project />
    </>
  )
}

export default App;
