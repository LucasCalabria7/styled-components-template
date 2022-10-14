import { MyCars } from "./CarroStyle";
import { GlobalList } from "./CarroStyle";

function Carro(props) {
  console.log(props);
  return (
    <MyCars>
      <h2>Volksvagem</h2>
      <GlobalList>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>adicionadoPor: {props.adicionadoPor}</li>
      </GlobalList>
    </MyCars>
  );
}

export default Carro;
