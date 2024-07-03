//import banner from '../../assets/images/IMG.png'
import PropTypes from 'prop-types'
import styles from '../Banner/banner.module.scss'

//les props viennent du composant parent ou se trouve les information
//comment la data.json ou autre tipe d'information
// comment l'importation d'une image dans le composant parent
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
//on va definir les PropTypes pour valider les props reçus
Banner.propTypes = {
  banner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Banner

//<h1>Chez vous, partout et ailleurs</h1>
