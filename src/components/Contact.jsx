import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin, FiBriefcase } from 'react-icons/fi'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: 'Email',
      value: 'smilekarthikreddy@gmail.com',
      link: 'mailto:smilekarthikreddy@gmail.com',
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      label: 'GitHub',
      value: '@kekanath',
      link: 'https://github.com/kekanath',
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Karthik Ekanthan',
      link: 'https://www.linkedin.com/in/karthik-e-7915304b/',
    },
    {
      icon: <FiTwitter className="w-6 h-6" />,
      label: 'Twitter',
      value: '@Sold3rMystic',
      link: 'https://x.com/Sold3rMystic',
    },
  ]

  const workInfo = [
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      label: 'Current Position',
      value: 'Lead Testing Engineer @ Crestron',
      link: 'https://www.crestron.com/',
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: 'Team Member',
      value: 'IoTSRG Core Team',
      link: 'https://www.iotsrg.org/team',
    },
  ]

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title text-center mb-16">Get In Touch</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just connecting with fellow tech enthusiasts!
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400">
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex items-center space-x-4 hover:border-primary dark:hover:border-primary group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-gradient-to-br from-primary to-secondary text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {workInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex items-center space-x-4 hover:border-secondary dark:hover:border-secondary group animate-slide-up"
              style={{ animationDelay: `${(contactInfo.length + index) * 0.1}s` }}
            >
              <div className="p-3 bg-gradient-to-br from-secondary to-accent text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-secondary transition-colors duration-300">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="mailto:smilekarthikreddy@gmail.com"
            className="btn-primary inline-block"
          >
            <FiMail className="inline-block w-5 h-5 mr-2 -mt-1" />
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
