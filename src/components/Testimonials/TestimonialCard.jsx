import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const TestimonialCard = ({ testimonial }) => {
  const { content, author, position, rating } = testimonial
  
  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-lg relative z-10"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="absolute top-4 right-8 opacity-10">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <div className="mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-${i < rating ? 'yellow' : 'gray'}-400`}>
            <svg className="w-5 h-5 inline-block" fill={i < rating ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 text-lg italic mb-6">{content}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
          {author.split(' ').map(name => name[0]).join('')}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </motion.div>
  )
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
}

export default TestimonialCard