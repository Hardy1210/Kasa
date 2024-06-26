//import banner from '../../assets/images/IMG.png'
import PropTypes from 'prop-types'
import styles from '../Banner/banner.module.scss'

function Banner({ banner, title }) {
  return (
    <>
      <div className={styles.banner__container}>
        <img src={banner} className={styles.banner} />
        <div className={styles['overlay']}></div>
        {title && <h1>{title}</h1>}
      </div>
    </>
  )
}
//creaction de PropTypes pour pouvoir reutilize
//l'image et le titre on porra le remplir dans le composant où ira
//le composant Banner
Banner.propTypes = {
  banner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Banner

//<h1>Chez vous, partout et ailleurs</h1>
