import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import FeatureCard from './FeatureCard'

const Features = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, threshold: 0.2 })
  
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  
  const features = [
    {
      id: 1,
      title: 'Enhanced Clarity',
      description: 'Advanced water purification systems that remove contaminants and ensure crystal clear water for your home or business.',
      icon: 'clarity',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Air Filtration',
      description: 'State-of-the-art air filtration technology that removes pollutants, allergens, and improves overall air quality.',
      icon: 'filtration',
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Efficient Cleaning',
      description: 'Eco-friendly cleaning solutions that maintain water systems and ensure long-lasting performance.',
      icon: 'cleaning',
      color: 'accent'
    },
    {
      id: 4,
      title: 'Smart Monitoring',
      description: 'IoT-based monitoring systems that provide real-time data on water quality and usage patterns.',
      icon: 'monitoring',
      color: 'primary'
    },
    {
      id: 5,
      title: 'Water Conservation',
      description: 'Innovative technologies that help reduce water waste and promote sustainable water management practices.',
      icon: 'conservation',
      color: 'secondary'
    },
    {
      id: 6,
      title: 'Expert Consultation',
      description: 'Professional guidance from water management experts to help you choose the right solutions for your needs.',
      icon: 'consultation',
      color: 'accent'
    }
  ]
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-600 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Aqua Air Solutions
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our comprehensive range of water and air management services designed to improve quality, efficiency, and sustainability.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full -ml-48 -mb-48 opacity-50"></div>
    </section>
  )
}

export default Features