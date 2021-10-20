import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Evolution } from "./components/Evolution";
import { Project } from "./components/Project";
import { ComingSoon } from "./components/ComingSoon";
import { HowItWorks } from "./components/HowItWorks";

import './styles/global.scss';
import { Materials } from "./components/Materials";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Project />
      <Cards />
      <Evolution />
      <HowItWorks />
      <Materials />
      <ComingSoon /> 
    </>
  )
}

export default App




