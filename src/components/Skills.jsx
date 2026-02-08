import { 
  FiCode, 
  FiTool, 
  FiGithub, 
  FiPackage, 
  FiCpu, 
  FiMonitor 
} from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      icon: <FiCode className="w-8 h-8" />,
      title: 'Languages',
      skills: ['Python', 'C/C++', 'JavaScript', 'Assembly', 'Bash'],
    },
    {
      id: 2,
      icon: <FiTool className="w-8 h-8" />,
      title: 'Automated Test',
      skills: ['Selenium', 'pytest', 'Jenkins', 'JMeter', 'Postman'],
    },
    {
      id: 3,
      icon: <FiGithub className="w-8 h-8" />,
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    },
    {
      id: 4,
      icon: <FiPackage className="w-8 h-8" />,
      title: 'IDEs',
      skills: ['VS Code', 'Arduino IDE', 'PyCharm', 'PlatformIO'],
    },
    {
      id: 5,
      icon: <FiCpu className="w-8 h-8" />,
      title: 'PCBA Design',
      skills: ['KiCad', 'Eagle', 'Altium', 'Fusion 360', 'EasyEDA'],
    },
    {
      id: 6,
      icon: <FiMonitor className="w-8 h-8" />,
      title: 'Operating Systems',
      skills: ['Linux', 'Windows', 'macOS', 'Embedded RTOS'],
    },
  ]

  return (
    <section id="skills" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title text-center mb-16">Skills & Tools</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={category.id}
            className="card p-6 animate-slide-up hover:border-primary dark:hover:border-primary transition-colors duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-primary to-secondary text-white rounded-lg mr-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
