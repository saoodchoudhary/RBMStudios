const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'EcoWear Fashion',
    position: 'Founder & CEO',
    review: 'RBM Studios completely transformed our online presence. Our e-commerce sales increased by 150% in the first month alone! The team delivered beyond our expectations with a stunning Shopify store that perfectly captures our brand essence.',
    rating: 5,
    image: '👩‍💼',
    project: 'E-commerce Website',
    results: ['150% Sales Increase', '3x Mobile Traffic', '40% Lower Bounce Rate']
  },
  {
    name: 'Raj Patel',
    company: 'TechStart Inc.',
    position: 'Marketing Director',
    review: 'The video content created by RBM Studios perfectly captured our brand story and went viral on social media. Their attention to detail and creative approach helped us secure 3 major client partnerships within weeks of launch.',
    rating: 5,
    image: '👨‍💼',
    project: 'Brand Video Campaign',
    results: ['2M+ Views', '300% Engagement', '3 New Major Clients']
  },
  {
    name: 'Priya Sharma',
    company: 'BeautyGlow Cosmetics',
    position: 'Creative Director',
    review: 'From website development to complete branding - RBM Studios delivered exceptional quality. Their team understood our vision perfectly and created a cohesive brand identity that has helped us stand out in a competitive market.',
    rating: 5,
    image: '👩‍🎨',
    project: 'Complete Branding',
    results: ['85% Brand Recognition', '60% Social Growth', 'Market Leader']
  },
  {
    name: 'Arjun Mehta',
    company: 'FitLife Supplements',
    position: 'Operations Manager',
    review: 'Working with RBM Studios was a game-changer for our business. Their Shopify expertise and marketing strategies helped us scale from local to national presence. The ROI has been phenomenal!',
    rating: 5,
    image: '👨‍💻',
    project: 'Shopify + Marketing',
    results: ['200% Revenue Growth', 'National Expansion', '5-Star Reviews']
  },
  {
    name: 'Neha Kapoor',
    company: 'Luxe Interiors',
    position: 'Brand Manager',
    review: 'The professionalism and creativity of RBM Studios exceeded all expectations. They delivered a stunning website and marketing materials that perfectly reflect our luxury brand positioning.',
    rating: 5,
    image: '👩‍💼',
    project: 'Luxury Brand Website',
    results: ['70% Lead Increase', 'Premium Positioning', 'Industry Awards']
  },
  {
    name: 'Vikram Singh',
    company: 'FoodieDelight',
    position: 'Co-Founder',
    review: 'RBM Studios helped us create an amazing digital presence that boosted our online orders by 300%. Their video content and website design perfectly showcase our food quality and brand story.',
    rating: 5,
    image: '👨‍🍳',
    project: 'Food Delivery Platform',
    results: ['300% Order Growth', '4.9 App Rating', 'City-Wide Expansion']
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-3 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
            <span className="text-gray-700 text-sm font-semibold tracking-wide">CLIENT TESTIMONIALS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our digital solutions have driven measurable success for businesses across various industries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="columns columns-1 md:columns-2 lg:columns-3 gap-8 mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white mb-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-2xl text-gray-200 group-hover:text-[#FF6B35] transition-colors duration-300">
                    "
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-base line-clamp-5">
                    {testimonial.review}
                  </p>
                </blockquote>

                {/* Results Metrics */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {testimonial.results.map((result, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100"
                      >
                        ✓ {result}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-orange-500 rounded-full flex items-center justify-center text-xl text-white font-medium shadow-md">
                    {testimonial.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm font-medium">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Project Type */}
                <div className="mt-4">
                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-semibold border border-blue-100">
                    {testimonial.project}
                  </span>
                </div>
              </div>

              {/* Accent Border */}
              <div className="h-1.5 bg-gradient-to-r from-[#FF6B35] to-orange-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}