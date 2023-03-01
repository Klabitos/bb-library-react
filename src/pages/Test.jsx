
import './Test.css'
import React from 'react'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from '../stores/counterLogic.js'


export default function Test(){
    const count = selectCount()
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    return(
        <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
    )
}