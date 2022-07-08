import styles from './Shortcuts.module.scss';

const Shortcuts = () => {

  const technologies = [
    'React.JS',
    'JavaScript',
    'Redux',
    'React Router',
    'TypeScript',
    'HTML',
    'CSS',
    'SCSS',
    'RWD',
    'Bootstrap'];

    const workingOn = 'Nice project';

  return(
    <div className={styles.shortcuts}>
      <div className={styles.techStack}>
        <h3>Technologies I work with</h3>
        <ul>
          {technologies.map(
            x => {
              return (
                <li key={x}>{x}</li>
              )
            }
          )}
        </ul>
      </div>
      <div className={styles.projects}>
        <h3>Currently working on</h3>
        <p>{workingOn}</p>
      </div>
    </div>
  )
}

export default Shortcuts;