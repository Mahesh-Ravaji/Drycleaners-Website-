import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, User, Shirt, MessageCircle, Calculator, Plus, Minus } from 'lucide-react';

const Schedule = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    apartment: '',
    city: '',
    pincode: '',
    pickupDate: '',
    pickupTime: '',
    deliveryDate: '',
    garmentTypes: [],
    specialInstructions: '',
    saveAddress: false,
    whatsappUpdates: true,
    delicateItems: false
  });

  const [garmentCounts, setGarmentCounts] = useState({
    shirt: { dryClean: 0, iron: 0 },
    tshirt: { dryClean: 0, iron: 0 },
    pant: { dryClean: 0, iron: 0 },
    dress: { dryClean: 0, iron: 0 },
    saree: { dryClean: 0, iron: 0 },
    jacket: { dryClean: 0, iron: 0 }
  });

  const pricingData = {
    shirt: { dryClean: 50, iron: 30 },
    tshirt: { dryClean: 40, iron: 25 },
    pant: { dryClean: 60, iron: 40 },
    dress: { dryClean: 100, iron: 70 },
    saree: { dryClean: 80, iron: 50 },
    jacket: { dryClean: 120, iron: 80 }
  };

  const garmentLabels = {
    shirt: 'Shirts',
    tshirt: 'T-Shirts',
    pant: 'Pants/Trousers',
    dress: 'Dresses',
    saree: 'Sarees',
    jacket: 'Jackets/Blazers'
  };

  const garmentOptions = [
    'Shirts', 'Trousers', 'Dresses', 'Suits', 'Sarees', 'Lehengas', 
    'Jackets', 'Coats', 'Curtains', 'Bedsheets', 'Others'
  ];

  const timeSlots = [
    '9:00 AM - 12:00 PM',
    '12:00 PM - 3:00 PM',
    '3:00 PM - 6:00 PM',
    '6:00 PM - 9:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGarmentChange = (garment) => {
    setFormData(prev => ({
      ...prev,
      garmentTypes: prev.garmentTypes.includes(garment)
        ? prev.garmentTypes.filter(g => g !== garment)
        : [...prev.garmentTypes, garment]
    }));
  };

  const updateGarmentCount = (garment, service, change) => {
    setGarmentCounts(prev => ({
      ...prev,
      [garment]: {
        ...prev[garment],
        [service]: Math.max(0, prev[garment][service] + change)
      }
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(garmentCounts).forEach(garment => {
      total += garmentCounts[garment].dryClean * pricingData[garment].dryClean;
      total += garmentCounts[garment].iron * pricingData[garment].iron;
    });
    return total;
  };

  const getTotalItems = () => {
    let total = 0;
    Object.keys(garmentCounts).forEach(garment => {
      total += garmentCounts[garment].dryClean + garmentCounts[garment].iron;
    });
    return total;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, garmentCounts, totalAmount: calculateTotal() });
    alert('Pickup scheduled successfully! We will contact you shortly to confirm.');
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-[#0096c7] to-[#007ba3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Schedule a Pickup
          </h1>
          <p className="text-xl opacity-90">
            Book your convenient pickup time and let us take care of the rest
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-6 flex items-center">
                <User className="w-6 h-6 mr-2 text-[#0096c7]" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-[#0096c7]" />
                Pickup Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                    placeholder="House number, street name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apartment/Building
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                    placeholder="Apt, building, floor"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                    placeholder="Delhi"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                    placeholder="110001"
                  />
                </div>
              </div>
            </div>

            {/* Pickup Schedule */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-[#0096c7]" />
                Pickup Schedule
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Time *
                  </label>
                  <select
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Delivery Date
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Garment Information */}
            <div className="mb-8 space-y-8">
              {/* Pricing Calculator */}
              <div>
                <h2 className="text-2xl font-bold text-[#333333] mb-6 flex items-center">
                  <Calculator className="w-6 h-6 mr-2 text-[#0096c7]" />
                  Select Garments & Calculate Price
                </h2>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {Object.keys(garmentCounts).map((garment) => (
                      <div key={garment} className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-[#333333] mb-3">{garmentLabels[garment]}</h4>
                        
                        {/* Dry Clean */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex-1">
                            <span className="text-sm text-gray-600">Dry Clean</span>
                            <span className="block text-[#0096c7] font-semibold">₹{pricingData[garment].dryClean}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button
                              type="button"
                              onClick={() => updateGarmentCount(garment, 'dryClean', -1)}
                              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-semibold">{garmentCounts[garment].dryClean}</span>
                            <button
                              type="button"
                              onClick={() => updateGarmentCount(garment, 'dryClean', 1)}
                              className="w-8 h-8 rounded-full bg-[#0096c7] text-white flex items-center justify-center hover:bg-[#007ba3] transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Iron Only */}
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <span className="text-sm text-gray-600">Wash & Iron</span>
                            <span className="block text-[#0096c7] font-semibold">₹{pricingData[garment].iron}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button
                              type="button"
                              onClick={() => updateGarmentCount(garment, 'iron', -1)}
                              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-semibold">{garmentCounts[garment].iron}</span>
                            <button
                              type="button"
                              onClick={() => updateGarmentCount(garment, 'iron', 1)}
                              className="w-8 h-8 rounded-full bg-[#0096c7] text-white flex items-center justify-center hover:bg-[#007ba3] transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Price Summary */}
                  <div className="mt-6 bg-[#0096c7] text-white rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-semibold">Total Items: {getTotalItems()}</span>
                        <span className="block text-sm opacity-90">Estimated Amount</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold">₹{calculateTotal()}</span>
                        <span className="block text-sm opacity-90">+ Pickup & Delivery FREE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Garment Types */}
              <div>
              <h2 className="text-2xl font-bold text-[#333333] mb-6 flex items-center">
                <Shirt className="w-6 h-6 mr-2 text-[#0096c7]" />
                Additional Garment Types
              </h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Other Items (Optional)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {garmentOptions.map((garment, index) => (
                    <label key={index} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.garmentTypes.includes(garment)}
                        onChange={() => handleGarmentChange(garment)}
                        className="h-4 w-4 text-[#0096c7] border-gray-300 rounded focus:ring-[#0096c7]"
                      />
                      <span className="ml-2 text-sm text-gray-700">{garment}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions
                </label>
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                  placeholder="Any special handling instructions, stain details, or preferences..."
                />
              </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-6">
                Preferences
              </h2>
              <div className="space-y-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="saveAddress"
                    checked={formData.saveAddress}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#0096c7] border-gray-300 rounded focus:ring-[#0096c7]"
                  />
                  <span className="ml-3 text-gray-700">Save this address for future orders</span>
                </label>
                
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="whatsappUpdates"
                    checked={formData.whatsappUpdates}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#0096c7] border-gray-300 rounded focus:ring-[#0096c7]"
                  />
                  <span className="ml-3 text-gray-700">Receive order updates via WhatsApp</span>
                </label>
                
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="delicateItems"
                    checked={formData.delicateItems}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#0096c7] border-gray-300 rounded focus:ring-[#0096c7]"
                  />
                  <span className="ml-3 text-gray-700">I have delicate items that need special care</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              {getTotalItems() > 0 && (
                <div className="mb-4 p-4 bg-[#b5ead7] bg-opacity-30 rounded-lg">
                  <p className="text-[#333333] font-semibold">
                    Order Summary: {getTotalItems()} items • Estimated Total: ₹{calculateTotal()}
                  </p>
                </div>
              )}
              <button
                type="submit"
                disabled={getTotalItems() === 0}
                className="bg-[#0096c7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Schedule Pickup
              </button>
              <p className="text-sm text-gray-600 mt-4">
                {getTotalItems() > 0 
                  ? "We'll call you within 30 minutes to confirm your pickup" 
                  : "Please select at least one garment to continue"
                }
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#333333] mb-8">
            Need Immediate Assistance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <Phone className="w-8 h-8 text-[#0096c7]" />
              <div className="text-left">
                <p className="font-semibold text-[#333333]">Call Us</p>
                <p className="text-[#0096c7]">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <MessageCircle className="w-8 h-8 text-green-500" />
              <div className="text-left">
                <p className="font-semibold text-[#333333]">WhatsApp</p>
                <p className="text-green-500">Quick booking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;