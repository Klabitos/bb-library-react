import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1       // doesn't actually mutate the state because it uses the immer library,
        },                         // which detects changes to a "draft state" and produces a brand new
        decrement: (state) => {    // immutable state based off those changes
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementStateByAmount = (amount) => (dispatch) => {     // The function below is called a thunk and allows us to perform async logic. It
    dispatch(incrementByAmount(amount))                               // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
}                                                                     // will call the thunk with the `dispatch` function as the first argument. 

export const selectCount = (state) => state.counter.value   // The function below is called a selector and allows us to select a value from
                                                            // the state. Selectors can also be defined inline where they're used instead of
                                                            // in the slice file. For example: `useSelector((state) => state.counter.value)`
export default counterSlice.reducer



/*

const incrementActionGenerator = () => { //metodo que devuelve objetos ACTION -- son objetos con type
    return {
      type: 'counter/increment'
    }
  }

const initialState = { value: 0 }

function counterReducer(state = initialState, action) { //Los reducer son los que modifican el state(que es inmutable y hacen copia) con ACTIONS
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}

// CONFIGURAMOS LA STORE  

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer }) //Le pasamos el REDUCER que maneja todos los cambios

console.log(store.getState()) //Obtenemos el state
store.dispatch({ type: 'counter/increment' }) //Si queremos usar el reducer necesitamos el DISPATCH y mandarle un objeto ACTION

console.log(store.getState())
store.dispatch(incrementActionGenerator())

*/