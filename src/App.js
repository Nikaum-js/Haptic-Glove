import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Evolution } from "./components/Evolution";
import { Project } from "./components/Project";
import { HowItWorks } from "./components/HowItWorks";
import { Usability } from "./components/Usability";
import { Materials } from "./components/Materials";
import { Team } from "./components/Team";

import './styles/global.scss';

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
      <Usability />
      <Team />
    </>
  )
}

export default App




