import { useState, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Counter from '../../Hooks/Counter/Counter'
import styles from '../Carousel/carousel.module.scss'

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(pictures.length)
  const [offsetX, setOffsetX] = useState(0)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const { count, setCount, increment, decrement, isVisible } = Counter(
    1,
    pictures.length,
  )

  const totalPictures = [...pictures, ...pictures, ...pictures]

  const moveToNearestSlide = useCallback(() => {
    const totalSlides = pictures.length
    if (currentIndex < totalSlides) {
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex + totalSlides)
    } else if (currentIndex >= totalSlides * 2) {
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex - totalSlides)
    }
  }, [currentIndex, pictures.length])

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true)
        })
      })
    }
  }, [transitionEnabled])

  useEffect(() => {
    setCount((currentIndex % pictures.length) + 1)
  }, [currentIndex, setCount, pictures.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
    decrement()
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
    increment()
  }

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (Math.abs(eventData.deltaX) > 10) {
        // Threshold to avoid small vibrations
        setOffsetX(eventData.deltaX)
      }
    },
    onSwipedLeft: () => {
      setOffsetX(0)
      nextSlide()
    },
    onSwipedRight: () => {
      setOffsetX(0)
      prevSlide()
    },
    onSwiped: () => {
      setOffsetX(0)
    },
    //trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  })

  return (
    <div className={styles.carousel__container}>
      <div {...handlers} className={styles.pictures__container}>
        <div
          className={styles.carousel__track}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
            transition: transitionEnabled ? 'transform 0.3s ease-out' : 'none',
          }}
          onTransitionEnd={moveToNearestSlide}
        >
          {totalPictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`Slide ${index}`}
              className={styles.carousel__image}
            />
          ))}
        </div>
        <div className={styles.button__container}>
          {isVisible && (
            <button className={styles.left__arrow} onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          {isVisible && (
            <button className={styles.right__arrow} onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
          {isVisible && (
            <span className={styles.counter}>
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

{
  /* MON CODE DE BASE 
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
  //Counter ave ses props
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
          on va utiliser la meme logique pour faire disparaitre les icons
            qu'on a travaille dans le composant Counter "isVisible" 
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
  */
}
