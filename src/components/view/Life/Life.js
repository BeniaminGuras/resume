import { personal, professional } from '../../../db/informations';
import LifeDescription from '../LifeDescription/LifeDescription';
import styles from './Life.module.scss';

const Life = ({ lifeSection }) => {
  
  let informationsAboutMe = null;

  if (lifeSection === 'professional') {
    informationsAboutMe = professional;
  } else if (lifeSection === 'personal') {
    informationsAboutMe = personal;
  }

  return(
    <div className={styles.life}>
      <div className={styles.header}>
        <div className={styles.image}>
          <img src={`../../../../${process.env.PUBLIC_URL}/images/photos/${lifeSection}.jpg`} alt={lifeSection} />
        </div>
        <div className={styles.name}>
          <h1>My {lifeSection} life</h1>
        </div>
      </div>
      <div className={styles.mainWrapper}>
        {informationsAboutMe.map(
          x => 
            <LifeDescription box={x} key={x.title} />
        )}
      </div>
    </div>
  )
}

export default Life;