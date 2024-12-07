import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footerWrapper">

    <footer className='items-center flex justify-center bg-gradient-to-r from-rose-400 to-red-500 h-32 md:h-96 flex-col gap-5 md:mt-24'>
        <a href="https://www.linkedin.com/in/abhas101/" target='_blank'><button type='button' className='border border-slate-600 p-2 rounded-md shadow px-10 mt-10 '>Contact</button></a>
        <p>Provided by <span className='text-white'><a href="https://www.linkedin.com/in/abhas101/">@abhas</a></span></p>
    </footer>
    </div>
    
    </>
  )
}

export default Footer