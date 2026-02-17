import React, { useState } from 'react'

const Contact_Us = () => {
  const [copied, setCopied] = useState(false)
  const email = import.meta.env.VITE_RECIPIENT_EMAIL
  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contact Us
          </h1>
          <p className="text-black/60 text-sm md:text-base">
            Have questions or need support? We're here to help.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white rounded-2xl border border-orange-200 shadow-lg p-6 md:p-10 mb-6">

          {/* Email Section */}
          <div className="text-center mb-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
            <p className="text-sm text-black/70 mb-3 font-medium">
              Reach us directly via email
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <a
                href={`mailto:${email}`}
                className="inline-block text-[#FA5500] font-bold text-xl md:text-2xl hover:text-orange-600 transition-all"
              >
                {email}
              </a>
              <button
                onClick={copyEmail}
                className="p-2 bg-white hover:bg-orange-50 text-[#FA5500] rounded-lg border border-orange-300 transition-all hover:border-orange-400 active:scale-95"
                title="Copy email"
              >
                {copied ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-orange-600 mt-2 font-medium">✓ Email copied to clipboard!</p>
            )}
          </div>

          {/* Contact Reasons */}
          <div>
            <h2 className="text-lg font-bold text-black mb-6 text-center">
              What can we help you with?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-white to-orange-50 border border-orange-100 hover:border-orange-300 transition-all hover:shadow-md">
                <div className="w-2 h-2 bg-[#FA5500] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-black text-sm">Job & Internship Inquiries</h3>
                  <p className="text-xs text-black/60 mt-1">Questions about listings and opportunities</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-white to-orange-50 border border-orange-100 hover:border-orange-300 transition-all hover:shadow-md">
                <div className="w-2 h-2 bg-[#FA5500] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-black text-sm">Technical Support</h3>
                  <p className="text-xs text-black/60 mt-1">Help with platform issues or bugs</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-white to-orange-50 border border-orange-100 hover:border-orange-300 transition-all hover:shadow-md">
                <div className="w-2 h-2 bg-[#FA5500] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-black text-sm">Resource Issues</h3>
                  <p className="text-xs text-black/60 mt-1">Problems with purchased or downloaded materials</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-white to-orange-50 border border-orange-100 hover:border-orange-300 transition-all hover:shadow-md">
                <div className="w-2 h-2 bg-[#FA5500] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-black text-sm">Feedback & Complaints</h3>
                  <p className="text-xs text-black/60 mt-1">Share your experience or concerns</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-white to-orange-50 border border-orange-100 hover:border-orange-300 transition-all hover:shadow-md">
                <div className="w-2 h-2 bg-[#FA5500] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-black text-sm">Partnership Opportunities</h3>
                  <p className="text-xs text-black/60 mt-1">Collaborate or work together</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-white to-orange-50 border border-orange-100 hover:border-orange-300 transition-all hover:shadow-md">
                <div className="w-2 h-2 bg-[#FA5500] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-black text-sm">General Questions</h3>
                  <p className="text-xs text-black/60 mt-1">Anything else you'd like to know</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-orange-200 my-8"></div>

          {/* Response Time */}
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl p-5 border border-orange-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-orange-300 flex-shrink-0">
                <svg className="w-6 h-6 text-[#FA5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black text-sm">Quick Response Time</h3>
                <p className="text-xs text-black/70 mt-1">We aim to respond within 24-48 hours</p>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Info */}
        <div className="text-center bg-white rounded-xl border border-orange-200 p-4 shadow-sm">
          <p className="text-xs text-black/60">
            <span className="font-semibold text-[#FA5500]">Pro tip:</span> For urgent matters, please mention "URGENT" in your email subject line
          </p>
        </div>

      </div>
    </div>
  )
}

export default Contact_Us