export default function listaDeNumeros() {
  return (
    <div>
      {constroiLista(20)}
    </div>);
}
function constroiLista(tamanho: number) {
  const result = [];
  for (let i = 0; i < tamanho; i++) {
    result.push(<span className="verde">{i}, </span>);
  }
  result.push(<span className="verde"> {tamanho} </span>);
  return result;
}