export default function Footer() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Services', section: 'services' },
    { name: 'Portfolio', section: 'portfolio' },
    { name: 'Pricing', section: 'pricing' },
    { name: 'Testimonials', section: 'testimonials' },
    { name: 'Contact', section: 'contact' }
  ];

  const services = [
    'Web Development',
    'Shopify Stores',
    'Video Production',
    'Branding & Design',
    'Digital Marketing',
    'SEO Services'
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: '📷', 
      url: 'https://instagram.com/rbmstudios',
      color: 'hover:text-pink-400'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: 'https://linkedin.com/company/rbmstudios',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Facebook', 
      icon: '👥', 
      url: 'https://facebook.com/rbmstudios',
      color: 'hover:text-blue-500'
    },
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: 'https://twitter.com/rbmstudios',
      color: 'hover:text-sky-400'
    },
    { 
      name: 'YouTube', 
      icon: '🎥', 
      url: 'https://youtube.com/rbmstudios',
      color: 'hover:text-red-400'
    }
  ];

  const contactInfo = [
    { icon: '📧', text: 'info@rbmstudios.co', type: 'email' },
    { icon: '📞', text: '+91 90000 00000', type: 'phone' },
    { icon: '📍', text: 'Based in India • Serving Worldwide', type: 'location' }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF6B35] opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="xl:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="text-3xl font-black"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  RBM Studios
                </div>
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                We're a full-service digital agency creating stunning websites, powerful e-commerce solutions, 
                and engaging video content that helps brands thrive in the digital world.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                    <span className="text-lg">{item.icon}</span>
                    {item.type === 'email' ? (
                      <a href={`mailto:${item.text}`} className="text-sm">{item.text}</a>
                    ) : item.type === 'phone' ? (
                      <a href={`tel:${item.text}`} className="text-sm">{item.text}</a>
                    ) : (
                      <span className="text-sm">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${social.color} border border-gray-700`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="xl:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span>🔗</span>
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.section)}
                    className="block text-gray-300 hover:text-[#FF6B35] transition-all duration-300 hover:translate-x-2 w-full text-left flex items-center gap-2 group"
                  >
                    <span className="text-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300">▶</span>
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="xl:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span>🛠️</span>
                Services
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <span
                    key={service}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter & CTA */}
            <div className="xl:col-span-2">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span>📰</span>
                Stay Updated
              </h4>
              
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest digital insights and exclusive offers delivered to your inbox.
                </p>
                
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:outline-none transition-all duration-300"
                  />
                  <button className="w-full bg-gradient-to-r from-[#FF6B35] to-orange-500 hover:from-orange-500 hover:to-[#FF6B35] text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25">
                    Subscribe Now
                  </button>
                </div>
                
                <p className="text-gray-400 text-xs mt-3">
                  No spam ever. Unsubscribe anytime.
                </p>
              </div>

              {/* Quick CTA */}
              <div className="mt-6">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-gray-700 flex items-center justify-center gap-2"
                >
                  <span>🚀</span>
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 relative">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-orange-500"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p>© 2025 RBM Studios. All rights reserved. Crafted with ❤️ in India</p>
              </div>
              
              {/* Additional Links */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>🌍</span>
                  Serving clients worldwide
                </div>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>✅</span>
                100% Client Satisfaction
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>⚡</span>
                Fast Delivery Guaranteed
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>🛡️</span>
                Money-Back Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}