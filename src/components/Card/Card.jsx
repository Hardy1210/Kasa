import PropTypes from 'prop-types'
//import dataJSON from '../../../public/data.json'
import styles from '../Card/card.module.scss'

//on reçois les props defini dans le composans qui
//import la data dans ce cas MainContent
function Card({ title, cover }) {
  return (
    <>
      <div className={styles['figure']}>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </>
  )
}
//on va definir les PropTypes pour valider les props reçus
Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}
export default Card
