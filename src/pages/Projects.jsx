import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import SectionWrapper from '../components/SectionWrapper'

const projects = [
  {
    title: 'NGO Website',
    description:
      'This is an NGO website built using React, Vite, and Tailwind CSS as a part of a task. The website is hosted on Netlify',
    tags: ['React', 'Tailwind CSS', 'Netlify'],
    link: 'https://github.com/riyak-783/NGO-website-',
  },
  {
    title: 'Advanced Todo App',
    description:
      'This project is a full-featured Todo application built using React, Vite, and Tailwind CSS. It includes functionalities for creating, reading, updating, and deleting (CRUD) tasks, along with user authentication (login and signup) features.',
    tags: ['React','Tailwind CSS', 'Netlify'],
    link: 'https://github.com/riyak-783/Advance-Todo-App-master',
  },
  {
    title: 'CyberPunk Threejs',
    description:
      'This is a simple and interactive 3D website built using Three.js, HTML, Tailwind CSS, and JavaScript. The main feature of the website is a 3D helmet model that moves dynamically based on the user cursor movements.',
    tags: ['JavaScript', 'Three.js', 'Tailwind CSS', 'HTML'],
    link: 'https://github.com/riyak-783/Cyberpunk-threejs',
  },
  {
    title: 'Trackier Clone',
    description:
      'A feature-rich trackier application built using React, Vite, and Material-UI (MUI). This website provides an intuitive and responsive interface. It is just a normal clone website of trackier.com as a task I build this website.',
    tags: ['React', 'Material- UI', 'Tailwind CSS'],
    link: 'https://github.com/riyak-783/Trackier-clone',
  },
  {
    title: 'User Management System',
    description:'This is a user management system built using React, Vite, and Tailwind CSS. The website is hosted on Netlify. It includes functionalities for creating, reading, updating, and deleting (CRUD) users.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/riyak-783/User-management-system',
  },
  {
    title: 'Portfolio Management Task',
    description:'Manage your favorite websites with ease! Add, update, and delete website links along with thumbnails, all from a sleek dashboard.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Toastify', 'React Router'],
    link: 'https://github.com/riyak-783/Portfolio-developer-task',
  }
]

const Projects = () => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <AnimatedText
          text="My Projects"
          className="text-4xl md:text-5xl font-bold  pb-8 text-gray-800 dark:text-white"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 dark:text-white mb-12 text-lg max-w-2xl"
        >
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, type: 'spring', stiffness: 80 }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 8px 32px 0 rgba(124,58,237,0.10)',
              }}
              className="relative bg-white/60 backdrop-blur-md border dark:bg-white border-primary/10 shadow-xl rounded-2xl px-6 pt-8 pb-6 flex flex-col items-center transition-all duration-300"
            >
              {/* Project Icon/Initials */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-primary/40 flex dark:bg-white items-center justify-center text-white text-3xl font-bold shadow-lg">
                {project.title
                  .split(' ')
                  .map((w) => w[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <h3 className="text-xl font-bold mt-10 mb-2 text-primary text-center">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-black text-center mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center bg-gradient-to-r from-primary to-purple-400 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:from-purple-500 hover:to-primary transition-colors"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Projects