const pricingPlans = [
  {
    title: 'Web Development',
    icon: '💻',
    price: '₹6,000',
    originalPrice: '₹10,000',
    period: 'one-time project',
    features: [
      'Modern Responsive Design',
      'SEO Optimized Pages',
      '1 Month Free Support',
      'Contact Form Integration',
      'Google Analytics Setup',
      'Social Media Integration'
    ],
    popular: false,
    savings: '40% OFF',
    delivery: '7-10 days',
    cta: 'Start Website Project'
  },
  {
    title: 'Shopify Stores',
    icon: '🛍️',
    price: '₹5,000',
    originalPrice: '₹8,000',
    period: 'complete store setup',
    features: [
      'Complete Store Setup',
      'Payment Gateway Integration',
      '20 Products Upload',
      'Mobile-Optimized Theme',
      'Basic SEO Configuration',
      '30 Days Free Support'
    ],
    popular: false,
    savings: '38% OFF',
    delivery: '5-7 days',
    cta: 'Launch E-commerce Store'
  },
  {
    title: 'Video Production',
    icon: '🎥',
    price: '₹1,000',
    originalPrice: '₹3,000',
    period: 'per 30-second video',
    features: [
      '30-60 Second Professional Video',
      'Creative Script Writing',
      'Premium Stock Assets',
      'Color Grading & Effects',
      '2 Revision Rounds',
      '48-Hour Delivery'
    ],
    popular: false,
    savings: '67% OFF',
    delivery: '2 days',
    cta: 'Create Video Content'
  },
  {
    title: 'Complete Package',
    icon: '⭐',
    price: '₹8,000',
    originalPrice: '₹15,000',
    period: 'all-in-one solution',
    features: [
      'Professional Website + Shopify',
      '3 Promo Videos (30s each)',
      'Social Media Branding Kit',
      'Complete Brand Guidelines',
      '3 Months Premium Support',
      'Priority Delivery'
    ],
    popular: true,
    savings: '47% OFF',
    delivery: '10-12 days',
    cta: 'Get Complete Package',
    badge: 'MOST POPULAR'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      
      {/* Subtle Background Shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#FF6B35] opacity-[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 opacity-[0.02] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
            <span className="text-gray-700 text-sm font-semibold">TRANSPARENT PRICING</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Investment </span>
            <span 
              className="bg-gradient-to-r from-[#FF6B35] to-orange-500 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)'
              }}
            >
              Plans
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategic pricing designed for business growth. Every package includes premium quality, 
            dedicated support, and measurable results.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8 mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`flex-1 min-w-0 group relative rounded-2xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-[#FF6B35] to-orange-500 text-white shadow-2xl border-2 border-white/20' 
                  : 'bg-white text-gray-900 shadow-lg border border-gray-100 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-white text-[#FF6B35] px-3 py-2 rounded-full font-bold text-sm shadow-lg flex items-center justify-center gap-2 border border-gray-200">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="flex flex-col h-full p-8 relative">
                {/* Header Section */}
                <div className="text-center mb-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto ${
                    plan.popular 
                      ? 'bg-white/20 text-white border border-white/30' 
                      : 'bg-gradient-to-br from-[#FF6B35] to-orange-500 text-white shadow-md'
                  }`}>
                    {plan.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.title}
                  </h3>
                  
                  {/* Delivery Time */}
                  <div className={`inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    plan.popular 
                      ? 'bg-white/20 text-white/90' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    <span>⏱️</span>
                    {plan.delivery}
                  </div>
                  
                  {/* Price Container */}
                  <div className="flex flex-col items-center justify-center mb-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-3xl lg:text-4xl font-bold">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className={`text-lg line-through ${
                          plan.popular ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    {/* Savings Badge */}
                    {plan.savings && (
                      <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold mt-2 ${
                        plan.popular 
                          ? 'bg-white text-[#FF6B35]' 
                          : 'bg-green-100 text-green-700 border border-green-200'
                      }`}>
                        {plan.savings}
                      </div>
                    )}
                  </div>
                  
                  <div className={`text-sm mt-2 ${
                    plan.popular ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    {plan.period}
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1 mb-8">
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.popular 
                            ? 'bg-white/20 text-white' 
                            : 'bg-green-100 text-green-600'
                        }`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className={`text-sm leading-relaxed ${
                          plan.popular ? 'text-white/90' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-[#FF6B35] hover:bg-gray-50 shadow-md'
                      : 'bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white hover:from-orange-500 hover:to-[#FF6B35] shadow-lg'
                  }`}>
                    {plan.cta}
                  </button>
                  
                  {/* Guarantee Text */}
                  <p className={`text-center text-xs mt-3 ${
                    plan.popular ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    Premium Quality • Professional Results
                  </p>
                </div>
              </div>

              {/* Professional Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                plan.popular 
                  ? 'bg-white' 
                  : 'bg-gradient-to-r from-[#FF6B35] to-orange-500'
              }`}></div>
            </div>
          ))}
        </div>

   
      </div>
    </section>
  );
}