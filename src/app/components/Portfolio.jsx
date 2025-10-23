import { useState } from "react";

const projects = [
  {
    title: 'TechStart SaaS Application',
    description: 'Enterprise-grade Next.js platform with real-time analytics, user management, and scalable architecture for tech startup.',
    type: 'Web Application',
    category: 'Web Development',
    duration: '3 Weeks',
    results: ['40% Conversion Rate', '95% SEO Score', 'PWA Enabled'],
    image: '💻',
    gradient: 'from-blue-500 to-purple-600',
    technologies: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    client: 'TechStart Inc.',
    industry: 'SaaS Technology'
  },
  {
    title: 'BeautyGlow Video Campaign',
    description: 'Professional video production with motion graphics, color grading, and social media optimization for product launch campaign.',
    type: 'Marketing Video',
    category: 'Video Production',
    duration: '1 Week',
    results: ['2M+ Views', '300% Engagement', 'Viral Reach'],
    image: '🎥',
    gradient: 'from-pink-500 to-rose-600',
    technologies: ['Premiere Pro', 'After Effects', '4K Quality'],
    client: 'BeautyGlow Cosmetics',
    industry: 'Beauty & Cosmetics'
  },
  {
    title: 'Luxe Interiors Brand System',
    description: 'Comprehensive brand identity including logo design, visual language, and marketing collateral for luxury interior design firm.',
    type: 'Brand Identity',
    category: 'Branding',
    duration: '4 Weeks',
    results: ['Brand Recognition', 'Premium Positioning', 'Industry Awards'],
    image: '🎨',
    gradient: 'from-amber-500 to-orange-600',
    technologies: ['Illustrator', 'Photoshop', 'Brand Guidelines'],
    client: 'Luxe Interiors',
    industry: 'Interior Design'
  },
  {
    title: 'EcoWear Fashion E-commerce',
    description: 'Complete Shopify store development with custom theme, payment gateway integration, and mobile-optimized design for sustainable fashion brand.',
    type: 'E-commerce Platform',
    category: 'Shopify',
    duration: '2 Weeks',
    results: ['150% Sales Growth', '3s Load Time', 'Mobile-First'],
    image: '🛍️',
    gradient: 'from-green-500 to-emerald-600',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
    client: 'EcoWear Fashion',
    industry: 'Fashion Retail'
  },
  {
    title: 'FoodieDelight Mobile App',
    description: 'React Native application with real-time order tracking, payment processing, and seamless user experience for food delivery service.',
    type: 'Mobile Application',
    category: 'App Development',
    duration: '6 Weeks',
    results: ['4.9★ Rating', '50K+ Downloads', 'Instant Delivery'],
    image: '📱',
    gradient: 'from-red-500 to-orange-600',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    client: 'FoodieDelight',
    industry: 'Food Delivery'
  },
  {
    title: 'Corporate Business Portal',
    description: 'Enterprise website with CMS integration, multi-language support, and advanced security features for corporate client.',
    type: 'Corporate Website',
    category: 'Web Development',
    duration: '5 Weeks',
    results: ['Enterprise Grade', '99.9% Uptime', 'Global CDN'],
    image: '🏢',
    gradient: 'from-gray-600 to-blue-700',
    technologies: ['WordPress', 'PHP', 'MySQL', 'AWS'],
    client: 'Corporate Solutions Ltd.',
    industry: 'Business Services'
  }
];

export default function Portfolio() {
  const categories = ['All', 'Web Development', 'Shopify', 'Video Production', 'Branding', 'App Development'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gray-50 rounded-lg px-6 py-3 mb-8 border border-gray-200">
            <div className="w-3 h-3 bg-[#FF6B35] rounded-full"></div>
            <span className="text-gray-700 text-sm font-semibold tracking-wider uppercase">PORTFOLIO SHOWCASE</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#FF6B35]">Work</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A curated selection of projects demonstrating our expertise in delivering exceptional digital solutions 
            that drive business growth and user engagement.
          </p>
        </div>

        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 border-2 ${
                activeCategory === category
                  ? 'bg-[#FF6B35] text-white border-[#FF6B35] shadow-lg'
                  : 'bg-white text-gray-700 hover:text-gray-900 border-gray-300 hover:border-gray-400 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="column columns-1 lg:columns-2 xl:columns-3 gap-8  mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl mb-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Project Header */}
              <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/95">
                  {project.image}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                
                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    {project.duration}
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Client & Industry */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-900">{project.client}</span>
                  <span className="text-sm text-gray-500">{project.industry}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {project.title}
                </h3>

                {/* Project Type */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold border border-blue-100">
                    {project.type}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {project.description}
                </p>

                {/* Results Metrics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Results</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.results.map((result, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 px-4 py-3 bg-green-50 rounded-lg border border-green-100"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="inline-flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-semibold text-base transition-colors duration-300 shadow-lg hover:shadow-xl">
                  View Case Study
                </button>
              </div>

              {/* Accent Border */}
              <div className="h-2 bg-gradient-to-r from-[#FF6B35] to-orange-500"></div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
}