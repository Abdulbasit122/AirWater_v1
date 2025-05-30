import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const WaterDrops = () => {
  const [drops, setDrops] = useState([])

  useEffect(() => {
    // Create initial water drops
    const initialDrops = Array.from({ length: 15 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 10
    }))
    
    setDrops(initialDrops)
    
    // Add new drops periodically
    const interval = setInterval(() => {
      setDrops(prevDrops => [
        ...prevDrops,
        {
          id: Math.random(),
          x: Math.random() * 100,
          y: -20, // Start above the visible area
          size: Math.random() * 20 + 10,
          delay: 0,
          duration: Math.random() * 5 + 10
        }
      ])
    }, 3000)
    
    // Remove excess drops to prevent too many elements
    const cleanup = setInterval(() => {
      setDrops(prevDrops => prevDrops.slice(-30))
    }, 10000)
    
    return () => {
      clearInterval(interval)
      clearInterval(cleanup)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute rounded-full bg-white bg-opacity-30"
          style={{
            left: `${drop.x}%`,
            top: `${drop.y}%`,
            width: `${drop.size}px`,
            height: `${drop.size * 1.3}px`,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: ['0%', '120%'],
            opacity: [0, 0.7, 0]
          }}
          transition={{ 
            duration: drop.duration,
            delay: drop.delay,
            ease: "easeInOut",
            times: [0, 0.7, 1],
            repeat: Infinity,
            repeatDelay: Math.random() * 5
          }}
        />
      ))}
    </div>
  )
}

export default WaterDrops