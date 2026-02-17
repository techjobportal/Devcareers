import React from 'react'

const ApplySection = ({ selectedCompany }) => {
  const copyEmail = () => {
    if (selectedCompany.email) {
      navigator.clipboard.writeText(selectedCompany.email)
      const label = document.getElementById('hr-label')
      const icon = document.getElementById('copy-icon')
      
      label?.classList.add('text-orange-500')
      icon?.classList.add('text-orange-500')
      
      setTimeout(() => {
        label?.classList.remove('text-orange-500')
        icon?.classList.remove('text-orange-500')
      }, 300)
    }
  }

  return (
    <div className="border-t pb-8 border-b">
      <div className="pt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 ml-1">
          Apply Now
        </h3>
        {selectedCompany.email && (
          <div className="mt-4 inline-flex items-center gap-2 bg-gray-50 p-3 rounded-lg max-w-fit">
            <span id="hr-label" className="text-sm font-medium text-gray-700 transition-colors duration-300">
              HR Email:
            </span>
            <span className="text-sm text-gray-600">{selectedCompany.email}</span>
            <button
              onClick={copyEmail}
              className="p-1.5 hover:bg-gray-200 rounded transition-colors"
              title="Copy email"
            >
              <svg 
                id="copy-icon" 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 text-gray-600 transition-colors duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
                />
              </svg>
            </button>
          </div>
        )}

        {selectedCompany.hiringLink && (
  <a
    href={selectedCompany.hiringLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-4"
  >
    Visit Career Page →
  </a>
)}

      </div>
    </div>
  )
}

export default ApplySection