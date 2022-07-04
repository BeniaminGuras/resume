import Hero from "../../view/Hero/Hero";
import Shortcuts from "../../view/Shortcuts/Shortcuts";
import styles from './Main.module.scss';

const Main = () => {

  return (
    <div className={styles.informations}>
      <Hero />
      <Shortcuts />
    </div>
  )
}

export default Main;