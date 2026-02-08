import { ASSETS } from '../assets/assetsConfig'

const Gallery = () => {
  const galleries = [
    {
      id: 1,
      title: 'PCB Work',
      description: 'Professional PCB design and prototyping',
      image: ASSETS.GALLERY_PCB,
    },
    {
      id: 2,
      title: 'Soldering',
      description: 'Precision soldering and assembly',
      image: ASSETS.GALLERY_SOLDERING,
    },
    {
      id: 3,
      title: 'Hardware Labs',
      description: 'Testing and development workspace',
      image: ASSETS.GALLERY_HARDWARE,
    },
  ]

  return (
    <section id="gallery" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title text-center mb-16">Gallery</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {galleries.map((item, index) => (
          <div
            key={item.id}
            className="card group animate-slide-up cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6">
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
