import styles from './Modal.module.scss';

const Modal = ({ projectDetails, setShowModal }) => {

  return(
    <div className={styles.modal}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{projectDetails.id}</h1>
        </div>
        <div className={styles.icon}>
          <p>I</p>
        </div>
      </div>
      <div className={styles.modalBody}>
        <div className={styles.description}>
          <p>{projectDetails.description}</p>
        </div>
        <div className={styles.button}>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;