import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const AnimatedText = ({ text, className = '' }) => {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`flex flex-wrap overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          className="mr-3 inline-block"
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default AnimatedText
