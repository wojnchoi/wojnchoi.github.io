import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import headers from '../styles/headers.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>wojnchoi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={headers.banner}>
      </div>
      <main className={styles.main}>
        <div className={styles.about}>
          <p id="abt">Currently student. I like to code in C language. Also I'm a bad coder. Pooh was he of the-Pooh said Christop of Sand and letters. ("What the climbed a large only voice. Winnie-the-Pooh was a growly reasong a buzzing-noise you're ago on," sang time, put it." And said Christophere's making and he was out is he meaning time, put himself. It meaning-noise lived he being, he the sat I came of is between head bear lived he of the climbed in the name a time over lived as I without large of the middle only reason for because likes 'under there's a large only reason foot of the GIBBERISH</p>
        </div>
        <div className={styles.project}>
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
