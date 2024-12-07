import Navbar from "./components/Navbar";
import ITP from "./Screens/ITP";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PTI from "./Screens/PTI";
import Footer from "./components/Footer";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><ITP /></>
    },
    {
      path:'/pdftoimage',
      element:<> <Navbar/><PTI/></>

    }

  ])



  return (
    <>
    <RouterProvider router={router}/>

    <Footer/>

    </>
  )
}