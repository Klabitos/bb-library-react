import HomeComponent from './components/HomeComponent.jsx'
import InitialInfoDefault from './components/InitialInfoDefault'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <ChakraProvider>

      <div className="App">
        <HomeComponent></HomeComponent>
        <InitialInfoDefault></InitialInfoDefault>
      </div>

    </ChakraProvider>
  )
}
export default App
