// src/services/paymentService.js

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

/**
 * Create a Razorpay order
 * @param {number} amount - Amount in INR (will be converted to paise in backend)
 * @param {object} metadata - Additional data (user info, resource details, etc.)
 * @returns {Promise<object>} Order details including order_id and razorpay_key
 */
export const createOrder = async (amount, metadata = {}) => {
  try {
    const response = await fetch(`${API_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
        notes: metadata
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create order');
    }

    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

/**
 * Verify payment after successful Razorpay checkout
 * @param {object} paymentData - Payment response from Razorpay
 * @returns {Promise<object>} Verification result
 */
export const verifyPayment = async (paymentData) => {
  try {
    const response = await fetch(`${API_URL}/api/payment/verify-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        razorpay_order_id: paymentData.razorpay_order_id,
        razorpay_payment_id: paymentData.razorpay_payment_id,
        razorpay_signature: paymentData.razorpay_signature,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Payment verification failed');
    }

    return data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};

/**
 * Initialize Razorpay checkout
 * @param {object} orderData - Order data from createOrder
 * @param {object} options - Additional Razorpay options (prefill, theme, etc.)
 * @returns {Promise<object>} Payment response
 */
export const initiatePayment = (orderData, options = {}) => {
  return new Promise((resolve, reject) => {
    // Check if Razorpay script is loaded
    if (!window.Razorpay) {
      reject(new Error('Razorpay SDK not loaded'));
      return;
    }

    const razorpayOptions = {
      key: orderData.key,
      amount: orderData.order.amount,
      currency: orderData.order.currency,
      name: options.name || 'Your Company Name',
      description: options.description || 'Purchase',
      order_id: orderData.order.id,
      prefill: {
        name: options.prefill?.name || '',
        email: options.prefill?.email || '',
        contact: options.prefill?.contact || '',
      },
      theme: {
        color: options.theme?.color || '#3399cc',
      },
      handler: function (response) {
        resolve(response);
      },
      modal: {
        ondismiss: function () {
          reject(new Error('Payment cancelled by user'));
        },
      },
    };

    const razorpayInstance = new window.Razorpay(razorpayOptions);
    razorpayInstance.open();
  });
};

/**
 * Complete payment flow: create order, initiate payment, verify payment
 * @param {number} amount - Amount in INR
 * @param {object} metadata - Additional metadata
 * @param {object} checkoutOptions - Razorpay checkout options
 * @returns {Promise<object>} Complete payment result
 */
export const processPayment = async (amount, metadata = {}, checkoutOptions = {}) => {
  try {
    // Step 1: Create order
    const orderData = await createOrder(amount, metadata);

    // Step 2: Initiate Razorpay checkout
    const paymentResponse = await initiatePayment(orderData, checkoutOptions);

    // Step 3: Verify payment
    const verificationResult = await verifyPayment(paymentResponse);

    return {
      success: true,
      ...verificationResult,
      paymentResponse,
    };
  } catch (error) {
    console.error('Payment processing error:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};