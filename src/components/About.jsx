import { FiCheckCircle } from 'react-icons/fi'
import { ASSETS } from '../assets/assetsConfig'

const About = () => {
  const highlights = [
    '20+ years of Software Testing Engineering experience',
    'Network & Application Penetration Testing specialist',
    'PCB Design Expert for secure smart products',
    'Currently working @ Crestron',
    'Interested in IoT automation',
    'Learning Arduino & embedded systems',
    'Open to collaborate on Python and Arduino projects',
    'Available for freelance PCB design - college projects only',
  ]

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img
              src={ASSETS.ABOUT_IMAGE}
              alt="About Karthik"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With over <span className="font-bold text-primary">20+ years of experience</span> as a 
              Software Testing Engineer, Network & Application Pentester and PCB Design Expert, 
              I'm on a mission to create technology solutions that connect the digital world with real life!
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I design and develop <span className="font-bold text-secondary">PCBA badges</span> and 
              secure smart products for daily lifestyles. 🚀
            </p>

            <div className="space-y-3 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <img
                src={ASSETS.HIGH_FIVE_GIF}
                alt="High Five"
                className="w-24 h-24 mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
