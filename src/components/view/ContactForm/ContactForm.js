import styles from './ContactForm.module.scss';
import { contact } from '../../../db/informations';


const ContactForm = () => {

  const contactInformation = contact;

  return(
    <div className={styles.contact}>
      <div className={styles.header}>
        <p>If you wish to contact me - don't hesitate to use the data below:</p>
      </div>
      <div className={styles.contactAdress}>
        <p>Email: {contactInformation.email}</p>
        <p>Phone: {contactInformation.phone}</p>
      </div>
    </div>
  )
}

export default ContactForm;