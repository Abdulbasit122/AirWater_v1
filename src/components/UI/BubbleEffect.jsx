import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BubbleEffect = () => {
  const [bubbles, setBubbles] = useState([])
  
  useEffect(() => {
    // Generate initial bubbles
    const initialBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 30 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 40,
      duration: Math.random() * 15 + 15
    }))
    
    setBubbles(initialBubbles)
    
    // Add new bubbles periodically
    const interval = setInterval(() => {
      const newBubble = {
        id: Date.now(),
        size: Math.random() * 30 + 10,
        left: Math.random() * 100,
        delay: 0,
        duration: Math.random() * 15 + 15
      }
      
      setBubbles(prev => [...prev.slice(-19), newBubble])
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map(bubble => (
        <motion.div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-50px'
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: -window.innerHeight - 100,
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 20 + 10,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
      ))}
    </div>
  )
}

export default BubbleEffect