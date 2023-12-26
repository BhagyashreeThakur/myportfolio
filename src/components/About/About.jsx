import React from "react";
import { getImageUrl } from "../../util";
import styles from "./About.module.css";
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")}
                 alt="about image"
                 className={styles.aboutImage}
                 />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            Completed comprehensive training program covering HTML, CSS, JavaScript,
                            Bootstrap and React Js. 
                        </p>
                    </div>
                    </li>

                    <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="cursorIcon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I also have basic knowledge about Node Js and MySQL database.
                        </p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}