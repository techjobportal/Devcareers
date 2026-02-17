// src/components/PaymentButton.jsx

import React, { useState } from 'react';
import { processPayment } from '../services/paymentService';

const PaymentButton = ({
  amount,
  resourceTitle,
  resourceId,
  driveLink,
  userEmail,
  userName,
  onSuccess,
  onError
}) => {
  const [loading, setLoading] = useState(false);
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [errors, setErrors]   = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim())  e.name  = 'Name is required';
    if (!email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = 'Enter a valid email address';
    return e;
  };

  const handlePayment = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const metadata = {
        resourceId,
        resourceTitle,
        userEmail: email,
        timestamp: new Date().toISOString()
      };

      const checkoutOptions = {
        name: 'Tech Job Alert - Meet Soni',
        description: resourceTitle,
        prefill: { name, email },
        theme: { color: '#d97706' }
      };

      const result = await processPayment(amount, metadata, checkoutOptions);

      if (result.success) {
        if (onSuccess) onSuccess({ ...result, driveLink, userName: name, userEmail: email });
      } else {
        if (onError) onError(result.error);
      }

    } catch (error) {
      if (onError) onError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors(p => ({ ...p, name: '' }));
          }}
          placeholder="Enter your full name"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
            errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors(p => ({ ...p, email: '' }));
          }}
          placeholder="Enter your email"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
            errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* Pay Button */}
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold text-base transition-colors"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Processing...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
            </svg>
            Pay ₹{amount}
          </>
        )}
      </button>
    </div>
  );
};

export default PaymentButton;