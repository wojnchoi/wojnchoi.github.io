import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <div className={navStyles.header_wrapper}>
            <div className={`${navStyles.transparent}`}>
                <h1 className={navStyles.logo}><Link href="/">LOGO</Link></h1>
                <nav className={navStyles.nav}>
                    <div className={navStyles.menu}>
                        <ul className={navStyles.list}>
                            <li className={navStyles.elementlink}><Link href="#abt">about</Link></li>
                            <li className={navStyles.elementlink}><Link href="#pjt">project</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav