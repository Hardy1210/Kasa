import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../Collapse/collapse.module.scss'

//dnas cette composant on a travaillet juste sur le conteneur vide avec les id
//necessaires de la /data /aboutList.js qui sera importe pour son composant parent
function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={styles['collapse__container']}>
        <div
          className={`${styles.collapse} ${isOpen ? styles.active : ''}`}
          onClick={toggleCollapse}
        >
          <h3>{title}</h3>
          {isOpen && <p>{content}</p>}
        </div>
      </div>
    </>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Collapse
