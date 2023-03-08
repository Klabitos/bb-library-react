import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from './layout/MainLayout/MainLayout'

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
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
