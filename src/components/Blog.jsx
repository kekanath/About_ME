import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Designing Secure PCBA Badges',
      excerpt: 'Notes and lessons learned while building secure, soldered badge hardware for conferences. In-depth exploration of security considerations in hardware design.',
      image: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/computer-820294_1280.jpg',
      date: '2026-01-15',
      readTime: '5 min read',
      link: '#',
    },
    {
      id: 2,
      title: 'Embedded Testing Workflows',
      excerpt: 'How I structure automated test benches for embedded devices and firmware. Best practices and tools for efficient testing pipelines.',
      image: 'https://cdn.pixabay.com/photo/2016/09/09/17/36/coding-1652346_1280.jpg',
      date: '2026-01-08',
      readTime: '7 min read',
      link: '#',
    },
  ]

  return (
    <section id="blog" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title text-center mb-16">Latest Blog Posts</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className="card group animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden h-56">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span className="flex items-center">
                  <FiCalendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center">
                  <FiClock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              
              <a
                href={post.link}
                className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors duration-300"
              >
                Read More
                <FiArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
