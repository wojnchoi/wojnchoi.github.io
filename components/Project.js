import React from 'react'
import styles from '../styles/Layout.module.css'
export const Project = () => {
    return (
        <div className={styles.project}>
            <h1>project section</h1>
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
    )
}

export default Project