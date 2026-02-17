

import React from 'react'

const Footer = () => {
  return (
	 <div>
     <div className="bg-white border-t-2 border-orange-500 py-6">
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
        </div>
   </div>
  )
}

export default Footer
