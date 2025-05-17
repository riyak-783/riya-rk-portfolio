import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedText from '../components/AnimatedText'
import SectionWrapper from '../components/SectionWrapper'
import { FiMail, FiMapPin } from 'react-icons/fi'
import MobileBro from '../assets/images/Mobile-bro.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 ">
        <AnimatedText
          text="Get In Touch"
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 dark:text-white mb-12 text-lg max-w-2xl"
        >
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </motion.p>

        <div className="flex flex-col dark:text-black md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-white font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-white font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-white font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:w-1/2"
          >
            <div className="relative bg-white p-8 rounded-xl shadow-md h-full border-l-4 border-primary/70 overflow-hidden">
              {/* Decorative Gradient Top Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-400 to-pink-400 rounded-t-xl" />

              {/* Full-height right-side image */}
              <img
                src={MobileBro}
                alt="Contact Illustration"
                className="hidden md:block absolute top-0 right-0 h-full w-1/2 object-cover rounded-r-xl opacity-90"
                style={{ zIndex: 1 }}
              />

              {/* Card content with higher z-index */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-1 mt-2">
                  Contact Information
                </h3>
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    Let&apos;s connect and collaborate!
                  </span>
                </div>
                <div className="space-y-6 mt-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <FiMail className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">Email</h4>
                      <a
                        href="mailto:riyasln783@gmail.com"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        riyasln783@gmail.com
                      </a>
                    </div>
                  </div>
            
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <FiMapPin className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">Location</h4>
                      <p className="text-gray-600">Sultanpur, Uttar Pradesh</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-gray-700 mb-4">
                    Follow me on social media
                  </h4>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com/riyak-783"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="bg-primary/10 text-primary hover:bg-primary/20 p-3 rounded-full transition-colors"
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/riya-kumari-452044201"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="bg-primary/10 text-primary hover:bg-primary/20 p-3 rounded-full transition-colors"
                    >
                      LinkedIn
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact