import { useState } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null)
  
  const navItems = [
    { 
      name: 'Home', 
      link: '#home',
      dropdown: null 
    },
    { 
      name: 'Services', 
      link: '#services',
      dropdown: [
        { name: 'Water Purification', link: '#purification' },
        { name: 'Air Filtration', link: '#filtration' },
        { name: 'Environmental Consulting', link: '#consulting' }
      ] 
    },
    { 
      name: 'Solutions', 
      link: '#solutions',
      dropdown: [
        { name: 'Residential', link: '#residential' },
        { name: 'Commercial', link: '#commercial' },
        { name: 'Industrial', link: '#industrial' }
      ] 
    },
    { 
      name: 'About', 
      link: '#about',
      dropdown: null 
    },
    { 
      name: 'Resources', 
      link: '#resources',
      dropdown: [
        { name: 'Blog', link: '#blog' },
        { name: 'Case Studies', link: '#case-studies' },
        { name: 'Downloads', link: '#downloads' }
      ] 
    }
  ]
  
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((item, index) => (
        <div 
          key={index}
          className="relative"
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <a 
            href={item.link}
            className="text-primary-600 hover:text-primary-700 font-medium transition-colors py-2"
          >
            {item.name}
            {item.dropdown && (
              <span className="ml-1">▼</span>
            )}
          </a>
          
          {item.dropdown && hoveredItem === index && (
            <motion.div 
              className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-20"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                <a
                  key={dropdownIndex}
                  href={dropdownItem.link}
                  className="block px-4 py-2 text-sm text-primary-600 hover:bg-primary-50 hover:text-primary-700"
                >
                  {dropdownItem.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Navigation