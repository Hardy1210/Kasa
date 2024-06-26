//route pour Housing
import { Link } from 'react-router-dom'
import Banner from '../Banner/Banner'
//import d'image pour Banner grace a PropTypes
import banner from '../../assets/images/IMG.png'
import Card from '../Card/Card'
import data from '../../../public/data.json'
import styles from '../MainContent/mainContent.module.scss'

//pour reutilize Banner on utilise de Proptypes et on fait les modification dans
//composant dans lequelle on va les metres
function MainContent() {
  return (
    <>
      <Banner banner={banner} title="Chez vous, partout et ailleurs" />
      <div className={styles['gallery']}>
        <ul className={styles['gallery__grid']}>
          {data.map((item) => (
            <li key={item.id} className={styles['gallery__grid--item']}>
              <Link
                to={`/housing/${item.id}`}
                className={styles['gallery__grid--link']}
              >
                <Card id={item.id} title={item.title} cover={item.cover}></Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default MainContent
