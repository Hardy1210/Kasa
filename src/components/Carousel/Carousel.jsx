import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import styles from '../Carousel/carousel.module.scss'

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    )
  }
  return (
    <div className={styles['carousel__container']}>
      <div className={styles['pictures__container']}>
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Slide ${index}`}
            className={
              index === currentIndex ? styles['active'] : styles['inactive']
            }
          />
        ))}
        <div className={styles['button__container']}>
          <button className={styles['left__arrow']} onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={styles['right__arrow']} onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  )
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Carousel
