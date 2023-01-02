export default function If(props: any) {
  return props.testing ? props.children : null
  // if (props.testing === true) {
  //   return props.children
  // } else {
  //   return null
  // }
}