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
      {/* Render du composant banner et on passe le props quon metera dens le composant en lui meme */}
      <Banner banner={banner} title="Chez vous, partout et ailleurs" />
      <div className={styles['gallery']}>
        <ul className={styles['gallery__grid']}>
          {/*Map sur la data.json qui va a creer une element li pour chaque id de la data 
          et meme temps chaque li a une cles unique key={} basee sur l'id item
          et pareilment on va entourer dans un lien Link pour pouvoir rediriger au contenue 
          base sur l'id de la data */}
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
{
  /*il faut prendre en compte qu'on peut faire un destructuration 
  directement sur "map" pour pouvoir faire un code plus prope et eviter la repetition du "item
   {data.map(({ id, title, cover }) => (
            <li key={id} className={styles['gallery__grid--item']}>
              <Link
                to={`/housing/${id}`}
                className={styles['gallery__grid--link']}
              >
                <Card id={id} title={title} cover={cover} />
              </Link>
            </li>
          ))}*/
}
