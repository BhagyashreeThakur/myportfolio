import React from "react";
import { getImageUrl } from "../../util";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
    project:
    { title,imageSrc, description, skills, source}
}) => {
    return (
        <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill,index)=>(
                <li className={styles.skill} key={index}>{skill}</li>
               )
            )}
        </ul>

        <div className={styles.links}>
            <a href={source} className={styles.link}>Source</a>
        </div>
    </div>
    )
}