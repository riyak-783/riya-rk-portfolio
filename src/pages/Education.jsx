import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import SectionWrapper from '../components/SectionWrapper'

const education = [
  {
    degree: 'Bachelor of Technology in Electronics and Communication Engineering',
    institution: 'Gautam Buddha University',
    year: '2020 - 2024',
    cgpa: '8.2/10',
    description:
      'Pursued a degree in Electronics and Communication Engineering with a focus on software development and embedded systems. Participated in various projects and internships to enhance practical skills.',
  },
  {
    degree: 'Intermediate in Science(CBSE)',
    institution: 'Saraswati Vidya Mandir',
    year: '2017 - 2018',
    cgpa: '7.6/10',
    description:
      'Completed intermediate education with a focus on Science and Mathematics. Developed a strong foundation in analytical and problem-solving skills, which laid the groundwork for further studies in engineering.',
  },
  {
    degree: 'High School (CBSE)',
    institution: 'Tiny Tots Public School',
    year: '2015 - 2016',
    cgpa: '9.6/10',
    description:
      'Achieved high academic performance in high school, excelling in subjects such as Mathematics and Science. Participated in various extracurricular activities, including science fairs.',
  },
]

const Education = () => {
return (
    <SectionWrapper>
        <div className="container mx-auto px-4">
            <AnimatedText
                text="My Education"
                className="text-4xl md:text-5xl font-bold  pb-7 text-gray-800 dark:text-white"
            />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 dark:text-white mb-12 text-lg max-w-2xl"
            >
                My academic background has provided me with a strong foundation in
                computer science and software development principles.
            </motion.p>

            <div className="relative pl-6 before:absolute before:top-0 before:left-3 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary/60 before:to-primary/10 before:rounded-full">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 * index, type: 'spring', stiffness: 80 }}
                        whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                        className="relative mb-10 last:mb-0 group"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-6 top-6 w-5 h-5 bg-primary/80 border-4 border-white rounded-full shadow-lg group-hover:scale-110 transition-transform"></span>
                        {/* Card */}
                        <div
                            className="bg-white/60 backdrop-blur-md border border-primary/10 shadow-xl rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/80 group-hover:border-primary/30"
                            style={{ backgroundColor: 'rgb(252 231 255)' }}
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                <h3 className="text-2xl font-bold text-primary drop-shadow-sm">
                                    {edu.degree}
                                </h3>
                                <div className="flex flex-col md:items-end">
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-1 md:mb-0">
                                        {edu.year}
                                    </span>
                                    <span className="bg-white text-primary border border-primary/20 px-2 py-0.5 rounded-full text-xs font-medium shadow-sm mt-1">
                                        CGPA: {edu.cgpa}
                                    </span>
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">
                                {edu.institution}
                            </h4>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + 0.15 * index }}
                                className="text-gray-600"
                            >
                                {edu.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </SectionWrapper>
)
}

export default Education