import React, { useState } from 'react';
import { Download, Star, Shield, Clock } from 'lucide-react';

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pricingData = [
    {
      category: 'mens',
      items: [
        { name: 'Shirt (Regular)', price: '₹50', wash: '₹30' },
        { name: 'Shirt (Premium)', price: '₹80', wash: '₹50' },
        { name: 'Trousers', price: '₹60', wash: '₹40' },
        { name: 'Suit (2 piece)', price: '₹200', wash: '₹120' },
        { name: 'Blazer/Jacket', price: '₹120', wash: '₹80' },
        { name: 'Tie', price: '₹40', wash: '₹25' },
        { name: 'Waistcoat', price: '₹60', wash: '₹40' }
      ]
    },
    {
      category: 'womens',
      items: [
        { name: 'Blouse/Top', price: '₹60', wash: '₹40' },
        { name: 'Dress (Short)', price: '₹100', wash: '₹70' },
        { name: 'Dress (Long)', price: '₹150', wash: '₹100' },
        { name: 'Saree (Simple)', price: '₹80', wash: '₹50' },
        { name: 'Saree (Heavy Work)', price: '₹200', wash: '₹120' },
        { name: 'Lehenga', price: '₹300', wash: '₹200' },
        { name: 'Kurta/Kurti', price: '₹70', wash: '₹45' }
      ]
    },
    {
      category: 'special',
      items: [
        { name: 'Wedding Dress', price: '₹500', wash: '₹300' },
        { name: 'Evening Gown', price: '₹250', wash: '₹150' },
        { name: 'Leather Jacket', price: '₹300', wash: 'N/A' },
        { name: 'Silk Garments', price: '₹150', wash: '₹100' },
        { name: 'Designer Wear', price: '₹200', wash: '₹120' },
        { name: 'Vintage Clothing', price: '₹180', wash: '₹100' }
      ]
    },
    {
      category: 'home',
      items: [
        { name: 'Curtains (per panel)', price: '₹100', wash: '₹60' },
        { name: 'Bedsheet (Single)', price: '₹80', wash: '₹50' },
        { name: 'Bedsheet (Double)', price: '₹120', wash: '₹80' },
        { name: 'Comforter/Quilt', price: '₹200', wash: '₹150' },
        { name: 'Sofa Cover', price: '₹150', wash: '₹100' },
        { name: 'Table Cloth', price: '₹60', wash: '₹40' }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: '👔' },
    { id: 'mens', name: "Men's Wear", icon: '👔' },
    { id: 'womens', name: "Women's Wear", icon: '👗' },
    { id: 'special', name: 'Special Care', icon: '✨' },
    { id: 'home', name: 'Home Textiles', icon: '🏠' }
  ];

  const packages = [
    {
      name: 'Basic Package',
      price: '₹299',
      originalPrice: '₹399',
      items: '5 Regular Items',
      features: ['Free Pickup & Delivery', 'Standard Cleaning', '2-3 Days Turnaround', 'Basic Packaging'],
      popular: false
    },
    {
      name: 'Premium Package',
      price: '₹599',
      originalPrice: '₹799',
      items: '10 Mixed Items',
      features: ['Free Pickup & Delivery', 'Premium Cleaning', '24hr Turnaround', 'Premium Packaging', 'Stain Protection'],
      popular: true
    },
    {
      name: 'Family Package',
      price: '₹999',
      originalPrice: '₹1299',
      items: '20 Mixed Items',
      features: ['Free Pickup & Delivery', 'Premium Cleaning', '24hr Turnaround', 'Premium Packaging', 'Stain Protection', 'Monthly Subscription'],
      popular: false
    }
  ];

  const getFilteredItems = () => {
    if (selectedCategory === 'all') {
      return pricingData.flatMap(category => 
        category.items.map(item => ({ ...item, category: category.category }))
      );
    }
    return pricingData.find(cat => cat.category === selectedCategory)?.items || [];
  };

  const handleDownloadPDF = () => {
    // In a real application, this would trigger a PDF download
    alert('Price list PDF download will start shortly!');
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0096c7] to-[#007ba3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            No hidden costs, no surprises. Quality dry cleaning at competitive prices 
            with the convenience you deserve.
          </p>
          <button
            onClick={handleDownloadPDF}
            className="bg-[#b5ead7] text-[#333333] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Full Price List
          </button>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600">Save more with our convenient packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular ? 'ring-4 ring-[#0096c7] ring-opacity-50' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#0096c7] text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#333333] mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-[#0096c7]">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-gray-600">{pkg.items}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-[#0096c7] rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  pkg.popular
                    ? 'bg-[#0096c7] text-white hover:bg-[#007ba3]'
                    : 'bg-gray-100 text-[#333333] hover:bg-gray-200'
                }`}>
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Individual Item Pricing
            </h2>
            <p className="text-xl text-gray-600">Flexible pricing for individual items</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-[#0096c7] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0096c7] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Item</th>
                    <th className="px-6 py-4 text-center">Dry Clean</th>
                    <th className="px-6 py-4 text-center">Wash & Iron</th>
                  </tr>
                </thead>
                <tbody>
                  {getFilteredItems().map((item, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#b5ead7] hover:bg-opacity-30 transition-colors duration-200`}
                    >
                      <td className="px-6 py-4 font-medium text-[#333333]">{item.name}</td>
                      <td className="px-6 py-4 text-center font-bold text-[#0096c7]">{item.price}</td>
                      <td className="px-6 py-4 text-center font-bold text-[#0096c7]">{item.wash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gradient-to-br from-[#b5ead7] to-[#a8e6cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Why Our Pricing Makes Sense
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Quality Guaranteed</h3>
              <p className="text-gray-700">
                Premium equipment and eco-friendly solvents ensure your clothes get the best care possible
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Fast Turnaround</h3>
              <p className="text-gray-700">
                Express service available with 24-hour turnaround for urgent cleaning needs
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Free Services</h3>
              <p className="text-gray-700">
                Complimentary pickup, delivery, and basic stain treatment with every order
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#333333] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Premium Care?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get started with our affordable pricing and premium service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0096c7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300">
              Schedule a Pickup
            </button>
            <button
              onClick={handleDownloadPDF}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#333333] transition-all duration-300 flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Price List
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;