import styles from './Main.module.css'
const Project = (props) => {
    return (
        <div>
            <h1>page</h1> 
            <div className={styles.project}>
            <div className={styles.grid}>
                <a href="#" className={styles.card}>
                <h3>element 1&rarr;</h3>
                <p>description element 1</p>
                </a>
                <a href="#" className={styles.card}>
                <h3>element 2&rarr;</h3>
                <p>description element 2</p>
                </a>
                <a href="#" className={styles.card}>
                <h3>element 3&rarr;</h3>
                <p>description element 3</p>
                </a>
                <a href="#" className={styles.card}>
                <h3>element 4&rarr;</h3>
                <p>description element 4</p>
                </a>
            </div>
            </div>
        </div>
    )
}

export default Project
