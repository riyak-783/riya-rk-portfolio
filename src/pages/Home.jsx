import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import SectionWrapper from '../components/SectionWrapper'
import heroImage from '../assets/images/Home.png' 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaShopify, FaFigma, FaPython, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Shopify', icon: <FaShopify className="text-green-600" /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
    { name: 'Python', icon: <FaPython className="text-blue-400" /> },
    { name: 'SQL', icon: <FaDatabase className="text-indigo-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
]

const SkillMarquee = () => (
  <div className="overflow-hidden relative py-8">
    <motion.div
      className="flex gap-12 w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 18,
        ease: 'linear',
      }}
      style={{ willChange: 'transform' }}
    >
      {[...skills, ...skills].map((skill, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="flex flex-col items-center min-w-[120px] px-4"
        >
          <div className="text-5xl mb-2 drop-shadow-lg">{skill.icon}</div>
          <span className="text-lg font-semibold text-gray-700 dark:text-white">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
)

const Home = () => {
  return (
    <>
      <SectionWrapper>
        <div className="container mx-auto px-4 pt-18 md:pt-28">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <AnimatedText
                text="Hi, I'm Riya Kumari"
                className="text-4xl md:text-6xl font-bold  pb-10  text-gray-800 dark:text-white"
              />
              <AnimatedText
                text="Software Engineer- CodeXOps Technology"
                className="text-2xl md:text-3xl font-medium mb-6 text-primary"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-600 mb-8 text-lg dark:text-white"
              >
                2024 graduate and Software Engineer at CodeXOps Technologies Private Limited, driven by a passion for creating impactful digital solutions. I enjoy tackling challenges and contributing to projects that make a difference. My journey in tech is fueled by continuous learning and collaboration, aiming to deliver meaningful results through innovation and dedication.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex space-x-4"
              >
                <a
                  href="/contact"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow hover:bg-primary/90 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  Contact Me
                </a>
                <a
                  href="/projects"
                  className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  View Projects
                </a>
              </motion.div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-lg"></div>
                <img
                  src={heroImage}
                  alt="Profile"
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            My Skills
          </h2>
          <SkillMarquee />
        </div>
      </SectionWrapper>
    </>
  )
}

export default Home