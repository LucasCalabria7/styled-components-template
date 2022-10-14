import Carro from "./Carro";
import styled from "styled-components";

import { Button } from "./GaragemStyle";
import { Container } from "./GaragemStyle";

function Garagem(props) {
  return (
    <Container>
      <h1>Garagem da {props.nome}</h1>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <Carro
        adicionadoPor={props.nome}
        cor={"Vermelho"}
        ano={2022}
        flex={"true"}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Verde"}
        ano={2020}
        flex={"false"}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Amarelo"}
        ano={2009}
        flex={"false"}
      />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
    </Container>
  );
}

export default Garagem;