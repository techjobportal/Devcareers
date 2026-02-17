import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CompanyDetailMain from './CompanyDetailMain'
import CompanyDetailSidebar from './CompanyDetailSidebar'

const CompanyDetailPage = ({ selectedCompany, allCompanies }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#FFFDFB] py-8 px-4">
  <div className="max-w-7xl mx-auto">
    <Link
      to="/company-details"
      className="text-[#FA5500] hover:underline mb-4 inline-flex items-center"
    >
      ← Back to Home
    </Link>

    <div className="flex flex-col lg:flex-row gap-6 justify-center mb-10">
      <CompanyDetailMain selectedCompany={selectedCompany} />
      <CompanyDetailSidebar companies={allCompanies} />
    </div>
  </div>
</div>

  )
}

export default CompanyDetailPage