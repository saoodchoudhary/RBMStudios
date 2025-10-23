export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-20"
      style={{
        background: 'linear-gradient(135deg, #0B1F3F 0%, #1E3A8A 50%, #0B1F3F 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#FF6B35] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#FF6B35] opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-24">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 lg:mb-8 mx-auto lg:mx-0">
              <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-ping"></div>
              <span className="text-white text-sm font-medium">Full-Service Digital Agency</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 lg:mb-8">
              <span className="text-white block">We Build </span>
              <span 
                className="bg-gradient-to-r from-[#FF6B35] to-orange-400 bg-clip-text text-transparent block mt-2"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)'
                }}
              >
                Digital Experiences
              </span>
              <span className="text-white block mt-2">That Drive Growth</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
              From <span className="text-white font-semibold">code</span> to <span className="text-white font-semibold">content</span> — we create complete digital solutions that help your brand stand out and scale faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 lg:mb-16 px-4 sm:px-0">
              <button 
                className="group relative bg-[#FF6B35] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-orange-600 min-w-[200px] sm:min-w-[220px]"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(255, 107, 53, 0.5)'
                }}
              >
                <span className="relative z-10">Get Your Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm min-w-[200px] sm:min-w-[220px]">
                <span className="flex items-center justify-center gap-2">
                  View Our Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start px-4 sm:px-0">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm sm:text-base">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">95%</div>
                <div className="text-gray-400 text-sm sm:text-base">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400 text-sm sm:text-base">Support</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Right Side */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 px-4 sm:px-6 lg:px-0">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Main Device Mockup */}
              <div 
                className="relative w-full aspect-square max-w-md bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Screen Content */}
                <div className="absolute inset-4 bg-gray-900 rounded-2xl overflow-hidden">
                  {/* Browser-like Top Bar */}
                  <div className="flex items-center gap-2 p-4 bg-gray-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Animated Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm sm:text-lg">🚀</span>
                      </div>
                      <div>
                        <div className="w-24 h-2 sm:w-32 sm:h-3 bg-gray-700 rounded mb-2"></div>
                        <div className="w-20 h-1.5 sm:w-24 sm:h-2 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-gray-800 rounded-lg p-2 sm:p-3 animate-pulse" style={{animationDelay: `${item * 200}ms`}}>
                          <div className="w-full h-12 sm:h-16 bg-gray-700 rounded mb-1 sm:mb-2"></div>
                          <div className="w-3/4 h-1.5 sm:h-2 bg-gray-700 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-[#FF6B35] rounded-2xl rotate-12 shadow-2xl flex items-center justify-center">
                  <span className="text-white text-sm sm:text-2xl">🎬</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-blue-500 rounded-2xl -rotate-12 shadow-2xl flex items-center justify-center">
                  <span className="text-white text-sm sm:text-2xl">🛍️</span>
                </div>
              </div>

              {/* Background Glow Effects */}
              <div 
                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#FF6B35] opacity-20 rounded-full blur-3xl"
              ></div>
              
              <div 
                className="absolute -z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}