import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { getIconComponent } from '../UI/IconComponents'

const FeatureCard = ({ feature }) => {
  const { title, description, icon, color } = feature
  
  const IconComponent = getIconComponent(icon)
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  const colorClasses = {
    primary: {
      bg: 'bg-primary-50',
      border: 'border-primary-200',
      icon: 'text-primary-500',
      hover: 'group-hover:bg-primary-100'
    },
    secondary: {
      bg: 'bg-secondary-50',
      border: 'border-secondary-200',
      icon: 'text-secondary-500',
      hover: 'group-hover:bg-secondary-100'
    },
    accent: {
      bg: 'bg-accent-50',
      border: 'border-accent-200',
      icon: 'text-accent-500',
      hover: 'group-hover:bg-accent-100'
    }
  }
  
  const colorStyle = colorClasses[color]
  
  return (
    <motion.div 
      variants={item}
      className="group"
    >
      <div className={`water-card-bg h-full rounded-xl border ${colorStyle.border} p-6 shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden`}>
        <div className={`w-16 h-16 rounded-lg ${colorStyle.bg} flex items-center justify-center mb-6 transition-all duration-300 ${colorStyle.hover}`}>
          <IconComponent className={`w-8 h-8 ${colorStyle.icon}`} />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        <motion.div 
          className="mt-6 flex items-center text-sm font-medium text-primary-600"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Learn more 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </motion.div>
        
        <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-gradient-to-br from-transparent to-primary-100 opacity-30"></div>
      </div>
    </motion.div>
  )
}

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired
}

export default FeatureCard