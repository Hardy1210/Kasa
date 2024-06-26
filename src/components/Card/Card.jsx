//import dataJSON from '../../../public/data.json'
import styles from '../Card/card.module.scss'
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
export default Card
