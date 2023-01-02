import styles from '../styles/Linha.module.css'
import Casa from "./Casa";

export default function Linha(props: any) {
  return (<div className={styles.linha}>
    <Casa preto={props.preto} />
    <Casa preto={!props.preto} />
    <Casa preto={props.preto} />
    <Casa preto={!props.preto} />
    <Casa preto={props.preto} />
    <Casa preto={!props.preto} />
    <Casa preto={props.preto} />
    <Casa preto={!props.preto} />
  </div>)
}
