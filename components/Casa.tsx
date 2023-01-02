import styles from '../styles/Subdivisao.module.css'

export default function Casa(props: any) {
  return (
    <div
      style={{ backgroundColor: props.preto ? "#000" : "#FFF" }}
      className={styles.subdivisao}>
    </div>
  )
}