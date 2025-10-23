'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          company: '', 
          service: '', 
          budget: '', 
          message: '' 
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'shopify-store', label: 'Shopify Store' },
    { value: 'video-production', label: 'Video Production' },
    { value: 'branding-design', label: 'Branding & Design' },
    { value: 'complete-package', label: 'Complete Package' },
    { value: 'not-sure', label: 'Not Sure Yet' }
  ];

  const budgets = [
    { value: '5k-10k', label: '₹5,000 - ₹10,000' },
    { value: '10k-25k', label: '₹10,000 - ₹25,000' },
    { value: '25k-50k', label: '₹25,000 - ₹50,000' },
    { value: '50k-plus', label: '₹50,000+' },
    { value: 'consultation', label: 'Need Consultation' }
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements - Original Design */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0B1F3F 0%, #1E3A8A 50%, #0B1F3F 100%)'
        }}
      ></div>
      
      {/* Animated Background Shapes - Original Design */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF6B35] opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      
      {/* Grid Pattern Overlay - Original Design */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-ping"></div>
            <span className="text-white text-sm font-semibold">START YOUR PROJECT</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Create Something 
            <span 
              className="bg-gradient-to-r from-[#FF6B35] to-orange-400 bg-clip-text text-transparent block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)'
              }}
            >
              Amazing Together
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to transform your digital presence? Get in touch for a free consultation 
            and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mx-auto">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 sm:p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
            <p className="text-gray-300 mb-8">We typically respond within 2 hours</p>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl">
                <div className="flex items-center gap-3 text-green-100">
                  <span className="text-lg">✅</span>
                  <div>
                    <p className="font-semibold">Message Sent Successfully!</p>
                    <p className="text-sm text-green-200">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl">
                <div className="flex items-center gap-3 text-red-100">
                  <span className="text-lg">❌</span>
                  <div>
                    <p className="font-semibold">Failed to send message</p>
                    <p className="text-sm text-red-200">Please try again or contact us directly.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:outline-none transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:outline-none transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:outline-none transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-white text-sm font-medium mb-2">
                    Service Needed *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                      style={{ color: formData.service ? 'white' : '#9CA3AF' }}
                    >
                      <option value="" className="text-gray-900">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value} className="text-gray-900">
                          {service.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-white text-sm font-medium mb-2">
                    Project Budget *
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                      style={{ color: formData.budget ? 'white' : '#9CA3AF' }}
                    >
                      <option value="" className="text-gray-900">Select budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget.value} value={budget.value} className="text-gray-900">
                          {budget.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#FF6B35] to-orange-500 hover:from-orange-600 hover:to-[#e85520] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 cursor-pointer  shadow-lg shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    Send Message & Get Free Quote
                  </>
                )}
              </button>
            </form>

            {/* Quick Contact Buttons */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/919555203795"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer  flex items-center justify-center gap-2 text-center"
              >
                <span>💬</span>
                WhatsApp Chat
              </a>
              <a
                href="tel:+919555203795"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                <span>📞</span>
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>📞</span>
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email Us</h4>
                    <p className="text-gray-300">rbmstudios.co@gmail.com</p>
                    <p className="text-gray-400 text-sm">Typically replies within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">WhatsApp</h4>
                    <p className="text-gray-300">+91 95552 03795</p>
                    <p className="text-gray-400 text-sm">Instant response</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Business Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-300">Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>⭐</span>
                Why Choose RBM Studios?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '⚡', text: 'Fast Project Delivery' },
                  { icon: '💰', text: 'Affordable Pricing' },
                  { icon: '🛡️', text: '100% Satisfaction' },
                  { icon: '📞', text: '24/7 Support' },
                  { icon: '🎯', text: 'Expert Team' },
                  { icon: '🚀', text: 'Proven Results' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center text-white text-sm">
                      {item.icon}
                    </div>
                    <span className="text-white text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}