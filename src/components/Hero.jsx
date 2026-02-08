import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { ASSETS } from '../assets/assetsConfig'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container text-center relative z-10">
        <div className="animate-slide-up">
          <div className="mb-6">
            <img
              src={ASSETS.PROFILE_IMAGE}
              alt="Karthik Ekanthan"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary shadow-2xl object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hello 
            <img 
              src={ASSETS.WAVE_GIF}
              alt="wave"
              className="inline-block w-12 h-12 md:w-16 md:h-16 ml-2"
            />
            , I'm <span className="gradient-text">Karthik Ekanthan</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4">
            Network & Application Pentester
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
            PCB Design Expert | Lead Testing Engineer @{' '}
            <a 
              href="https://www.crestron.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary dark:text-blue-400 hover:text-secondary dark:hover:text-purple-400 transition-colors duration-300 font-semibold underline decoration-primary/30 hover:decoration-secondary/50"
            >
              Crestron
            </a>
          </p>

          <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 mb-8">
            Core Team Member of{' '}
            <a 
              href="https://www.iotsrg.org/team" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors duration-300 font-semibold"
            >
              IoTSRG
            </a>
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/kekanath"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/karthik-e-7915304b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/Sold3rMystic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <FiTwitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:smilekarthikreddy@gmail.com"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
