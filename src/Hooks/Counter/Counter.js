//useState : Permet de créer des variables d'état dans les composants fonctionnels.
//useCallback : Mémorise une fonction pour éviter qu'elle ne soit recréée à chaque rendu.
//useMemo : Mémorise une valeur calculée pour éviter qu'elle ne soit recalculée à chaque rendu.
import { useMemo, useState, useCallback } from 'react'

function Counter(initialCount = 1, maxCount = 4) {
  const [count, setCount] = useState(initialCount)

  //useCallback  Mémorise la fonction increment pour éviter qu'elle
  //ne soit recréée à chaque rendu.
  // La fonction est recréée uniquement si[maxCount] change.
  const increment = useCallback(() => {
    //Si prevCount est égal à maxCount, on remet le compteur à 1.
    setCount((prevCount) => (prevCount === maxCount ? 1 : prevCount + 1))
  }, [maxCount])

  const decrement = useCallback(() => {
    //Si prevCount est égal à 1, on remet le compteur à maxCount.
    setCount((prevCount) => (prevCount === 1 ? maxCount : prevCount - 1))
  }, [maxCount])

  //useMemo est utilisé pour mémoriser une valeur calculée
  // afin qu'elle ne soit recalculée que lorsque les dépendances changent.
  //Dans ce cas, isVisible est calculé uniquement lorsque maxCount change.
  //isVisible est défini comme étant true si maxCount est supérieur à 1
  //donc Les boutons de navigation (gauche et droite) ne seront affichés que si isVisible est true.
  const isVisible = useMemo(() => maxCount > 1, [maxCount])

  return { count, setCount, increment, decrement, isVisible }
}

export default Counter

/* Mon code de base pour bien travaille avec le composant Carousel

import { useMemo, useState, useCallback } from 'react'
//on va a defirnir le parametres a l'interieur de Counter
//pour poivoir l'utilizer dans des autres composants
function Counter(initialCount = 1, maxCount = 4) {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount((prevCount) => {
      if (prevCount === maxCount) {
        return 1
      }
      return prevCount + 1
    })
  }

  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount === 1) {
        return maxCount
      }
      return prevCount - 1
    })
  }
  //logique pour cache le compteur si on  a q'un seule element pictures dans la data ave useMemo
  const isVisible = useMemo(() => maxCount > 1, [maxCount])
  return { count, increment, decrement, isVisible }
}

export default Counter*/
