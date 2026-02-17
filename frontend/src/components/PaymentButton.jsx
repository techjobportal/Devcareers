// src/components/PaymentButton.jsx
// Example component showing how to integrate payment

import React, { useState } from 'react';
import { processPayment } from '../services/paymentService';

const PaymentButton = ({ 
  amount, 
  resourceTitle, 
  resourceId,
  userEmail,
  userName,
  onSuccess,
  onError 
}) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Metadata to track what was purchased
      const metadata = {
        resourceId,
        resourceTitle,
        userEmail,
        timestamp: new Date().toISOString()
      };

      // Checkout options for Razorpay UI
      const checkoutOptions = {
        name: 'Your Company Name',
        description: resourceTitle,
        prefill: {
          name: userName,
          email: userEmail,
        },
        theme: {
          color: '#3399cc'
        }
      };

      // Process payment
      const result = await processPayment(amount, metadata, checkoutOptions);

      if (result.success) {
        // Payment successful
        console.log('Payment successful:', result);
        
        // Call success callback
        if (onSuccess) {
          onSuccess(result);
        }

        // You can now:
        // 1. Update UI to show success
        // 2. Grant access to the resource
        // 3. Send confirmation email (from your backend)
        // 4. Update user's purchase history
        
        alert('Payment successful! You can now access the resource.');
        
      } else {
        // Payment failed
        console.error('Payment failed:', result.error);
        
        if (onError) {
          onError(result.error);
        }
        
        alert(`Payment failed: ${result.error}`);
      }

    } catch (error) {
      console.error('Payment error:', error);
      
      if (onError) {
        onError(error.message);
      }
      
      alert(`Payment error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
    >
      {loading ? 'Processing...' : `Pay ₹${amount}`}
    </button>
  );
};

export default PaymentButton;