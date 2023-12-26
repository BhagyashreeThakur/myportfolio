import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../util";
import styles from "./Experience.module.css";

export const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className={styles.skill}>
                                <div className={styles.skillImgContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        )
                    })}
                </div>
                <ul className={styles.history}>
                    {history.map((item,index)=>{
                        return (
                            <li key={index} className={styles.historyItem}>
                                <div className={styles.historyDetails}>
                                    <h3>{item.organisation}</h3>
                                    <p>{item.startDate} - {item.endDate}</p>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}