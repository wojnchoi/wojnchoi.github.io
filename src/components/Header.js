import styles from './Header.module.css'
const Header = () => {
    const code = {
        background: '#E8E8E8',
        borderRadius: '5px',
        padding: '0.75rem',
        fontSize: '1.1rem',
        fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
    };
    const element = {
        fontSize: '18px',
        padding: '27px 20px 23px',
        display: 'inline'
    };
    return (
        <div className={styles.header_wrapper}>
            <div className={styles.transparent}>
                <p className={styles.description, styles.logo}>
                    <a href="/"><code style={code}>#include&lt;woojin.h&gt;</code></a>
                </p>
                <nav className={styles.nav}>
                    <div className={styles.menu}>
                        <ul className={styles.list}>
                            <li style={element}><a href="#abt"><code style={code}>about();</code></a></li>
                            <li style={element}><a href="#pjt"><code style={code}>project();</code></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}


export default Header
