import { useState } from 'react';
import styles from './Project.module.scss';



const Project = ({ projectDetails }) => {

    const [showModule, setShowModule] = useState(false);

    return(
        <div className={styles.project}>
            <div className={styles.imageBox}>
                <img src={`../../../../${process.env.PUBLIC_URL}/images/projects/${projectDetails.img}.jpg`} alt="project"></img>
            </div>
            <div className={styles.descriptionBox}>
                <div className={styles.id}>
                    <h3>{projectDetails.id}</h3>
                </div>
                <div className={styles.description}>
                    <p>{projectDetails.shortDescription}, <span onClick={() => setShowModule(true)}>view more...</span></p>
                </div>
            </div>
        </div>
    )
}

export default Project;