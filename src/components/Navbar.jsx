import React from 'react'
import icon from '../assets/icon.svg'
import { X,Menu  } from 'lucide-react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <header>
        <nav className=' flex items-center justify-between p-2 md:px-10 py-2 w-full shadow-xl'>
            {/* icon */}
            <div className="icon flex items-center gap-2">
            <Link to={'/'}><img src={icon} alt="icon" className='h-8 md:h-10' /></Link>
            <Link to={'/'}><span className='md:text-xl font-bold text-red-400'>PDF Hero</span></Link>
            </div>
            

            {/* nav links */}
            <div className='navLinks'>

            <ul className='flex gap-2 p-2'>
                <li className='border p-2 shadow border-slate-600 rounded bg-black text-white md:text-base text-sm'> <Link to={'/'}>Image to pdf</Link> </li>
                <li className='border p-2 shadow border-slate-600 rounded bg-black text-white md:text-base text-sm'> <Link to={'/pdftoimage'}>Pdf to image</Link>  </li>
            </ul>
            </div>

            {/* mobile menu */}
           
        </nav>
    </header>
    
    </>
  )
}

export default Navbar