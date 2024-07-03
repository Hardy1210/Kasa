import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from '../Rating/rating.module.scss'

function Rating({ rating }) {
  //chaque element jsx s'ajoute a l'array avec la metode .push
  const stars = []
  //on va parcourir le numero de etoiles qui son disponibles dans rating
  //et on va ajouter un style avec les etoiles qui son disponibles de 1/5
  // et si on a pas des etoiles jusqu'au 5 alors les manquant auront un style empty-star
  //avec un fond gris
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={i < rating ? styles['filled-star'] : styles['empty-star']}
      />,
    )
  }
  return <div className={styles['rating']}>{stars}</div>
}
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}
export default Rating
