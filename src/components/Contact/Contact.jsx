import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../util";


export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:bhagyashreet910@gmail.com">Send mail</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/bhagyashree-thakur-73b36a25b">Linkedin</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/BhagyashreeThakur">Github</a>
                </li>
            </ul>
        </footer>
    )
}