import logo from './logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { increment, decrement, incrementByAmount } from './store/slices/counter/counterSlice';

function App() {
  const { counter } = useSelector(state=> state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>count is: {counter}</p>
        <p>
          <button type="button" onClick={() => { dispatch(increment())}}>
            Increment
          </button>
          <button type="button" onClick={() => { dispatch(decrement())}}>
            Decrement
          </button>
          <button type="button" onClick={() => { dispatch(incrementByAmount(2))}}>
            IncrementBy
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
