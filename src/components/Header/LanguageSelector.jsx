import { useState } from 'react'
import { motion } from 'framer-motion'

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'en', name: 'English' })
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ]
  
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
  }
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm text-primary-600 hover:text-primary-700 focus:outline-none"
      >
        <span className="mr-1">{selectedLanguage.code.toUpperCase()}</span>
        <span className="text-xs">▼</span>
      </button>
      
      {isOpen && (
        <motion.div 
          className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                selectedLanguage.code === language.code
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-primary-600 hover:bg-primary-50 hover:text-primary-700'
              }`}
            >
              {language.name}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default LanguageSelector