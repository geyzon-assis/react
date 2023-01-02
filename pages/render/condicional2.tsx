import test from "node:test";
import If from "../../components/If";

export default function condicional2() {
  const number = 3

  return (
    <div>
      <If testing={number % 2 === 0}>
        <h1> O Numero {number} eh par</h1>
      </If>

      <If testing={number % 2 === 1}>
        <h1> O Numero {number} eh par</h1>
      </If>
    </div>
  )

}