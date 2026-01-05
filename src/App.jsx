
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Layout from './layout/Layout'
import Home from './pages/Home'
import ResumePage from './pages/Resume'
import ServicesPage from './pages/Services'
import ProjectSlider from './pages/Projects'
import ContactPage from './pages/Contact'

let router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/resume',
        element:<ResumePage/>
      },
      {
        path:'/services',
        element:<ServicesPage/>
      },
      {
        path:'/projects',
        element:<ProjectSlider/>
      },
      {
        path:'/contact',
        element:<ContactPage/>
      }
    ]
  }
])

function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
