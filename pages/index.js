import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>wojnchoi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>WEB PAGE</h1>

        <p className={styles.description}>
          <code className={styles.code} style={{backgroundColor: "#E8E8E8"}}>#include&lt;woojin.h&gt;</code>
        </p>
        <div className={styles.contents}>
            <p id="abt">Currently student. I like to code in C language. Also I'm a bad coder.</p>
            <p id="pjt">These are the projects I've been working on.</p>
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
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/wojnchoi" target="_blank">GitHub{' '}</a>
      </footer>
    </div>
  )
}
