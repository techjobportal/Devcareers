import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Companies_details from './pages/Companies_details'
import Resources from './pages/Resources'
import Contact_us from './pages/Contact_us'
import Legal_info from './pages/Legal_info'
import SubscribeUs from './pages/SubscribeUs'
import Header from './components/Header'
import Header1 from './components/Header1'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (

    <div>
      <Header1 />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company-details" element={<Companies_details />} />
        <Route
          path="/company-details/:companyName/:role"
          element={<Companies_details />}
        />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact-us" element={<Contact_us />} />
        <Route path="/legal-info" element={<Legal_info />} />
        <Route path="/subscribe-us" element={<SubscribeUs/>}/>
      </Routes>
      <Analytics />
    </div>
  )
}

export default App
