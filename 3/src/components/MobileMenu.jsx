import { MenuOpen } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
function MobileMenu(toggleMenu) {
    return (
        <div className='bg-gray-800 h-screen w-1/2 rounded-br-lg animate-comeh'>
            <ul className=' py-8 flex flex-col gap-4'>
                <Link to='/' onClick={toggleMenu} className='text-zinc-100 font-semibold text-3xl bg-gray-600 pl-10 py-3 cursor-pointer'>Home</Link>
                <Link to='/about' onClick={toggleMenu} className='text-zinc-100 font-semibold text-3xl pl-10 py-3 cursor-pointer'>About</Link>
                <Link className='text-zinc-100 font-semibold text-3xl pl-10 py-3 cursor-pointer'>Contact</Link>
                <Link className='text-zinc-100 font-semibold text-3xl pl-10 py-3 cursor-pointer'>Connexion</Link>
            </ul>
        </div>
    )
}

export default MobileMenu