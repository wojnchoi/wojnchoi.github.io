import styles from './Main.module.css'
const About = (props) => {
    return (
        <div>
           <h1>page</h1> 
            <div className={styles.project}>
            <div className={styles.grid}>
                <a href="#" className={styles.card}>
                <h3>element</h3>
                <p></p>
                </a>
                <a href="#" className={styles.card}>
                <h3>element</h3>
                <p></p>
                </a>
                <a href="#" className={styles.card}>
                <h3>element</h3>
                <p></p>
                </a>
                <a href="#" className={styles.card}>
                <h3>element</h3>
                <p></p>
                </a>
            </div>
            </div>
        </div>
    )
}

export default About
