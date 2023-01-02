export default function Quadrado(props: any) {
  return (
    <div style={{ backgroundColor: props.sequencial % 2 == 0 ? "white" : "black", height: "50px", width: "50px" }}>
    </div>
  )
}