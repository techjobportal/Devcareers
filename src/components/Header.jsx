import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="relative bg-white shadow-lg">
            <div className="py-5 px-4 sm:px-8 flex justify-between items-center">
                <h2 className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'>
                    Job Portal
                </h2>
                
                {/* Desktop Navigation */}
                <nav className='hidden md:flex gap-8 text-xl font-medium mr-8'> 
                    <a 
                        href='/' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group'
                    >
                        Home
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200'></span>
                    </a>
                    <a 
                        href='/company-details' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group'
                    >
                        Job Posting
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200'></span>
                    </a>
                    <a 
                        href='/resources' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group'
                    >
                        Resources
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200'></span>
                    </a>
                    <a 
                        href='/subscribe-us' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group'
                    >
                        Subscirbe
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200'></span>
                    </a>
                    <a 
                        href='/contact-us' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group'
                    >
                        Contact Us
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200'></span>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu}
                    className='md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none'
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className='flex flex-col py-4 px-4 space-y-4 bg-gray-50'>
                    <a 
                        href='/' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 text-lg font-medium py-2 border-l-4 border-transparent hover:border-orange-500 pl-4'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a 
                        href='/company-details' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 text-lg font-medium py-2 border-l-4 border-transparent hover:border-orange-500 pl-4'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Job Posting
                    </a>
                    <a 
                        href='/resources' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 text-lg font-medium py-2 border-l-4 border-transparent hover:border-orange-500 pl-4'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Resources
                    </a>
                    <a 
                        href='/subscribe-us' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 text-lg font-medium py-2 border-l-4 border-transparent hover:border-orange-500 pl-4'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Subscribe
                    </a>
                    <a 
                        href='/contact-us' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 text-lg font-medium py-2 border-l-4 border-transparent hover:border-orange-500 pl-4'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact Us
                    </a>
                </div>
            </nav>

            <div className="h-1 bg-gradient-to-t from-orange-500 to-transparent"></div>
        </div>
    )
}

export default Header