import Nav from './Nav'
import Slider from './Slider'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <Slider />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
