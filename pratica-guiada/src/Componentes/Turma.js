import Estudante from "./Estudante";
import styled from "styled-components";

const BotaoApresenta = styled.button`
  background-color: orangered;
  border: 2px solid white;
  cursor: pointer;
`;

const EstiloTurma = styled.div`
  background-color: orange;
  text-align: center;
  height: 100vh;
`;

function Turma(props) {
  return (
    <EstiloTurma>
      <h1>Turma {props.turma}</h1>
      <h4>Responsável:{props.responsavel}</h4>
      <BotaoApresenta onClick={props.apresentar}>Apresentar</BotaoApresenta>

      <Estudante
        nome={"Clarinha"}
        idade={40}
        corDaRoupa={"preta"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Marcelo"}
        idade={25}
        corDaRoupa={"azul"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Luiz"}
        idade={18}
        corDaRoupa={"verde"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Muri"}
        idade={39}
        corDaRoupa={"amarelo"}
        criadoPor={props.responsavel}
      />
    </EstiloTurma>
  );
}

export default Turma;