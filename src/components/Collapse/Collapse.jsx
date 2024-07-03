import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../Collapse/collapse.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
//dnas cette composant on a travaillet juste sur le conteneur vide avec les id
//necessaires de la /data /aboutList.js qui sera importer pour son composant parent
function Collapse({ title, content, additionalClass }) {
  //isOpen est une variable d'etat
  //setIsOpen est la fonction qui permmet de metre a jour l'etat isOpen
  //useState(false) initialise l'état avec la valeur false
  const [isOpen, setIsOpen] = useState(false)

  //toggleCollapse est une fonction qui inverse la valeur de isOpen.
  //Si isOpen est true, il devient false, et vice versa. Cela se fait en utilisant la fonction setIsOpen.
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={`${styles.collapse__container}`}>
        <div
          className={`${styles.collapse} ${isOpen ? styles.active : ''}`}
          onClick={toggleCollapse}
        >
          {/*on va metre une condition de que s'il existe une additionalClass alors 
          on va laplique un autre style de borderRadiusHousing que se trouve
          daans le comosant parent Apropo, on va valider la nouvelle clase aditional
           comment props avec propTypes */}
          <h3 className={additionalClass ? styles.borderRadiusHousing : ''}>
            {title}
          </h3>
          {/*conteneur ou on va expandir le texte */}
          <div className={`${styles.expandContainer}`}>
            {/*si expandContract isOpen es true alors on rajoute un style  expanded (le texe sera afficher
            grace a margin-top: 0;)
            si non un style collapsed(le texte se cache avec un margin-top: 20%) */}
            <div
              className={`${styles.expandContract} ${isOpen ? styles.expanded : styles.collapsed}`}
            >
              {content}
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
  content: PropTypes.node.isRequired, //noode pour pouvoir faire une liste ordone sur le composant en Housing
  additionalClass: PropTypes.string, // Nueva prop para clase adicional
}

export default Collapse
