import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  
  return(
    <nav>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <ul>
              <li><NavLink to="/" className={({ isActive }) =>
              isActive ? styles.activeStyle : undefined
            }><span className={styles.logo}>Guras</span></NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) =>
              isActive ? styles.activeStyle : undefined
            }>About me</NavLink></li>
              <li><NavLink to="/projects" className={({ isActive }) =>
              isActive ? styles.activeStyle : undefined
            }>Projects</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) =>
              isActive ? styles.activeStyle : undefined
            }>Contact</NavLink></li>
            </ul>
          </div>
          {/* <div className={styles.icons}>
            <i className="fa fa-moon"></i>
          </div> */}
        </div>
    </nav>
  )
}

export default NavBar;