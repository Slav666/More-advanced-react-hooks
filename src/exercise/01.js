import * as React from 'react'
const countReducer = (state, action) => {
  const {type, step} = action
  switch (type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + step,
      }
    }
    case 'decrement': {
      return {
        ...state,
        count: state.count - step,
      }
    }
    case 'reset': {
      return {
        ...state,
        count: state.count - state.count,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

function Counter({initialCount = 0, step = 2}) {
 
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  const increment = () => dispatch({type: 'increment', step})
  const decrement = () => dispatch({type: 'decrement', step})
  const reset = () => dispatch({type: 'reset', step})
  return (
    <>
      <button onClick={increment}>{count}</button>
      <button onClick={decrement}>{count}</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
