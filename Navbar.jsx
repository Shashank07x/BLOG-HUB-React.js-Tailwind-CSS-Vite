import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FaBars, FaFacebook, FaXmark } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFillThreadsFill } from "react-icons/bs";

const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    const navItems = [
        {path: "/", link: "Home"},
        {path: "/Blogs", link: "Blogs"},
        {path: "/About", link: "About"},
        {path: "/Contact", link: "Contact"},
        {path: "/Services", link: "Services"},
    ]


  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className= ' px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white'>BLOG<span className='text-orange-500'>HUB</span></a>

            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link})=><li className='text-white' key={path}>
                        <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
                <a href="/" className='hover:text-orange-500'><FaSquareXTwitter /></a>
                <a href="/" className='hover:text-orange-500'><BsFillThreadsFill /></a>
                <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in '>Log in</button>
            </div>

            <div className='md:hidden'>
                <button onclick ={toggleMenu} className='cursor-pointer'>
                    {
                     isMenuOpen ? <FaXmark className='w-5 h-5'/> :    <FaBars className='w-5 h-5' /> 
                    }
                   
                </button>
            </div>

            <div>
            <ul className={'md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}'}>
                {
                    navItems.map(({path, link})=><li className='text-black' key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
