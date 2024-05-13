import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/react.svg'
import Burger from '../assets/burger.svg'
import MobileMenu from './MobileMenu';

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className=' flex flex-col justify-center items-start'>
            <div className=' bg-gray-700 flex justify-between items-center px-5 h-24 w-full'>
                <img
                    src={Burger}
                    className='h-14 w-14 hover:scale-110 duration-300 cursor-pointer'
                    onClick={toggleMenu} />
                <img src={Logo} className='h-16 w-16 
            animate-spineh'/>
                <div className='h-14 w-14'></div>
            </div>

            {menuOpen && (
            <MobileMenu toggleMenu={toggleMenu}/>
            )}

        </header>
    )
}

export default NavBar