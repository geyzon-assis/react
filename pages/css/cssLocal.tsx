// essa importação é feita dessa maneira pois é um css local
import styles from './cssLocal.module.css'

export default function testandoCssDoModulo(){
    return (
    <div id={styles.integracao}>
        <div className={styles.vermelho}>Texto #1</div>
        <div className={styles.azul}>Texto #2</div>
        <div className= {styles.verde}>Texto #3</div>
    </div>   
    )
}