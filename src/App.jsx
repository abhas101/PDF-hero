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
    <div className="page h-screen bg-gradient-to-r from-indigo-400 to-cyan-400 ">

    <RouterProvider router={router}/>

    <Footer/>
    </div>

    </>
  )
}
