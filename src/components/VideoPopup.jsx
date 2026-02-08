import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

const VideoPopup = ({ isOpen, onClose, videoUrl, title }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl mx-4 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors duration-200"
          aria-label="Close video"
        >
          <FiX className="w-8 h-8" />
        </button>

        {/* Video Title */}
        {title && (
          <h3
            id="video-modal-title"
            className="text-white text-xl font-semibold mb-4 text-center"
          >
            {title}
          </h3>
        )}

        {/* Video Player */}
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <video
            controls
            autoPlay
            className="w-full rounded-xl"
            style={{ maxHeight: '80vh' }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Close instruction */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Press ESC or click outside to close
        </p>
      </div>
    </div>
  )
}

export default VideoPopup
