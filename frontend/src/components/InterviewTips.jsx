import React from 'react'

const InterviewTips = ({ companyName }) => {
  const tips = [
    `Research ${companyName}'s culture and values`,
    'Prepare for technical and behavioral questions',
    'Practice coding problems on platforms like LeetCode',
    'Prepare questions to ask the interviewer',
    'Review your resume thoroughly'
  ]

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
        Interview Preparation Tips
      </h3>
      <ul className="space-y-2 text-gray-600">
        {tips.map((tip, idx) => (
          <li
            key={idx}
            className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-500"
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InterviewTips