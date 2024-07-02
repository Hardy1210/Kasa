//important  useParams pour povoir rediriger et utilizer le parametres
import { useParams, useNavigate } from 'react-router-dom'
//useEffect s'excecute apres le premiere render du composant
import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'
import Collapse from '../../components/Collapse/Collapse'
import data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

//styles
import styles from '../../Pages/Housing/housing.module.scss'
//import styles from '../Housing/housing.module.scss'

function Housing() {
  //l'id est important pour lui donne exactement l'endroi où naviguee
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

          <div className={styles['rating']}>
            {renderStars(housingData.rating)}
          </div>
        </div>
      </div>
      <div className={styles['collapse__container--housing']}>
        <Collapse
          title="Description"
          content={housingData.description}
          additionalClass="borderRadiusHousing"
        />
        <Collapse
          title="Equipments"
          content={housingData.equipments.join(', ')}
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
