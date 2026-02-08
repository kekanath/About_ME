import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { ASSETS } from '../assets/assetsConfig'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Water Level Controller',
      description: 'ESP32-based controller for water level monitoring and automation. Features real-time monitoring, automatic pump control, and web-based interface for remote management.',
      image: ASSETS.PROJECT_1_IMAGE,
      tags: ['ESP32', 'IoT', 'PCB Design', 'Automation'],
      link: '#',
    },
    {
      id: 2,
      title: 'EPDU',
      description: 'Power distribution and fault injection project with web-based UI. Advanced testing platform for embedded systems with programmable power management.',
      image: ASSETS.PROJECT_2_IMAGE,
      tags: ['Power Management', 'Web UI', 'Testing'],
      link: '#',
    },
    {
      id: 3,
      title: 'ATtiny UART CTF Sketch',
      description: 'Custom ATtiny85 sketch used in hardware CTFs and training. Designed for security research and embedded systems education.',
      image: ASSETS.PROJECT_3_IMAGE,
      tags: ['ATtiny85', 'CTF', 'Security', 'Hardware'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title text-center mb-16">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="card group animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 space-x-4">
                <a
                  href={project.link}
                  className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="View project"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={project.link}
                  className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="View on GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
