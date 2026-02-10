import React from 'react'
import Header1 from '../components/Header1'
const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Your Gateway to <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Career Success</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest job opportunities, access valuable career resources, and connect with top employers all in one place.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Latest Jobs Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Latest Job Postings</h3>
              <p className="text-gray-600 mb-6">
                Browse through hundreds of fresh job opportunities posted daily by leading companies across various industries.
              </p>
              <a href="/company-details" className="text-orange-500 font-semibold hover:text-orange-600 inline-flex items-center group">
                Explore Jobs
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Resources Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Career Resources</h3>
              <p className="text-gray-600 mb-6">
                Access helpful guides, resume templates, interview tips, and career advice to help you land your dream job.
              </p>
              <a href="/resources" className="text-orange-500 font-semibold hover:text-orange-600 inline-flex items-center group">
                View Resources
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Contact Card */}
            {/* <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Have questions or need assistance? Our team is here to help you with any queries about jobs, applications, or our platform.
            </p>
            <a href="/contact-us" className="text-orange-500 font-semibold hover:text-orange-600 inline-flex items-center group">
              Contact Us
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div> */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to receive the latest job postings, career tips, and updates directly to your inbox.
              </p>
              <a
                href="/subscribe-us"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center justify-center group"
              >
                Subscribe Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="bg-white border-t-2 border-orange-500 py-6">
          <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center items-center gap-6 text-sm">
            <a href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</a>
            <span className="text-gray-300">|</span>
            <a href="/company-details" className="text-gray-600 hover:text-orange-500 transition-colors">Job Posting</a>
            <span className="text-gray-300">|</span>
            <a href="/resources" className="text-gray-600 hover:text-orange-500 transition-colors">Resources</a>
            <span className="text-gray-300">|</span>
            <a href="/contact-us" className="text-gray-600 hover:text-orange-500 transition-colors">Contact Us</a>
            <span className="text-gray-300">|</span>
            <a href="/legal-info" className="text-gray-600 hover:text-orange-500 transition-colors">Legal</a>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-xs">© 2024 Job Portal. All rights reserved.</p>
          </div>
        </footer>
      </div></>
  )
}

export default Home