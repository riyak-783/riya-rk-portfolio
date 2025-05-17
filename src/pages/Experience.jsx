import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import AnimatedText from '../components/AnimatedText'
import SectionWrapper from '../components/SectionWrapper'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'CodeXOps Technologies Private Limited',
    duration: 'Dec,2024 - Present',
    responsibilities: [
      ' Currently working on Shopify, developing a custom theme as a Store Admin, while actively learning and exploring the Shopify ecosystem.',
      ' Designed a Car Music Player prototype for demo purposes using Figma, showcasing UI/UX design skills.',
      ' Enhanced the company website performance and UI using Next.js, contributing to a better user experience and faster load times.',
      'Created some design using Canva for the company social media platforms.',
      "Created some documentation and presentation for the company's internal tools and processes.",
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Suvidha Mahila Mandal Foundation',
    duration: 'Aug2024 - Sep2024',
    responsibilities: [
      'Worked on a project to develop a website for the NGO, focusing on user-friendly design and functionality.',
      'Collaborated with the team to gather requirements and implement features based on client needs.',
      'Gained experience in web development best practices and agile methodologies.',
      'Contributed to the overall improvement of the NGO\'s online presence.',
    ],
  },
]

const Experience = () => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <AnimatedText
          text="My Experience"
          className="text-4xl md:text-5xl font-bold  pb-8 text-gray-800 dark:text-white"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 dark:text-white mb-12 text-lg max-w-2xl"
        >
          Here is a summary of my professional journey and the roles I have held over
          the years.
        </motion.p>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index, type: 'spring', stiffness: 70 }}
              className="relative flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden"
            >
              {/* Colored Accent Bar */}
              <div className="h-2 md:h-auto md:w-2 w-full bg-primary" />
              {/* Logo/Initials */}
              <div className="flex flex-row md:flex-col items-center justify-center px-4 py-4 md:px-6 md:py-6 bg-primary/10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-md">
                  {exp.company.split(' ').map(w => w[0]).join('').slice(0,2)}
                </div>
                <span className="ml-3 md:ml-0 md:mt-2 text-xs text-primary font-semibold text-center">{exp.company}</span>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary">{exp.role}</h3>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs md:text-sm font-semibold mt-2 md:mt-0 w-max">
                    {exp.duration}
                  </span>
                </div>
                <ul className="mt-3 md:mt-4 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + 0.07 * i }}
                      className="flex items-start text-gray-700 text-xs md:text-sm"
                    >
                      <FaCheckCircle className="text-primary mr-2 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Experience