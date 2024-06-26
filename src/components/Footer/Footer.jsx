import footerLogo from '../../assets/logo/logo.svg'
import styles from '../Footer/footer.module.scss'
function Footer() {
  return (
    <>
      <div className={styles['footer']}>
        <img src={footerLogo} className={styles['footer__logo']} />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </>
  )
}

export default Footer
