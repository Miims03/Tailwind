import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import LogoSimple from '../assets/logo-simple-V2.svg'
import LogoBig from '../assets/bannière-V2.svg'
import Burger from '../assets/burger.svg'
import { Link, useLocation } from 'react-router-dom'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [Animate, setAnimate] = useState(false)
    // const location = useLocation()

    const toggleMenu = () => {
        if (menuOpen) {
            setAnimate(true)
            setTimeout(() => {
                setAnimate(false)
                setMenuOpen(false)
            }, 300)
        } else {
            setMenuOpen(true)
        }
    }

    const navLinks = [
        { path: "/", name: "Home", icon: <CottageOutlinedIcon fontSize='medium'/> },
        { path: "/about", name: "About", icon:<ContactsOutlinedIcon fontSize='medium'/> },
        { path: "#", name: 'Contact', icon:<CallOutlinedIcon fontSize='medium'/> },
    ]
    // console.log(menuOpen)
    

    return (
        <header className='flex justify-start items-start'>
            {menuOpen && (
            <div 
            onClick={toggleMenu}
            className='h-screen z-10 bg-gray-950/40 w-full absolute lg:hidden'></div>
            )}
            <div className=' bg-cyan-400/10  flex justify-between items-center px-10 h-16 w-full lg:px-10'>
                <div className='flex flex-row justify-center items-center gap-16'>
                    <Link>
                        <img src={LogoSimple} className='h-10 w-10 lg:hidden'/>
                        <img src={LogoBig} className='h28 w-28 hidden lg:flex '/>
                        
                    </Link>
                    
                    
                    <ul className='hidden flex-row justify-center items-end gap-5 lg:flex '>
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                onClick={toggleMenu}
                                className={` font-semibold text-2xl py-3 flex cursor-pointer hover:underline hover:text-cyan-700 duration-300 ${location.pathname === link.path ? 'text-cyan-700 underline' : 'text-gray-900'}`}>
                                {link.name}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-row justify-center items-center gap-4 lg:w-52 h-12 w-12'>
                    <Link className='hidden ext-gray-900 font-semibold text-2xl py-3 cursor-pointer lg:flex'>Connexion</Link>
                    <div className='hidden bg-slate-600/50 rounded-full h-12 w-12 lg:flex'></div>
                </div>
                <div className='h-12 w-12 hover:scale-110 duration-300 cursor-pointer lg:hidden flex justify-center items-center'
                    onClick={toggleMenu}><MenuOutlinedIcon fontSize='large' className='text-cyan-700'/>
                </div>
                
            </div>

            {(menuOpen || Animate) && (
                <div className={`bg-zinc-100 h-full w-72 absolute lg:hidden right-0 z-20  
                ${menuOpen && !Animate ? 'animate-comeh' : 'animate-backeh'}
                `}>
                    <CloseOutlinedIcon 
                    onClick={toggleMenu}
                    className='text-cyan-700 absolute right-5 top-5 cursor-pointer'/>
                    <ul className='pt-16 flex flex-col gap-3 '>
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                onClick={toggleMenu}
                                className={`font-semibold text-xl pl-5 sm:pl-10 py-3 cursor-pointer flex items-center gap-4 hover:text-cyan-700 duration-300 ${location.pathname === link.path ? 'text-cyan-700 bg-cyan-400/10 ': 'text-gray-900'}`}>
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                    </ul>
                    <Link className='text-cyan-700  font-semibold text-xl sm:pl-10 py-2 px-20 cursor-pointer absolute bottom-10 flex justify-center items-center gap-4 border-2 rounded-xl right-3 hover:bg-cyan-400/10 duration-300'>
                        {/* <LoginOutlinedIcon fontSize='large'/> */}
                        Connexion</Link>
                </div>
            )}

        </header>
    )
}

export default NavBar