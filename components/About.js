import React from 'react'
import styles from '../styles/Layout.module.css'
export const About = () => {
    return (
        <div className={styles.about}>
            <h1>about</h1>
            <p id="abt">I'm currently in high school. I love to code in C/C++.<br/> I'm interested in security or blockchain technology. I want to develop AI along with my own Operating System in future....yay</p>
            <h4>contacts</h4>
            <ul>
                <li>github</li>
                <li>instagram</li>
                <li>email</li>
            </ul>
        </div>
    )
}

export default  About
