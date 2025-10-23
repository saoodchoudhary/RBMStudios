const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Modern MERN & Next.js websites for startups & businesses',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX']
  },
  {
    icon: '🛍️',
    title: 'Shopify Stores',
    description: 'Fully functional e-commerce stores ready to sell online',
    features: ['Payment Integration', 'Product Management', 'Mobile Optimized', 'Analytics Setup']
  },
  {
    icon: '🎥',
    title: 'Video Production',
    description: 'Product videos, promo ads, branding content',
    features: ['4K Quality', 'Professional Editing', 'Color Grading', 'Fast Delivery']
  },
  {
    icon: '🎨',
    title: 'Branding & Design',
    description: 'Logos, color palettes, visual identity',
    features: ['Logo Design', 'Brand Guidelines', 'Social Media Kit', 'Marketing Assets']
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF6B35] opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
            <span className="text-gray-700 text-sm font-semibold">WHAT WE OFFER</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Our </span>
            <span 
              className="bg-gradient-to-r from-[#FF6B35] to-orange-500 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)'
              }}
            >
              Services
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your brand, engage your audience, 
            and drive measurable business growth in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              {/* Background Gradient on Hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              
              {/* Animated Border */}
              <div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF6B35] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: '2px'
                }}
              ></div>

              <div className="relative p-6 sm:p-8 h-full flex flex-col">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-orange-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 text-[#FF6B35] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-4 mt-auto">
                  <button className="group/btn w-full bg-gray-100 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-orange-500 text-gray-700 hover:text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-gray-200 hover:border-transparent">
                    <span>Learn More</span>
                    <svg 
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#FF6B35] to-orange-500 group-hover:w-3/4 transition-all duration-500 rounded-t-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FF6B35] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25">
                Start Your Project
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}