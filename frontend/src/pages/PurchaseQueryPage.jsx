import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_PURCHASE_QUERY_ID = import.meta.env.VITE_PURCHASE_QUERY_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const email = import.meta.env.VITE_RECIPIENT_EMAIL;
const RESOURCES = [
  'SQL Beginner to Advanced (0 - 100)',
  '2000+ HR emails & Famous IT companies emails',
  'HTML CSS Interview Questions',
  '50+ Page Complete JS Cheatsheet',
  '40 Node.js Interview Questions + Answers',
  '100+ Tips, Templates, Harvard Sample & Rules',
  '100+ JavaScript Functions & Methods Cheatsheet',
  'CSS Complete Cheatsheet',
  'OOPS Concept in Java – Complete Notes + Code',
  'Pentest CheatSheets',
  '100 JavaScript Interview Questions',
  'Complete Interview Preparation Pack (HR + Aptitude + Verbal + Reasoning)',
  'Redis Cheatsheet',
  'System Desgin Handbook 70+ pages',
  'Test Automation with Playwright & TypeScript',
  'FrontEnd Notes - Html, AJAX, jQuery, Bootstrap, JS',
  '150 Most Asked Java Interview Questions',
  'Oracle - DSA Interview Question with Solutions',
  '100+ React Interview Questions + Guide (8 PDFs)',
  '100+ DSA Questions with solutions',
  'Master the MERN Stack 270+ pages',
  'Git complete Cheatsheet',
  'Node.js Cheat Sheet',
  'React.js Vs Next.js Notes',
  'Node.js CheatSheet - 0 to Deployment',
  'Promise vs Async_Await',
  '40 Basic Coding ques should do before starting DSA',
  '30+ JavaScript APIs',
  'MERN Stack Roadmap (0 - 100)',
  'MongoDB Cheatsheet',
  '15+ Top Company wise Leetcode Questions',
  '7 Coding Principles Every Developer Should Know'
];

const PurchaseQueryPage = () => {
  const navigate = useNavigate();
  const [form, setForm]             = useState({ name: '', email: '', resource: '', date: '' });
  const [query, setQuery]           = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [errors, setErrors]         = useState({});
  const [loading, setLoading]       = useState(false);
  const [submitted, setSubmitted]   = useState(false);

  const filtered = RESOURCES.filter(r =>
    r.toLowerCase().includes(query.toLowerCase())
  );

  const validate = () => {
    const e = {};
    if (!form.name.trim())     e.name     = 'Name is required';
    if (!form.email.trim())    e.email    = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                               e.email    = 'Enter a valid email';
    if (!form.resource.trim()) e.resource = 'Please select a resource';
    if (!form.date)            e.date     = 'Purchase date is required';
    return e;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_PURCHASE_QUERY_ID,
        {
          from_name:      form.name,
          from_email:     form.email,
          resource_title: form.resource,
          purchase_date:  form.date,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error('Submit failed:', err);
      alert('Something went wrong. Please email us directly at info.techjobalert@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Query Submitted!</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          We've received your request. Your resource link will be sent to{' '}
          <strong className="text-gray-800">{email}</strong> within 6 hours.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold text-sm transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-10 px-4">
      <div className="max-w-lg mx-auto">

        {/* Back to Home */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Header stripe */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-400 px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Purchase Query</h1>
                <p className="text-amber-100 text-xs mt-0.5">Missed your resource link? We'll resend it within 6 hours.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="px-8 py-7 space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={e => {
                  setForm(p => ({ ...p, name: e.target.value }));
                  if (errors.name) setErrors(p => ({ ...p, name: '' }));
                }}
                placeholder="Enter your full name"
                className={`w-full px-4 py-2.5 border rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
                  errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => {
                  setForm(p => ({ ...p, email: e.target.value }));
                  if (errors.email) setErrors(p => ({ ...p, email: '' }));
                }}
                placeholder="Enter your email"
                className={`w-full px-4 py-2.5 border rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
                  errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Resource Search */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Resource Purchased <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={query || form.resource}
                  onChange={e => {
                    setQuery(e.target.value);
                    setForm(p => ({ ...p, resource: '' }));
                    setShowDropdown(true);
                    if (errors.resource) setErrors(p => ({ ...p, resource: '' }));
                  }}
                  onFocus={() => setShowDropdown(true)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                  placeholder="Type to search resource..."
                  className={`w-full pl-9 pr-4 py-2.5 border rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
                    errors.resource ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                  }`}
                />
              </div>
              {showDropdown && query && filtered.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-1 max-h-48 overflow-y-auto">
                  {filtered.map((r, i) => (
                    <li
                      key={i}
                      onMouseDown={() => {
                        setForm(p => ({ ...p, resource: r }));
                        setQuery('');
                        setShowDropdown(false);
                        if (errors.resource) setErrors(p => ({ ...p, resource: '' }));
                      }}
                      className="px-4 py-2.5 text-sm text-gray-800 hover:bg-amber-50 cursor-pointer transition-colors first:rounded-t-xl last:rounded-b-xl"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              )}
              {form.resource && (
                <p className="text-xs text-amber-600 mt-1.5 font-medium flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {form.resource}
                </p>
              )}
              {errors.resource && <p className="text-xs text-red-500 mt-1">{errors.resource}</p>}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Date of Purchase <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={form.date}
                max={new Date().toISOString().split('T')[0]}
                onChange={e => {
                  setForm(p => ({ ...p, date: e.target.value }));
                  if (errors.date) setErrors(p => ({ ...p, date: '' }));
                }}
                className={`w-full px-4 py-2.5 border rounded-xl text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
                  errors.date ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                }`}
              />
              {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-sm transition-colors shadow-sm mt-1"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Submit Query
                </>
              )}
            </button>

          </div>

          {/* Footer note */}
          <div className="px-8 pb-6">
            <p className="text-xs text-gray-400 text-center">
              Need immediate help? Email us at{' '}
              <a href="mailto:info.techjobalert@gmail.com" className="text-amber-500 font-medium hover:underline">
                {email}
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PurchaseQueryPage;