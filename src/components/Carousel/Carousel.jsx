import { useState, useEffect, useCallback } from 'react'
//pour faire l'utilization de UseSwipeable il faut fair une installation npm
import { useSwipeable } from 'react-swipeable'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Counter from '../../Hooks/Counter/Counter'
import styles from '../Carousel/carousel.module.scss'

//on pase le props du parent içi
function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(pictures.length)
  //offsetX pour l'evenement de defilement dans l'axe X horizontal
  const [offsetX, setOffsetX] = useState(0)
  //transitionEnabled va controler si les trantitions des images est habilitee
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  //hook personalisee counter pour le compteur.
  // le parametre isVisible va a controle si on peut affiche les elements chosis ou non
  // avec une condition && si est vrais
  const { count, setCount, increment, decrement, isVisible } = Counter(
    1,
    pictures.length,
  )

  //liste des images de la data en trois fois pour simuler le carousel infinit
  const totalPictures = [...pictures, ...pictures, ...pictures]

  //moveToNearestSlide va ajouster l'index de l'image actuel pour mantenir
  //l'effe de boucle infinit
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

  //pour des effets secondaires des changement qui passent apres le render
  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true)
        })
      })
    }
  }, [transitionEnabled])

  //va actualiser le  compteur des images visibles quand l'index actuel change
  useEffect(() => {
    setCount((currentIndex % pictures.length) + 1)
  }, [currentIndex, setCount, pictures.length])

  //controle l'increment et decrement des immages
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
    decrement()
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
    increment()
  }

  //controleur de defilement(glisement) qui actualize l'etat entre slides
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

  //logique pour voir les images en entier dans une Modal
  const [modalOpen, setModalOpen] = useState(false)
  //qui va avec <img/> avec oneClick
  const openModal = () => {
    setModalOpen(true)
  }
  //qui va a l'interiur de la modal modalOpen
  const closeModal = () => {
    setModalOpen(false)
  }

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
              onClick={openModal}
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
      {modalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            {pictures.map((picture, index) => (
              <img
                key={index}
                src={picture}
                alt={`Full size ${index}`}
                className={styles.modal__image}
              />
            ))}
          </div>
        </div>
      )}
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
