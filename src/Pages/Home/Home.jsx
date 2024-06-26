//import React from 'react'

import Header from '../../components/Header/Header'
//import Banner from '../components/Banner'
import MainContent from '../../components/MainContent/MainContent'
import Footer from '../../components/Footer/Footer'
import styles from '../../Pages/Home/home.module.scss'
//import styles from '../Pages/home.module.scss'
function Acceuil() {
  return (
    <div className={styles['home__container']}>
      <div className={styles['home__container--padding']}>
        <Header />
        <MainContent />
        <Footer />
      </div>
      {/*<Footer :> */}
    </div>
  )
}

export default Acceuil
