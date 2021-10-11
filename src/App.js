import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Evolution } from "./components/Evolution";

import './styles/global.scss';
import { Project } from "./components/Project";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Project />
      <Cards />
      <Evolution />
    </>
  )
}

export default App;
