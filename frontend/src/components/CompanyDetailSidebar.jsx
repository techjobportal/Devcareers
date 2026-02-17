import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ResourcesData from '../data/resourceData/resourceData'

const CompanyDetailSidebar = () => {
  const shuffledData = useMemo(() => {
    // Find item with id 34
    const firstItem = ResourcesData.find(item => item.id === 34)
    
    // Get all other items
    const otherItems = ResourcesData.filter(item => item.id !== 34)
    
    // Shuffle other items using Fisher-Yates algorithm
    const shuffled = [...otherItems]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    
    // Take only 13 items from shuffled (since we'll add id 34 as first)
    const limitedShuffled = shuffled.slice(0, 13)
    
    // Return with id 34 first (if it exists), followed by 13 shuffled items
    return firstItem ? [firstItem, ...limitedShuffled] : limitedShuffled
  }, [])

  return (
    <div className="w-full lg:w-80 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Resources to Crack Interviews
        </h3>

        <div className="space-y-3">
          {shuffledData.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg
                         hover:bg-orange-50 transition-colors
                         border border-gray-200 hover:border-orange-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain rounded-md"
              />

              {/* Title */}
              <span className="text-sm font-medium text-gray-800 flex-1">
                {item.title}
              </span>

              {/* Arrow */}
              <span className="text-orange-500 font-bold text-lg">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyDetailSidebar