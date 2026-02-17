import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ResourcesData from '../data/resourceData/resourceData';
import { placeholderWords } from '../data/resourceData/searchBarData';
import booksIcon from "../assets/svg/books.svg";
import ResourceCard from '../components/ResourceCard';

function Resources() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const priorityIds = [22, 2, 34];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const organizedResources = useMemo(() => {
    const priority = [];
    const others = [];
    ResourcesData.forEach(resource => {
      if (priorityIds.includes(resource.id)) {
        priority.push(resource);
      } else {
        others.push(resource);
      }
    });
    priority.sort((a, b) => priorityIds.indexOf(a.id) - priorityIds.indexOf(b.id));
    return [...priority, ...shuffleArray(others)];
  }, []);

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

  const filteredResources = organizedResources.filter(resource => {
    const query = searchQuery.toLowerCase();
    return (
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">

      {/* Header */}
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
            className="w-full px-4 py-3 pl-11 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-black"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {searchQuery && (
          <p className="mt-2 text-sm text-gray-600 text-center">
            Found {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Resource List / Grid */}
      {filteredResources.length > 0 ? (
        <>
          <div className="space-y-4 lg:hidden">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} isMobile={true} />
            ))}
          </div>
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

      {/* Purchase Query CTA — Enhanced */}
<div className="mt-8 mx-auto max-w-lg
 relative overflow-hidden rounded-2xl border border-amber-200/60 bg-gradient-to-r from-amber-50 via-white to-amber-50 shadow-md hover:shadow-lg transition-all duration-300">

  {/* Subtle glow effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 to-transparent pointer-events-none" />

  <div className="relative px-5 py-4 flex items-center justify-between gap-4">

    {/* Left Content */}
    <div className="flex items-start gap-3 min-w-0">
      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-100 text-amber-600 shadow-sm">
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-800">
          Missed your resource link?
        </p>
        <p className="text-xs text-gray-500">
          No worries — we’ll resend it instantly.
        </p>
      </div>
    </div>

    {/* Button */}
    <button
      onClick={() => navigate('/purchase-query')}
      className="group flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
    >
      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      Purchase Query
    </button>

  </div>
</div>


    </div>
  );
}

export default Resources;