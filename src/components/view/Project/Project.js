import { useState } from 'react';
import styles from './Project.module.scss';
import Modal from '../Modal/Modal';


const Project = ({ projectDetails }) => {

    const [showModal, setShowModal] = useState(false);

    return(
        <div className={styles.project}>
            <div className={styles.imageBox}>
                <img onClick={() => setShowModal(true)} src={`../../../../${process.env.PUBLIC_URL}/images/projects/${projectDetails.img}.jpg`} alt="project"></img>
            </div>
            <div className={styles.descriptionBox}>
                <div className={styles.id}>
                    <h3>{projectDetails.id}</h3>
                </div>
                <div className={styles.description}>
                    <p>{projectDetails.shortDescription}, <span onClick={() => setShowModal(true)}>view more...</span></p>
                </div>
            </div>
            {showModal ? <Modal setShowModal={setShowModal} projectDetails={projectDetails} /> : undefined }
        </div>
    )
}

export default Project;