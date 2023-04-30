import loading from '../../src/img/loading.svg'
import styles from './Loading.module.css'
function Loading(){
    return(
        <div className={styles.loader_container}>
            <img className={styles.load} src={loading} alt="carregando"/>
        </div>
    )
}

export default Loading