import MainLayout from './layout/mainLayout'
import Router from './router';
import './App.css'
function App() {
  return (
    <MainLayout 
      appContent={<Router />}>
    </MainLayout>
  )
}
export default App
