export default function Titulo(props:any){
    return props.small? 
    (<><p> {props.principal}</p>
    <p>{props.secundario}</p></>) :
    (<>
    <h1>{props.principal}</h1>
    <h2>{props.secundario}</h2>
    </>)
}