import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from './layout/MainLayout/MainLayout'
import DetailGame from './pages/DetailGame/DetailGame';
import ErrorRouter from './pages/Error/ErrorRouter';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "game-details",
    element: <DetailGame></DetailGame>
  },
  {
    path: '*',
    element: <ErrorRouter></ErrorRouter>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <MainLayout appContent={
        <RouterProvider router={router} />
      }>
      </MainLayout>
    </ChakraProvider>
  </React.StrictMode>,
)
