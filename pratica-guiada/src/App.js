import Turma from "./Componentes/Turma";
import { GlobalStyled } from "./GlobalStyled";

function App() {
  const responsavel = "Calabria";
  const nomeDaTurma = "Ammal";

  function apresentarTurma() {
    alert(`Bom dia turma! ${nomeDaTurma}`);
  }

  return (
    <div className="App">
      <GlobalStyled />
      <Turma
        turma={nomeDaTurma}
        responsavel={responsavel}
        apresentar={apresentarTurma}
      />
    </div>
  );
}

export default App;