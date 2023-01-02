export default function Estilo(props: any) {
  return (
    <div>
      <h1 style={{
        backgroundColor: props.number >= 0 ? "#2D2" : "#D22",
        color: props.color,
        textAlign: props.right ? "right" : "left"
      }}>
        texto #1
      </h1>
      <h2 className={props.number >= 0 ? 'azul' : 'vermelho'}> texto #2</h2>
    </div >)
}