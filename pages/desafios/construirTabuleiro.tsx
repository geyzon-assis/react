import Quadrado from "../../components/Quadrado";

export default function tabuleiro() {
  const size = 8
  const widthTab: number = (size * 50) + size * 1

  return <section style={{
    display: "flex",
    width: widthTab,
    margin: "0 auto",
    alignContent: "center",
    border: "1px solid blue",
    flexWrap: "wrap"
  }}>
    {desenharTabuleiro(size)}
  </section>
}

function desenharTabuleiro(columns: number) {
  const tabuleiro = []
  let i = 0
  for (i = 0; i < columns; i++) {
    //tabuleiro.push(<Quadrado sequencial={i} />)
    for (let n = 1; n <= columns; n++) {
      tabuleiro.push(<Quadrado sequencial={n + i} />)
    }
  }
  return tabuleiro
}