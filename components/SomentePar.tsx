export default function SomentePar(props: any) {
  // Forma #1 de fazer

  // if (props.number % 2 === 0) {
  //   return <h1>{props.number}</h1>
  // } else {
  //   return null
  // }

  // Forma #2
  //return (props.number % 2 === 0 ? props.number : null)

  //Forma #3

  const numeroPar = props.number % 2 === 0
  return (
    <div>
      {numeroPar ? <span>{props.number}</span> : null}
    </div>
  )

}