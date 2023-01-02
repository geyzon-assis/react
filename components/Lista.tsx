import Item from "./Item";

export default function Lista(props: any) {

  return (
    <div>
      <h1> Lista Geral</h1>
      <ul style={{ padding: 10, listStyle: "inside" }}>
        {props.children}
      </ul>
    </div>
  )
}