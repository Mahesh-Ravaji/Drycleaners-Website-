import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Phone, MessageCircle, Mail } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'services', name: 'Services' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'pickup-delivery', name: 'Pickup & Delivery' },
    { id: 'care', name: 'Garment Care' },
    { id: 'policies', name: 'Policies' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'services',
      question: 'What services do you offer?',
      answer: 'We offer comprehensive dry cleaning services including premium dry cleaning, steam ironing, stain removal, curtain & upholstery cleaning, wedding garment care, and leather & suede care. We also provide specialized treatments for delicate fabrics and vintage clothing.'
    },
    {
      id: 2,
      category: 'pickup-delivery',
      question: 'Do you offer pickup and delivery services?',
      answer: 'Yes! We provide free pickup and delivery services across Delhi NCR. You can schedule a pickup through our website, phone, or WhatsApp. Our team will collect your garments from your doorstep and deliver them back clean and fresh at your preferred time.'
    },
    {
      id: 3,
      category: 'pricing',
      question: 'How much do your services cost?',
      answer: 'Our pricing varies by garment type and service. Basic items like shirts start from ₹50 for dry cleaning and ₹30 for wash & iron. We offer transparent pricing with no hidden costs. You can download our complete price list from the pricing page or contact us for a custom quote.'
    },
    {
      id: 4,
      category: 'pickup-delivery',
      question: 'What is your turnaround time?',
      answer: 'Our standard turnaround time is 2-3 days. We also offer express 24-hour service for urgent requirements at a small additional charge. For specialized items like wedding garments or heavy stain removal, we may need 3-5 days to ensure perfect results.'
    },
    {
      id: 5,
      category: 'care',
      question: 'Can you remove all types of stains?',
      answer: 'We have excellent success rates with most stains including oil, food, ink, wine, and makeup stains. Our expert team uses specialized treatments for different stain types. While we cannot guarantee 100% stain removal, we achieve remarkable results even with old or set-in stains.'
    },
    {
      id: 6,
      category: 'pickup-delivery',
      question: 'What areas do you cover for pickup and delivery?',
      answer: 'We provide pickup and delivery services across Delhi NCR including Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. Our service area covers most residential and commercial areas within a 50km radius of central Delhi.'
    },
    {
      id: 7,
      category: 'care',
      question: 'How do you handle delicate fabrics?',
      answer: 'We have specialized processes for delicate fabrics like silk, wool, cashmere, and vintage clothing. Our trained professionals use appropriate solvents, temperatures, and techniques for each fabric type. We also provide special packaging to protect delicate items during transport.'
    },
    {
      id: 8,
      category: 'policies',
      question: 'What is your satisfaction guarantee?',
      answer: 'We offer 100% satisfaction guarantee. If you are not completely satisfied with our service, we will re-clean your garments free of charge. In rare cases where damage occurs due to our negligence, we provide appropriate compensation as per our terms and conditions.'
    },
    {
      id: 9,
      category: 'pricing',
      question: 'Do you offer any packages or discounts?',
      answer: 'Yes! We offer various packages including Basic (5 items for ₹299), Premium (10 items for ₹599), and Family packages (20 items for ₹999). We also provide discounts for bulk orders, regular customers, and seasonal promotions. Check our pricing page for current offers.'
    },
    {
      id: 10,
      category: 'services',
      question: 'Can you clean wedding dresses and formal wear?',
      answer: 'Absolutely! Wedding garment care is one of our specialties. We handle wedding dresses, lehengas, sherwanis, and other ceremonial clothing with utmost care. Our experts are trained in cleaning heavily embroidered, beaded, and delicate fabrics commonly used in wedding attire.'
    },
    {
      id: 11,
      category: 'pickup-delivery',
      question: 'How do I schedule a pickup?',
      answer: 'You can schedule a pickup in three easy ways: 1) Fill out the online form on our website, 2) Call us at +91 98765 43210, or 3) Send a WhatsApp message. Choose your preferred pickup date and time slot, and our team will arrive at your doorstep.'
    },
    {
      id: 12,
      category: 'care',
      question: 'Do you use eco-friendly cleaning methods?',
      answer: 'Yes, we are committed to environmental responsibility. We use 100% eco-friendly solvents that are safe for both your clothes and the environment. Our cleaning processes are designed to minimize environmental impact while maintaining the highest quality standards.'
    },
    {
      id: 13,
      category: 'policies',
      question: 'How do you handle lost or damaged items?',
      answer: 'We take extreme care with all garments, but in the rare event of loss or damage, we have a comprehensive insurance policy. We will compensate based on the item\'s declared value or provide replacement. We maintain detailed records and photos of all items for your protection.'
    },
    {
      id: 14,
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including cash on delivery, UPI, debit/credit cards, net banking, and digital wallets. Payment can be made during pickup, delivery, or online when scheduling your service. We also offer monthly billing for regular customers.'
    },
    {
      id: 15,
      category: 'services',
      question: 'Can you clean curtains and home textiles?',
      answer: 'Yes, we provide comprehensive home textile cleaning including curtains, sofa covers, bedsheets, comforters, and table linens. We handle both standard and oversized items with proper care and equipment to ensure they retain their shape and quality.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0096c7] to-[#007ba3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Find quick answers to common questions about our dry cleaning services, 
            policies, and processes. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-[#0096c7] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                  >
                    <h3 className="text-lg font-semibold text-[#333333] pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-[#0096c7] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#0096c7] flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-4">
                      <div className="border-t pt-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">
                No questions found matching your search.
              </p>
              <p className="text-gray-500">
                Try adjusting your search terms or browse all categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600">
              Our customer support team is here to assist you with any questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our customer service team
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-[#0096c7]">+91 98765 43210</p>
                <p className="text-sm text-gray-500">Mon-Sat: 8AM-8PM</p>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Quick responses via WhatsApp chat
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-green-600">Chat Now</p>
                <p className="text-sm text-gray-500">Usually responds in minutes</p>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us a detailed message
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-[#0096c7]">info@decentdrycleaners.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gradient-to-br from-[#b5ead7] to-[#a8e6cf]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Popular Help Topics
            </h2>
            <p className="text-gray-700">
              Quick links to our most requested information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-lg font-bold text-[#333333] mb-2">Scheduling & Pickup</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• How to schedule a pickup</li>
                <li>• Available time slots</li>
                <li>• Service areas covered</li>
                <li>• Rescheduling policies</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-lg font-bold text-[#333333] mb-2">Pricing & Payments</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Service pricing guide</li>
                <li>• Package deals available</li>
                <li>• Payment methods accepted</li>
                <li>• Discount programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-lg font-bold text-[#333333] mb-2">Garment Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fabric-specific treatments</li>
                <li>• Stain removal process</li>
                <li>• Wedding dress care</li>
                <li>• Delicate item handling</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-lg font-bold text-[#333333] mb-2">Policies & Guarantees</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Satisfaction guarantee</li>
                <li>• Damage compensation</li>
                <li>• Lost item procedures</li>
                <li>• Quality standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#333333] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Premium Care?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule your first pickup today and see why customers trust us with their precious garments
          </p>
          <button className="bg-[#0096c7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300">
            Schedule a Pickup Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;