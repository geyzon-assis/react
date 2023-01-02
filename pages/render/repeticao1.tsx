export default function repeticao1() {
  const listaAprovados = [
    'Ana',
    'Joao',
    'Pedro',
    'Maria',
    'Renato',
    'Carla',
  ]

  function renderList() {
    return listaAprovados.map((nome, i) => <li key={i}> {nome}</li>)
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}