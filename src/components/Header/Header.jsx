import kasaLogo from '../../assets/logo/logo.svg'
//styles
import styles from '../Header/header.module.scss'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <img src={kasaLogo} className={styles.nav__logo} alt="Kasa Logo" />
        <div className={styles.nav__link}>
          <h3>
            <Link to="/" className={styles.link}>
              Accueil
            </Link>
          </h3>
          <h3>
            <Link to="/apropo" className={styles.link}>
              A Propos
            </Link>
          </h3>
        </div>
      </nav>
    </header>
  )
}
export default Header
