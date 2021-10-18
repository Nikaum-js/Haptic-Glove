import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Evolution } from "./components/Evolution";

import './styles/global.scss';
import { Project } from "./components/Project";
import { ComingSoon } from "./components/ComingSoon";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Project />
      <Cards />
      <Evolution />
      <ComingSoon /> 
    </>
  )
}

export default App




