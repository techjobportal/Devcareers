import React, { useState, useEffect, useRef } from 'react';

const TOTAL_JOBS_TITLE = 'Job Opportunities Posted'
const TOTAL_JOBS = import.meta.env.VITE_TOTAL_JOBS;

const TOTAL_CUSTOMER_TITLE = 'Happy Customers'
const TOTAL_CUSTOMERS = import.meta.env.VITE_TOTAL_CUSTOMERS;

const TOTAL_SALES_TITLE = 'Successful Purchases'
const TOTAL_SALES = import.meta.env.VITE_TOTAL_SALES;

const TOPMATE_LINK = import.meta.env.VITE_TOPMATELINK || 'https://topmate.io/meet_g/';

const threshold = 0.4  // IMP when this come of part of section displays, counter will start
// ============================================

const StatsCounter = () => {
  const [jobCount, setJobCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [salesCount, setSalesCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: `${threshold}`} // IMP when this come of part of section displays, counter will start
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setJobCount(Math.round(easeOutQuart * TOTAL_JOBS));
      setCustomerCount(Math.round(easeOutQuart * TOTAL_CUSTOMERS));
      setSalesCount(Math.round(easeOutQuart * TOTAL_SALES));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="py-16 mb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Trust Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real people. Our track record speaks for itself.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Job Opportunities */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500 group">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-gray-800 mb-2">
                {jobCount}+
              </div>
              <div className="text-xl text-gray-600 font-medium mb-4">
                {TOTAL_JOBS_TITLE}
              </div>
              <div className="text-sm text-gray-500 italic">
                Updated daily
              </div>
            </div>
          </div>

          {/* Customers */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500 group relative">
            {/* Verified Badge */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full border border-green-200">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-gray-800 mb-2">
                {customerCount}+
              </div>
              <div className="text-xl text-gray-600 font-medium mb-4">
                {TOTAL_CUSTOMER_TITLE}
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span className="italic">Verified by</span>
                <a 
                  href={TOPMATE_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                >
                  topmate.io
                </a>
              </div>
            </div>
          </div>

          {/* Sales */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500 group relative">
            {/* Verified Badge */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full border border-green-200">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-gray-800 mb-2">
                {salesCount}+
              </div>
              <div className="text-xl text-gray-600 font-medium mb-4">
                {TOTAL_SALES_TITLE}
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span className="italic">Verified by</span>
                <a 
                  href={TOPMATE_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                >
                  topmate.io
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Trust Badges Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Secure Badge */}
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-sm">100% Secure Platform</span>
            </div>

            {/* Money Back Badge */}
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium text-sm">Trusted Service</span>
            </div>

            {/* Support Badge */}
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="font-medium text-sm">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;