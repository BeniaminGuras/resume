import styles from './Project.module.scss';



const Project = ({ projectDetails }) => {

    return(
        <div className={styles.project}>
            <div className={styles.imageBox}>
                <img src={`../../../../${process.env.PUBLIC_URL}/images/photos/${projectDetails.img}.jpg`} alt="project"></img>
            </div>
            <div className={styles.descriptionBox}>
                <div className={styles.id}>
                    <h3>{projectDetails.id}</h3>
                </div>
                <div className={styles.description}>
                    <p>{projectDetails.shortDescription}, <span onClick={() => alert('siema')}>view more...</span></p>
                </div>
            </div>
        </div>
    )
}

export default Project;