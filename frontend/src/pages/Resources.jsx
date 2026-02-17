import { useState, useEffect, useMemo } from 'react';
import ResourcesData from '../data/resourceData/resourceData';
import { placeholderWords } from '../data/resourceData/searchBarData';
import booksIcon from "../assets/svg/books.svg";
import ResourceCard from '../components/ResourceCard';

function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Priority resource IDs that should always appear first
  const priorityIds = [22, 2, 34]; // 22,2,34

  // Shuffle array function using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Organize resources: priority first, then shuffled others
  // This runs only once when component mounts
  const organizedResources = useMemo(() => {
    const priority = [];
    const others = [];

    // Separate priority and other resources
    ResourcesData.forEach(resource => {
      if (priorityIds.includes(resource.id)) {
        priority.push(resource);
      } else {
        others.push(resource);
      }
    });

    // Sort priority resources by the order in priorityIds
    priority.sort((a, b) =>
      priorityIds.indexOf(a.id) - priorityIds.indexOf(b.id)
    );

    // Shuffle the other resources
    const shuffledOthers = shuffleArray(others);

    return [...priority, ...shuffledOthers];
  }, []); // Empty dependency array - runs once on mount

  // Typing animation effect
  useEffect(() => {
    const currentWord = placeholderWords[wordIndex];
    const typingSpeed = isDeleting ? 10 : 100;
    const pauseTime = 300;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (placeholder.length < currentWord.length) {
          setPlaceholder(currentWord.slice(0, placeholder.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (placeholder.length > 0) {
          setPlaceholder(placeholder.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % placeholderWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [placeholder, isDeleting, wordIndex]);

  // Filter resources based on search query
  const filteredResources = organizedResources.filter(resource => {
    const query = searchQuery.toLowerCase();
    return (
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      {/* Header with Verified Badge */}
      <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
        <h3 className="text-3xl font-semibold text-amber-600 flex items-center gap-2">
          <img src={booksIcon} className="inline w-7 h-7" alt="Books" />
          Resources (Interview Tips and Complete Guide)
        </h3>
        <a
          href="https://razorpay.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-green-50 text-green-700 text-sm font-semibold px-3 py-1.5 rounded-full border border-green-200 hover:bg-green-100 hover:border-green-300 transition-colors cursor-pointer shadow-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verified by Razorpay & Topmate.io
        </a>
      </div>

      {/* Search Box */}
      <div className="mb-6 flex flex-col items-center">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-11 border border-amber-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-amber-500
                       focus:border-transparent text-black"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {searchQuery && (
          <p className="mt-2 text-sm text-gray-600 text-center">
            Found {filteredResources.length} resource
            {filteredResources.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Mobile List + Desktop Grid */}
      {filteredResources.length > 0 ? (
        <>
          {/* MOBILE LIST */}
          <div className="space-y-4 lg:hidden">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} isMobile={true} />
            ))}
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 ml-8 mr-8">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} isMobile={false} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-8 text-gray-500 bg-amber-50">
          No resources found matching "{searchQuery}"
        </div>
      )}

      <div className="mt-12 mb-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-3">
            Need Help or Missing Resources?
          </h3>

          {/* Subheading */}
          <p className="text-gray-600 text-center mb-6 text-lg max-w-2xl mx-auto">
            We're here to support you. If you've purchased a resource and can't find it, or if you're looking for something specific, our team is ready to assist.
          </p>

          {/* Two Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA - Contact Us */}
            <a
              href="/contact-us"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Secondary CTA - Browse Resources */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl border-2 border-orange-300 hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Browse All Resources
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 pt-6 border-t border-orange-200">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Quick Response</span>
              </div>
              <span className="hidden sm:inline text-orange-300">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="font-medium">24/7 Support</span>
              </div>
              <span className="hidden sm:inline text-orange-300">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Resources;
