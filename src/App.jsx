import Home from './pages/Home/Home'
import MainLayout from './layout/mainLayout'
import './App.css'
function App() {
  return (
    <MainLayout 
      appContent={<Home></Home>}>
    </MainLayout>
  )
}
export default App
