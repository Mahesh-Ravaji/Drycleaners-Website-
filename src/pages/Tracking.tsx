import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock, MapPin, Phone } from 'lucide-react';

const Tracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock order data for demonstration
  const mockOrderData = {
    orderId: 'DC2024001234',
    customerName: 'Priya Sharma',
    phone: '+91 98765 43210',
    pickupAddress: 'A-123, Green Park, New Delhi - 110016',
    orderDate: '2024-01-15',
    expectedDelivery: '2024-01-17',
    items: [
      { name: 'Formal Shirt', quantity: 2, service: 'Dry Clean' },
      { name: 'Trousers', quantity: 1, service: 'Dry Clean' },
      { name: 'Saree', quantity: 1, service: 'Premium Care' }
    ],
    status: 'processing',
    timeline: [
      { status: 'confirmed', label: 'Order Confirmed', time: '2024-01-15 10:30 AM', completed: true },
      { status: 'pickup', label: 'Picked Up', time: '2024-01-15 2:15 PM', completed: true },
      { status: 'processing', label: 'In Process', time: '2024-01-16 9:00 AM', completed: true },
      { status: 'quality', label: 'Quality Check', time: 'Pending', completed: false },
      { status: 'delivery', label: 'Out for Delivery', time: 'Pending', completed: false },
      { status: 'completed', label: 'Delivered', time: 'Pending', completed: false }
    ],
    totalAmount: '₹340',
    paymentStatus: 'Paid'
  };

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (trackingId.toLowerCase().includes('dc2024') || trackingId === '9876543210') {
        setOrderData(mockOrderData);
      } else {
        setOrderData(null);
        alert('Order not found. Please check your Order ID or Phone Number.');
      }
      setIsLoading(false);
    }, 1500);
  };

  const getStatusIcon = (status, completed) => {
    if (completed) {
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    }
    
    switch (status) {
      case 'confirmed':
        return <Package className="w-6 h-6 text-[#0096c7]" />;
      case 'pickup':
        return <Truck className="w-6 h-6 text-[#0096c7]" />;
      case 'processing':
        return <Clock className="w-6 h-6 text-[#0096c7]" />;
      case 'quality':
        return <CheckCircle className="w-6 h-6 text-gray-400" />;
      case 'delivery':
        return <Truck className="w-6 h-6 text-gray-400" />;
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-gray-400" />;
      default:
        return <Clock className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status, completed) => {
    if (completed) return 'text-green-600';
    if (status === orderData?.status) return 'text-[#0096c7]';
    return 'text-gray-400';
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0096c7] to-[#007ba3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Track Your Order
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Stay updated with real-time tracking of your dry cleaning order. 
            Enter your Order ID or Phone Number to get instant updates.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-[#333333] mb-3">
                  Enter Order ID or Phone Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="e.g., DC2024001234 or +91 98765 43210"
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                    required
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0096c7] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Tracking...
                  </div>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Track Order
                  </>
                )}
              </button>
            </form>

            {/* Demo Instructions */}
            <div className="mt-6 p-4 bg-[#b5ead7] bg-opacity-30 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Demo:</strong> Try tracking with "DC2024001234" or "9876543210" to see the tracking interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Details */}
      {orderData && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#333333] mb-6">Order Details</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order ID:</span>
                      <span className="font-semibold text-[#0096c7]">{orderData.orderId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Customer:</span>
                      <span className="font-semibold">{orderData.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-semibold">{orderData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order Date:</span>
                      <span className="font-semibold">{orderData.orderDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Delivery:</span>
                      <span className="font-semibold text-green-600">{orderData.expectedDelivery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-bold text-xl text-[#0096c7]">{orderData.totalAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment:</span>
                      <span className="font-semibold text-green-600">{orderData.paymentStatus}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#333333] mb-4">Items</h3>
                  <div className="space-y-3">
                    {orderData.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-600 ml-2">x{item.quantity}</span>
                        </div>
                        <span className="text-sm bg-[#0096c7] text-white px-2 py-1 rounded">
                          {item.service}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-[#b5ead7] bg-opacity-30 rounded-lg">
                    <div className="flex items-center text-sm text-gray-700">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{orderData.pickupAddress}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-8">Order Timeline</h2>
              
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                
                <div className="space-y-8">
                  {orderData.timeline.map((step, index) => (
                    <div key={index} className="relative flex items-center">
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-gray-300 rounded-full">
                        {getStatusIcon(step.status, step.completed)}
                      </div>
                      
                      <div className="ml-6 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-lg font-semibold ${getStatusColor(step.status, step.completed)}`}>
                            {step.label}
                          </h3>
                          <span className="text-sm text-gray-500">{step.time}</span>
                        </div>
                        
                        {step.status === orderData.status && !step.completed && (
                          <div className="mt-2">
                            <div className="flex items-center text-sm text-[#0096c7]">
                              <div className="animate-pulse w-2 h-2 bg-[#0096c7] rounded-full mr-2"></div>
                              Current Status
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-8 bg-gradient-to-r from-[#b5ead7] to-[#a8e6cf] rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#333333] mb-4">
                  Need Help with Your Order?
                </h3>
                <p className="text-gray-700 mb-6">
                  Our customer support team is here to assist you with any questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[#0096c7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Support
                  </button>
                  <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                    WhatsApp Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Tracking FAQs
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-[#333333] mb-2">How often is tracking updated?</h3>
              <p className="text-gray-600">
                Order status is updated in real-time. You'll receive SMS and WhatsApp notifications 
                for each major milestone in the cleaning process.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold text-[#333333] mb-2">What if I can't find my order?</h3>
              <p className="text-gray-600">
                Please ensure you're using the correct Order ID or phone number. If you still can't 
                find your order, contact our customer support team for assistance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibant text-[#333333] mb-2">Can I modify my delivery address?</h3>
              <p className="text-gray-600">
                Yes, you can modify your delivery address up until your order is out for delivery. 
                Call our customer support or use the WhatsApp chat feature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tracking;