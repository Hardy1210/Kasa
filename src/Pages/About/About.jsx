import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
//import styles from '../About/about.module.scss'
import banner from '../../assets/images/img2.png'
//importation de la liste qui von remplir le composanst Collapse
import { aboutList } from '../../data/aboutList'
import Collapse from '../../components/Collapse/Collapse'
import styles from '../About/about.module.scss'

//on utilise la metode MAP pour pouvoir afficher le contenue de
// mon aboutList.js qui se trouve dan le dosier /data
function APropo() {
  return (
    <>
      <Header />
      <Banner banner={banner} title="" />
      <div className={styles['about__container']}>
        {aboutList.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            content={item.content}
            additionalClass={styles.borderRadiusHousing}
          />
        ))}
      </div>

      <Footer className={styles['footer__collapse']} />
    </>
  )
}

export default APropo
