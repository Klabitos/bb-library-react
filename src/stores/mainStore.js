import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterLogic'

export default configureStore({
  reducer: {
    counter: counterReducer //un valor en la Store que va a ser counter y cuya logica esta gestionada por el reducer (counterReducer)
  }
})