import styles from './LifeDescription.module.scss';

const LifeDescription = ({ box }) => {

  if (box.type === 'text') {
    return(
      <div className={styles.descriptionBox}>
        <h1>{box.title}</h1>
        <p>{box.description}</p>
      </div>
    )
  } else if (box.type === 'list') {
    return(
      <div className={styles.descriptionBox}>
        <h1>{box.title}</h1>
        <ul>
          {box.list.map(
            x => 
              <li key={x}>{x}</li>
          )}
        </ul>
      </div>
    )
  }
  
}

export default LifeDescription;