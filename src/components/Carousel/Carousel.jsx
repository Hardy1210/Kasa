import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
//on utilise le composant Counter comment js
import Counter from '../../Hooks/Counter/Counter'

import styles from '../Carousel/carousel.module.scss'

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  //on va definir la variable qui vont prendre en compte le composant
  //Counter
  const { count, increment, decrement, isVisible } = Counter(1, pictures.length)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    )
    //on ajoute la fonctionalite du composant Counter
    decrement()
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    )
    // on ajoute la fonctionalite du composant Counter
    increment()
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
          {/*on va utiliser la meme logique pour faire disparaitre les icons
            qu'on a travaille dans le composant Counter "isVisible" */}
          {isVisible && (
            <button className={styles['left__arrow']} onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          {isVisible && (
            <button className={styles['right__arrow']} onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
          {isVisible && (
            <span className={styles['counter']}>
              {count}/{pictures.length}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Carousel
