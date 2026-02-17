import React from 'react'
import ApplySection from './ApplySection'
import JobDescription from './JobDescription'
import InterviewTips from './InterviewTips'

const CompanyDetailMain = ({ selectedCompany }) => {
  return (
    <div className="flex-1 max-w-3xl bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-800">{selectedCompany.company}</h2>
      <h2 className="mt-2 text-2xl font-bold text-gray-800">
        Role: {selectedCompany.role}
      </h2>
      <p className="text-gray-600 mb-6">{selectedCompany.title}</p>

      <ApplySection selectedCompany={selectedCompany} />
      <JobDescription description={selectedCompany.fulldescription} />
      <InterviewTips companyName={selectedCompany.company} />
    </div>
  )
}

export default CompanyDetailMain