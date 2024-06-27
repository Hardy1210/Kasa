import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../Collapse/collapse.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
//dnas cette composant on a travaillet juste sur le conteneur vide avec les id
//necessaires de la /data /aboutList.js qui sera importe pour son composant parent
function Collapse({ title, content, additionalClass }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={`${styles.collapse__container} ${additionalClass}`}>
        <div
          className={`${styles.collapse} ${isOpen ? styles.active : ''}`}
          onClick={toggleCollapse}
        >
          <h3>{title}</h3>
          <div className={`${styles.expandContainer}`}>
            <div
              className={`${styles.expandContract} ${isOpen ? styles.expanded : styles.collapsed}`}
            >
              <p>{content}</p>
            </div>
          </div>

          <FontAwesomeIcon
            className={`${styles['up__arrow']} ${isOpen ? styles['rotate'] : ''}`}
            icon={faChevronUp}
          />
        </div>
      </div>
    </>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  additionalClass: PropTypes.string, // Nueva prop para clase adicional
}

export default Collapse
