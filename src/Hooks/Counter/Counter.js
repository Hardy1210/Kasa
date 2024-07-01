import { useMemo, useState } from 'react'
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

export default Counter
