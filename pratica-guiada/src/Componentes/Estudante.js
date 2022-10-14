import styled from "styled-components";

const BlocoLista = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3vh auto;
  background-color: white;
  width: 30vw;
  height: 15vh;
`;

const ItemLista = styled.li`
  display: flex;
  justify-content: center;
`;

function Estudante(props) {
  return (
    <div>
      <BlocoLista>
        <ItemLista>nome: {props.nome}</ItemLista>
        <ItemLista>idade: {props.idade}</ItemLista>
        <ItemLista>corDaRoupa:{props.corDaRoupa}</ItemLista>
        <ItemLista>criadoPor:{props.criadoPor}</ItemLista>
      </BlocoLista>
    </div>
  );
}

export default Estudante;
