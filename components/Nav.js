import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import styles from '../styles/Layout.module.css'

const Nav = () => {
    return (
        <div className={navStyles.header_wrapper}>
            <div className={`${navStyles.transparent}`}>
                <p className={`${styles.description} ${navStyles.logo} `}>
                    <a href="/"><code className={styles.code} style={{backgroundColor: "#E8E8E8"}}>#include&lt;woojin.h&gt;</code></a>
                </p>
                <nav className={navStyles.nav}>
                    <div className={navStyles.menu}>
                        <ul className={navStyles.list}>
                            <li className={navStyles.elementlink}><Link href="#abt"><code className={styles.code} style={{backgroundColor: "#E8E8E8"}}>about();</code></Link></li>
                            <li className={navStyles.elementlink}><Link href="#pjt"><code className={styles.code} style={{backgroundColor: "#E8E8E8"}}>project();</code></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav