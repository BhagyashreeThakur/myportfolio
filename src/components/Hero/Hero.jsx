import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Bhagyashree</h1>
                <p className={styles.description}>I'm a Frontend developer with proficiency in front-end technologies. 
                Adaptive any type of work environment and technology.
                </p>
                <a className={styles.contactBtn} href="mailto:bhagyashreet910@gmail.com">Contact me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero img"/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
            
        </section>
    );
}