import styles from './Main.module.css'
const About = (props) => {
    return (
        <div>
           <h1>About</h1> 
            <div className={styles.project}>
                <p>I like to do...</p>
            <div className={styles.grid}>
                <a href="#" className={styles.card}>
                <h3>C/C++</h3>
                <p>coding in c/c++</p>
                </a>
                <a href="#" className={styles.card}>
                <h3>Book</h3>
                <p>currently reading "1984"</p>
                </a>
                <a href="#" className={styles.card}>
                <h3>AI/OS</h3>
                <p>create AI along with OS that I developed</p>
                </a>
                <a href="#" className={styles.card}>
                <h3>Soccer</h3>
                <p>my fav sport but terrible player</p>
                </a>
            </div>
            </div>
        </div>
    )
}

export default About
