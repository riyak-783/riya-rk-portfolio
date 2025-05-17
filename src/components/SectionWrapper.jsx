import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

const SectionWrapper = ({ children, delay = 0 }) => (
  <motion.section
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
  >
    {children}
  </motion.section>
)

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number
};

export default SectionWrapper