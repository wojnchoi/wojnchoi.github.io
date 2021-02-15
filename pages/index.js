import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import headers from '../styles/headers.module.css'

import About from '../components/About'
import Project from '../components/Project'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>wojnchoi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Project/>
          <About/>
      </main>

      <footer className={styles.footer}>
        <a className={styles.license} href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">(C) Woojin Choi, 2021{' '}</a>
      </footer>
    </div>
  )
}
