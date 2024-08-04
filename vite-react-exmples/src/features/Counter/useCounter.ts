import { useState } from "react"

export default function useCounter() {
    const [counter, setCounter] = useState(0)

  const countUp = () => setCounter(counter + 1)
  const countDown = () => setCounter(counter - 1)

  return [counter, { countUp, countDown }] as const
}