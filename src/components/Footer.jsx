import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/riyak-783/riyak-783' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/riya-kumari-452044201/' },
    { icon: <FaEnvelope />, url: 'riyasln783@gmail.com' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      
      className="bg-gray-50 py-8 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-white mb-4 md:mb-0">
            © {new Date().getFullYear()} My Portfolio. Made with ❤️
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#c77dff' }}
                className="text-gray-600 dark:text-white hover:text-primary text-xl transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer