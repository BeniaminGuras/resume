import styles from './ContactForm.module.scss';


const ContactForm = () => {

  return(
    <form>
      <div className={styles.name}>
        <h3 className={styles.nameHeader}>
          Please insert a name:
        </h3>
        <input type='text'></input>
      </div>
    </form>
  )
}

export default ContactForm;