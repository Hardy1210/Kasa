//important  useParams pour povoir rediriger et utilizer le parametres
import { useParams, useNavigate } from 'react-router-dom'
//useEffect s'excecute apres le premiere render du composant
import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'
import Collapse from '../../components/Collapse/Collapse'
import data from '../../data/data.json'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStar } from '@fortawesome/free-solid-svg-icons'
import Rating from '../../components/Rating/Rating'
//styles
import styles from '../../Pages/Housing/housing.module.scss'
//import styles from '../Housing/housing.module.scss'

function Housing() {
  //l'id est important pour lui donner exactement l'endroi où naviguee
  const { id } = useParams()
  const navigate = useNavigate()
  const housingData = data.find((item) => item.id === id)
  //useEffect s'aplique apres le premiere render du composant
  useEffect(() => {
    if (!housingData) {
      navigate('/error') //va rediriger a la page de'error
    }
    //asure de que l'effet s'aplique quand housingData o navigate changent
  }, [housingData, navigate])
  //Si housingData no existe, el componente retorna null, lo que evita renderizar contenido transitorio mientras se realiza la redirección.
  if (!housingData) {
    return null
  }
  {
    /* const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      //chaque element jsx s'ajoute a l'array avec la metode .push
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          //on va parcourir le numero de etoiles qui son disponibles dans rating
          //et on va ajouter un style avec les etoiles qui son disponibles de 1/5
          // et si on a pas des etoiles jusqu'au 5 alors les manquant auront un style empty-star
          //avec un fond gris
          className={i < rating ? styles['filled-star'] : styles['empty-star']}
        />,
      )
    }
    return stars
  }*/
  }
  //pour bien renderize les etoiles qui prned la valeur du data rating
  //il faut s'assurer de que c'est un valeur number qui est signale dans propTypes et pas string avec cette ligne
  const rating = parseInt(housingData.rating, 10)
  return (
    <>
      <Header />
      <div>
        <Carousel pictures={housingData.pictures} />
      </div>
      <div className={styles['housing__content']}>
        <div className={styles['housing__content--info']}>
          <h1>{housingData.title}</h1>
          <h4>{housingData.location}</h4>
          <ul>
            {housingData.tags.map((tag, index) => (
              <li key={index} className={styles['tag']}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles['housing__content--host']}>
          <div className={styles['host']}>
            <h4>{housingData.host.name}</h4>
            <img src={housingData.host.picture} alt={housingData.host.name} />
          </div>

          {/*<div className={styles['rating']}>
            {renderStars(housingData.rating)}
          </div>*/}
          <Rating rating={rating} />
        </div>
      </div>
      <div className={styles['collapse__container--housing']}>
        <Collapse
          title="Description"
          content={housingData.description}
          additionalClass="borderRadiusHousing"
        />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {housingData.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
          additionalClass="borderRadiusHousing"
        />
      </div>
      <Footer />
    </>
  )
}
export default Housing

/*function Housing() {
  //l'id est important pour lui donne exactement l'endroi où naviguee
  const { id } = useParams()
  const navigate = useNavigate()
  const housingData = data.find((item) => item.id === id)

  if (!housingData) {
    navigate('/error')
    return null // redirige automatiquement
  }
  //logique pour renderiser les rating
  const renderStars = (rating) => {
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
    return stars
  }
  return (
    <>
      <Header />
      <div className={styles['housing']}>
        <div className={styles['housing__banner']}>
          {housingData.pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`${housingData.title} ${index + 1}`}
            />
          ))}

          <FontAwesomeIcon icon={faChevronLeft} />
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div>
          <div>
            <h1>{housingData.title}</h1>
            <h4>{housingData.location}</h4>
            <ul>
              {housingData.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <h4>{housingData.host.name}</h4>
              <img src={housingData.host.picture} alt={housingData.host.name} />
            </div>

            <div className="rating">{renderStars(housingData.rating)}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Housing
 */
