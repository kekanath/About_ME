import { useState } from 'react'
import { FiExternalLink, FiVideo } from 'react-icons/fi'
import VideoPopup from './VideoPopup'
import { ASSETS } from '../assets/assetsConfig'

const Activity = () => {
  const [videoPopup, setVideoPopup] = useState({ isOpen: false, url: '', title: '' })

  const openVideo = (url, title) => {
    setVideoPopup({ isOpen: true, url, title })
  }

  const closeVideo = () => {
    setVideoPopup({ isOpen: false, url: '', title: '' })
  }

  const activities = [
    {
      id: 1,
      conference: 'Appsec',
      location: 'Bangalore, IN',
      session: 'Soldering Village',
      format: 'Village',
      year: 2025,
      link: 'https://bangalore.appsecdays.org/',
      video: ASSETS.APPSEC_VIDEO,
    },
    {
      id: 2,
      conference: 'Craccon',
      location: 'New Delhi, IN',
      session: 'Hardware CTF',
      format: 'CTF',
      year: 2025,
      link: 'https://www.crac-learning.com/craccon25',
      video: null,
    },
    {
      id: 3,
      conference: 'Vulncon',
      location: 'Bangalore, IN',
      session: 'Solder & Spark Badge Village',
      format: 'Village',
      year: 2025,
      link: 'https://www.crac-learning.com/craccon25',
      video: null,
    },
    {
      id: 4,
      conference: 'SeaSides',
      location: 'Goa, IN',
      session: 'Advanced HW + BLE Exploitation',
      format: 'Workshop',
      year: 2025,
      link: 'https://seasides.net/mastering-iot-exploitation-advanced-hardware-and-bluetooth-security',
      video: null,
    },
    {
      id: 5,
      conference: 'BSides Dehradun',
      location: 'Dehradun, IN',
      session: 'BGA Dechipping Village',
      format: 'Village',
      year: 2024,
      link: null,
      video: null,
    },
    {
      id: 6,
      conference: 'Defcon Delhi',
      location: 'Delhi, IN',
      session: 'Microchip Makeover Village',
      format: 'Village',
      year: 2024,
      link: null,
      video: null,
    },
    {
      id: 7,
      conference: 'Vulncon',
      location: 'Bangalore, IN',
      session: 'Microchip Makeover Village',
      format: 'Village',
      year: 2024,
      link: null,
      video: null,
    },
    {
      id: 8,
      conference: 'NULL Community',
      location: 'Bangalore, IN',
      session: 'Microprobing with ICEBite',
      format: 'Talk',
      year: 2024,
      link: 'https://null.community/event_sessions/4278-microprobing-with-icebite',
      video: null,
    },
  ]

  return (
    <section id="activity" className="section-container bg-transparent dark:bg-transparent py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400">
          Activity
        </h2>
        
        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-xl shadow-2xl">
          <div className="bg-gray-900/60 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50">
            <table className="w-full min-w-max">
              <thead>
                <tr className="border-b border-gray-700/50">
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300 w-12">#</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300 min-w-[180px]">
                    Conference / Event
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300 min-w-[150px]">
                    Location
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300 min-w-[200px]">
                    Session / Role
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300 min-w-[120px]">
                    Format
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300 w-20">
                    Year
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300 w-24">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr
                    key={activity.id}
                    className="border-b border-gray-700/30 hover:bg-gray-800/40 transition-colors duration-200"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <td className="px-4 py-4 text-gray-400 font-medium">
                      {activity.id}
                    </td>
                    <td className="px-4 py-4 text-gray-200 font-medium">
                      {activity.conference}
                    </td>
                    <td className="px-4 py-4 text-gray-300">
                      {activity.location}
                    </td>
                    <td className="px-4 py-4 text-gray-300">
                      {activity.session}
                    </td>
                    <td className="px-4 py-4 text-gray-300">
                      {activity.format}
                    </td>
                    <td className="px-4 py-4 text-gray-300">
                      {activity.year}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        {activity.link && (
                          <a
                            href={activity.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors duration-200"
                            aria-label={`Link to ${activity.conference}`}
                          >
                            Link
                            <FiExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        )}
                        {activity.video && (
                          <button
                            onClick={() => openVideo(activity.video, `${activity.conference} - ${activity.session}`)}
                            className="inline-flex items-center px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors duration-200 cursor-pointer"
                            aria-label={`Watch video from ${activity.conference}`}
                          >
                            <FiVideo className="w-3 h-3 mr-1" />
                            Video
                          </button>
                        )}
                        {!activity.link && !activity.video && (
                          <span className="text-gray-600">—</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View Info */}
        <p className="mt-4 text-sm text-gray-400 text-center md:hidden">
          Scroll horizontally to view all columns →
        </p>
      </div>

      {/* Video Popup Modal */}
      <VideoPopup
        isOpen={videoPopup.isOpen}
        onClose={closeVideo}
        videoUrl={videoPopup.url}
        title={videoPopup.title}
      />
    </section>
  )
}

export default Activity
