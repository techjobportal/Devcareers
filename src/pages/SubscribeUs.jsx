import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SubscribeUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // EmailJS configuration
    const serviceID = 'service_p8e5ryw'; // Replace with your EmailJS service ID
    const templateID = 'template_gq10icu'; // Replace with your EmailJS template ID
    const publicKey = 'v-3hNuDkN-OIpaeKR'; // Replace with your EmailJS public key

    const templateParams = {
      to_email: 'info.techjobalert@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      category: formData.category,
      message: `New subscription request from ${formData.name} (${formData.email}) interested in ${formData.category}`
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for subscribing! We\'ll keep you updated.'
      });
      setFormData({ name: '', email: '', category: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stay Connected With Us
          </h1>
          <p className="text-lg text-gray-600">
            Join our community across multiple platforms and never miss an update
          </p>
        </div>

        {/* Social Channels */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 flex-row">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@MeetSonicode04"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-red-500 group"
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">YouTube</h3>
            <p className="text-gray-600 text-center text-sm">
              Watch tutorials, tips & career advice
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://whatsapp.com/channel/0029Vb7ifSqFcow9Tx84Ya3S"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-green-500 group"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-center text-sm">
              Get instant job alerts & updates
            </p>
          </a>

          {/* LinkedIn */}
          {/* <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600 group"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">LinkedIn</h3>
            <p className="text-gray-600 text-center text-sm">
              Connect & grow professionally
            </p>
          </a> */}
        </div>

        {/* Subscription Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Get personalized job recommendations based on your interests
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                placeholder="Enter your email"
              />
            </div>

            {/* Category Dropdown */}
            <div>
  <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
    Job Category
  </label>
  <div className="relative">
    <select
      id="category"
      name="category"
      value={formData.category}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white text-gray-800 cursor-pointer appearance-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ff6b35'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.75rem center',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '2.5rem'
      }}
    >
      <option value="" className="text-gray-500">Select your interest</option>
      <option value="software-developer" className="text-gray-800">Software Developer</option>
      <option value="java-developer" className="text-gray-800">Java Developer</option>
      <option value="python-developer" className="text-gray-800">Python Developer</option>
      <option value="frontend-developer" className="text-gray-800">Frontend Developer</option>
      <option value="backend-developer" className="text-gray-800">Backend Developer</option>
      <option value="fullstack-developer" className="text-gray-800">Full Stack Developer</option>
      <option value="mobile-developer" className="text-gray-800">Mobile Developer</option>
      <option value="devops-engineer" className="text-gray-800">DevOps Engineer</option>
      <option value="data-scientist" className="text-gray-800">Data Scientist</option>
      <option value="ml-engineer" className="text-gray-800">ML Engineer</option>
      <option value="ui-ux-designer" className="text-gray-800">UI/UX Designer</option>
      <option value="product-manager" className="text-gray-800">Product Manager</option>
      <option value="qa-engineer" className="text-gray-800">QA Engineer</option>
      <option value="cloud-engineer" className="text-gray-800">Cloud Engineer</option>
      <option value="cybersecurity" className="text-gray-800">Cybersecurity</option>
    </select>
  </div>
</div>

            {/* Status Messages */}
            {submitStatus.message && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold py-4 rounded-lg transition-colors inline-flex items-center justify-center group ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              {!isSubmitting && (
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default SubscribeUs;