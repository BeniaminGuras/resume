import styles from './Modal.module.scss';

const Modal = ({ projectDetails, setShowModal }) => {

  return(
    <div className={styles.modal}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{projectDetails.id}</h1>
        </div>
        <div className={styles.icon}>
          <i onClick={() => setShowModal(false)} className="fa-solid fa-x"></i>
        </div>
      </div>
      <div className={styles.modalBody}>
        <div className={styles.description}>
          <p>{projectDetails.description}</p>
          <p>Link to GitHub repository: <a href={projectDetails.gitHub} target="_blank" rel="noreferrer">{projectDetails.id}</a></p>
        </div>
        <div className={styles.closeButton}>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
      <div onClick={() => setShowModal(false)} className={styles.overlay}></div>
    </div>
  )
}

export default Modal;