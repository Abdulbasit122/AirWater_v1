import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import LanguageSelector from './LanguageSelector'
import logo from '../../assets/logo.png'

const Header = ({ scrollY }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <motion.img 
            src={logo} 
            alt="AquAir Logo" 
            // width={17}
            className="h-16  md:h-20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Navigation />
          <motion.button
            className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-5 rounded-full transition-all shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
        
        <div className="flex items-center md:hidden">
          <HamburgerMenu />
        </div>
        
        <div className="absolute top-0 right-4 md:right-8 mt-2">
          <LanguageSelector />
        </div>
      </div>
    </motion.header>
  )
}

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
      >
        <div className="w-6 flex flex-col space-y-1">
          <span className={`block h-0.5 bg-primary-600 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 bg-primary-600 transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-0.5 bg-primary-600 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-3">
            <a href="#home" className="text-primary-600 hover:text-primary-700 py-1">Home</a>
            <a href="#about" className="text-primary-600 hover:text-primary-700 py-1">About</a>
            <a href="#services" className="text-primary-600 hover:text-primary-700 py-1">Services</a>
            <a href="#solutions" className="text-primary-600 hover:text-primary-700 py-1">Solutions</a>
            <a href="#contact" className="text-primary-600 hover:text-primary-700 py-1">Contact</a>
          </nav>
        </div>
      )}
    </>
  )
}

Header.propTypes = {
  scrollY: PropTypes.number.isRequired
}

export default Header