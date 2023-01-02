import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function compomenteComFilhos() {
  return (
    <div>
      <Lista>
        <Item content='Conteudo 1' />
        <Item content='Conteudo 2' />
        <Item content='Conteudo 3' />
      </Lista>
    </div>
  )
}