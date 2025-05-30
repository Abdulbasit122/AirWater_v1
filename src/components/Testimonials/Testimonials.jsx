import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()
  const intervalRef = useRef(null)
  
  const testimonials = [
    {
      id: 1,
      content: "AquAir's water filtration system has completely transformed the water quality in our home. We can taste and see the difference.",
      author: "Michael Johnson",
      position: "Homeowner",
      rating: 5
    },
    {
      id: 2,
      content: "As a restaurant owner, water quality is critical. AquAir's solutions have helped us maintain the highest standards for our customers.",
      author: "Sarah Williams",
      position: "Restaurant Owner",
      rating: 5
    },
    {
      id: 3,
      content: "The air purification systems from AquAir have significantly improved the air quality in our office building. Our employees have noticed fewer allergies.",
      author: "David Chen",
      position: "Facility Manager",
      rating: 4
    },
    {
      id: 4,
      content: "We've been using AquAir's industrial water management solutions for over two years, and the efficiency improvements have been substantial.",
      author: "Jennifer Rodriguez",
      position: "Plant Director",
      rating: 5
    }
  ]
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }
  
  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }
  
  useEffect(() => {
    // Animate the current testimonial
    controls.start({ opacity: 1, x: 0 })
    
    // Auto-advance testimonials
    intervalRef.current = setInterval(() => {
      nextTestimonial()
    }, 8000)
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [controls, currentIndex])
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-600 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from businesses and homeowners who have experienced the AquAir difference in water and air quality management.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5 hidden md:block">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-all"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-5 hidden md:block">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-all"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary-600 w-8' : 'bg-primary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-100 rounded-full -ml-32 opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full -mr-48 -mb-48 opacity-30"></div>
    </section>
  )
}

export default Testimonials