//on va a defirnir le parametres a l'interieur de Counter
//pour poivoir l'utilizer dans des autres composants
import { useMemo, useState, useCallback } from 'react'

function Counter(initialCount = 1, maxCount = 4) {
  const [count, setCount] = useState(initialCount)

  const increment = useCallback(() => {
    setCount((prevCount) => (prevCount === maxCount ? 1 : prevCount + 1))
  }, [maxCount])

  const decrement = useCallback(() => {
    setCount((prevCount) => (prevCount === 1 ? maxCount : prevCount - 1))
  }, [maxCount])

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
