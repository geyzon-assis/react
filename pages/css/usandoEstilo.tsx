import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
  return (
    <div>
      <Estilo number={2} color={"#FFF"} />
      <Estilo number={-1} color={"#000"} right={true} />
    </div>
  )
}