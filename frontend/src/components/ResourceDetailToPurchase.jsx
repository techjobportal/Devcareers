import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ResourcesData from '../data/resourceData/resourceData';
import PaymentButton from '../components/PaymentButton';

function ResourceDetailToPurchase() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [purchasedLink, setPurchasedLink] = useState(null);
  const [copied, setCopied] = useState(false);
  const [buyerName, setBuyerName] = useState('');

  useEffect(() => {
    const found = ResourcesData.find(r => r.id === parseInt(id));
    if (found) setResource(found);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  const handlePaymentSuccess = (result) => {
    // Save to localStorage
    const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
    purchases.push({
      resourceId: resource.id,
      resourceTitle: resource.title,
      amount: parseFloat(resource.price.replace(/[^0-9.]/g, '')),
      purchaseDate: new Date().toISOString(),
      paymentId: result.paymentId,
      orderId: result.orderId,
    });
    localStorage.setItem('purchases', JSON.stringify(purchases));

    // Show the link banner
    setBuyerName(result.userName || '');
    setPurchasedLink(result.driveLink || resource.link);

    // Scroll to banner
    setTimeout(() => {
      document.getElementById('drive-link-section')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  const handlePaymentError = (error) => {
    console.error('Payment failed:', error);
    alert(`Payment failed: ${error}. Please try again.`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(purchasedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <svg className="w-24 h-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Resource Not Found</h2>
          <p className="text-gray-600 mb-6">The resource you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/resources')} className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
            Back to Resources
          </button>
        </div>
      </div>
    );
  }

  const numericPrice = parseFloat(resource.price.replace(/[^0-9.]/g, ''));

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button onClick={() => navigate('/resources')} className="flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 font-medium transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Resources
        </button>

        {/* ── Drive Link Banner (shown after successful payment) ── */}
        {purchasedLink && (
          <div id="drive-link-section" className="mb-6 bg-green-50 border-2 border-green-400 rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-800">
                  Payment Successful! 🎉{buyerName ? ` Hey ${buyerName}` : ''}
                </h3>
                <p className="text-sm text-green-700">Your resource is ready — copy the link below before leaving this page.</p>
              </div>
            </div>

            {/* Link row */}
            <div className="flex items-center gap-2 bg-white border border-green-300 rounded-xl p-3 mb-3">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" />
              </svg>
              <span className="text-sm text-gray-700 truncate flex-1 font-mono select-all">{purchasedLink}</span>
              <button
                onClick={handleCopy}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${copied ? 'bg-green-500 text-white' : 'bg-amber-500 hover:bg-amber-600 text-white'
                  }`}
              >
                {copied ? (
                  <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> Copied!</>
                ) : (
                  <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> Copy Link</>
                )}
              </button>
            </div>

            {/* Open button */}
            <a
              href={purchasedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Open Resource Link
            </a>

            <p className="mt-3 text-xs text-gray-500 text-center">
              ⚠️ Save this link now. In case you miss it, DM{' '}
              <a href="mailto:info.techjobalert@gmail.com" className="text-amber-600 underline font-medium">
                info.techjobalert@gmail.com
              </a>{' '}
              and we'll send it within 6 hours.
            </p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">

            {/* Left Column - Image */}
            <div className="space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-square">
                <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {resource.isPopular && (
                    <span className="flex items-center gap-1 bg-purple-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      Popular
                    </span>
                  )}
                  {resource.isBestSeller && (
                    <span className="flex items-center gap-1 bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>
                      Best Seller
                    </span>
                  )}
                </div>
              </div>

              {/* Copies Sold */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Copies Sold</p>
                      <p className="text-2xl font-bold text-green-700">{resource.copiesSold || '500+'}+</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Trusted by</p>
                    <p className="text-sm font-semibold text-gray-700">Students & Professionals</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              {/* <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <svg className="w-6 h-6 text-blue-600 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <p className="text-xs font-semibold text-blue-700">Verified</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <svg className="w-6 h-6 text-purple-600 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <p className="text-xs font-semibold text-purple-700">Quality</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 text-center">
                  <svg className="w-6 h-6 text-amber-600 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/></svg>
                  <p className="text-xs font-semibold text-amber-700">Secure</p>
                </div>
              </div> */}

            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{resource.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.isPlacementFocused && (
                    <span className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full border border-blue-200">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                      Placement Focused
                    </span>
                  )}
                  {resource.isAdvancedLevel && (
                    <span className="flex items-center gap-1 bg-red-50 text-red-700 text-xs font-semibold px-2 py-1 rounded-full border border-red-200">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      Advanced Level
                    </span>
                  )}
                </div>
              </div>

              {/* <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">{resource.description}</p>
              </div> */}

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                  What's Included
                </h2>
                <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {resource.longDescription ||
                      `Complete ${resource.title} guide with comprehensive coverage of all essential topics.\n\n📚 Detailed explanations and examples\n💡 Interview questions and answers\n🎯 Best practices and tips\n✅ Ready to use templates\n📝 Printable PDF format\n\nPerfect for interview preparation and quick reference!`}
                  </p>
                </div>
              </div>

              {/* Price + PaymentButton */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-300 shadow-md">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Price</p>
                    <p className="text-4xl font-bold text-amber-600">{resource.price}</p>
                  </div>
                  {/* <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">You Save</p>
                    <p className="text-2xl font-bold text-green-600">50%</p>
                  </div> */}
                  <a
                    href="https://razorpay.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full border border-green-200 hover:bg-green-100 hover:border-green-300 transition-colors cursor-pointer mt-2"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified by Razorpay
                  </a>
                </div>

                <PaymentButton
                  amount={numericPrice}
                  resourceTitle={resource.title}
                  resourceId={resource.id}
                  driveLink={resource.link}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                />

                <div className="mt-4 flex items-start gap-2 text-xs text-gray-600">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                  <p>Secure payment powered by Razorpay. Your payment information is encrypted and secure.</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Why Choose This Resource?</h3>
                <div className="space-y-2">
                  {['Instant access after payment', 'Lifetime access - download anytime', 'Regular updates included', 'Money-back guarantee', '24/7 customer support'].map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I access the resource after payment?',
                a: 'The resource link will appear instantly on this page after successful payment — COPY it right away. In case you missed copying the resource link, please DM info.techjobalert@gmail.com and we will send it to you within 6 hours.'
              },
              {
                q: 'Is this a one-time payment?',
                a: 'Yes, this is a one-time payment. You get lifetime access to the resource with all future updates included.'
              }, {
                q: 'Why Razorpay for payments?',
                a: 'We were originally integrated with a different payment provider, but due to an ongoing dispute over pending payments, we had to switch mid-way. We moved to Razorpay — one of India\'s most trusted payment gateways, used by 10M+ businesses. It supports UPI, cards, net banking, and wallets with bank-grade encryption. Safe, reliable, and battle-tested.'
              },
              {
                q: 'Missed copying the resource link?',
                a: 'No worries! Head to the bottom of this page and click "Purchase Query". Fill in your name, email, the resource you purchased, and the date of purchase — and we\'ll send it to you via email within 6 hours.'
              },
              {
                q: 'What if I face any issues?',
                a: 'Our support team is available 24/7. You can reach us at info.techjobalert@gmail.com.'
              },
              {
                q: 'Is my payment secure?',
                a: 'Absolutely! We use Razorpay for payment processing, which uses industry-standard encryption to protect your information.'
              }
            ].map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between cursor-pointer bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-600 px-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="mt-12 mb-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-3">
              Need Help or Missing Resources?
            </h3>

            {/* Subheading */}
            <p className="text-gray-600 text-center mb-6 text-lg max-w-2xl mx-auto">
              We're here to support you. If you've purchased a resource and can't find it, or if you're looking for something specific, our team is ready to assist.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA - Contact Us */}
              <a
                href="/purchase-query"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Secondary CTA - Browse Resources */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl border-2 border-orange-300 hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Browse All Resources
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-orange-200">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Quick Response</span>
                </div>
                <span className="hidden sm:inline text-orange-300">•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="font-medium">24/7 Support</span>
                </div>
                <span className="hidden sm:inline text-orange-300">•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">100% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceDetailToPurchase;