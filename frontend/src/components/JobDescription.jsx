import React from 'react'

const JobDescription = ({ description }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Job Description</h3>
      <ul className="space-y-2 text-gray-800">
        {description
          ?.split("\n")
          .filter(line => line.trim() !== "")
          .map((item, idx) => (
            <li
              key={idx}
              className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-500"
            >
              {item.trim()}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default JobDescription