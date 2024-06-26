import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from '../Error/error.module.scss'

function Error() {
  return (
    <>
      <Header />
      <div className={styles['error__container']}>
        <h1>404</h1>
        <div className={styles['paragraphe']}>
          <p>
            Oups! La page que <br className={styles['break']} />
            vous demandez n&apos;existe pas.
          </p>
        </div>

        <Link className={styles['link']} to="/">
          Retourner sur la page d&apos;accueil
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Error
