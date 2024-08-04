import useCounter from "./useCounter"

export default function Counter() {
  const [counter, { countUp, countDown }] = useCounter()

  return (
    <div>
      <button onClick={countDown}>-</button>
      {counter}
      <button onClick={countUp}>+</button>
    </div>
  )
}
