import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from '../Rating/rating.module.scss'

function Rating({ rating }) {
  const stars = []
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
