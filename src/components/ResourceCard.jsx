function ResourceCard({ resource, isMobile = false }) {
  // Badge configuration
  const badges = [];
  
  if (resource?.isPopular) {
    badges.push({
      label: "Popular",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    });
  }
  
  if (resource?.isBestSeller) {
    badges.push({
      label: "Best Seller",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200",
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
        </svg>
      )
    });
  }
  
  if (resource?.isPlacementFocused) {
    badges.push({
      label: "Placement Focused",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      )
    });
  }
  
  if (resource?.isAdvancedLevel) {
    badges.push({
      label: "Advanced",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-200",
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    });
  }

  if (isMobile) {
    // Mobile List Layout
    return (
      <div className="flex items-center gap-4 p-4 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 relative">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-24 h-24 object-cover rounded-lg"
        />

        <div className="flex-grow">
          <h4 className="font-semibold text-lg text-gray-800 mb-1">
            {resource.title}
          </h4>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
            {resource.description}
          </p>
          
          {/* Badges - Mobile (Below description) */}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className={`flex items-center gap-1 ${badge.bgColor} ${badge.textColor} text-xs font-semibold px-2 py-1 rounded-full border ${badge.borderColor} shadow-sm`}
                >
                  {badge.icon}
                  {badge.label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="text-lg font-bold text-amber-600">
            {resource.price}
          </span>


          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-amber-500 hover:bg-amber-600 rounded-full transition-colors"
            title="View Resource"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  // Desktop Grid Layout
  return (
    <div className="flex flex-col bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 overflow-hidden shadow-sm hover:shadow-md relative">
      <div className="w-full aspect-square bg-gray-100">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h4 className="font-semibold text-base text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
          {resource.title}
        </h4>

        <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow">
          {resource.description}
        </p>

        {/* Badges - Desktop (Below description) */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`flex items-center gap-1 ${badge.bgColor} ${badge.textColor} text-xs font-semibold px-2 py-1 rounded-full border ${badge.borderColor} shadow-sm`}
              >
                {badge.icon}
                {badge.label}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-amber-200">
          <span className="text-lg font-bold text-amber-600">
            {resource.price}
          </span>

          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-amber-500 hover:bg-amber-600 rounded-full transition-colors"
            title="View Resource"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;