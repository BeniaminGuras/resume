import Container from '../Container/Container'
import styles from './NavBar.module.scss';

const NavBar = props => {
  
  return(
    <nav>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className={styles.icons}>
            <i className="fa fa-moon"></i>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar;