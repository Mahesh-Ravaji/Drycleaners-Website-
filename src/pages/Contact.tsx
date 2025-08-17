import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const locations = [
    {
      name: 'Main Branch - Central Delhi',
      address: 'A-123, Connaught Place, New Delhi - 110001',
      phone: '+91 98765 43210',
      email: 'cp@decentdrycleaners.com',
      hours: 'Mon-Sat: 8AM-8PM, Sun: 10AM-6PM',
      image: 'https://images.pexels.com/photos/5842513/pexels-photo-5842513.jpeg'
    },
    {
      name: 'Gurgaon Branch',
      address: 'B-456, DLF Phase 2, Gurgaon - 122002',
      phone: '+91 98765 43211',
      email: 'gurgaon@decentdrycleaners.com',
      hours: 'Mon-Sat: 8AM-8PM, Sun: 10AM-6PM',
      image: 'https://images.pexels.com/photos/5842508/pexels-photo-5842508.jpeg'
    },
    {
      name: 'Noida Branch',
      address: 'C-789, Sector 18, Noida - 201301',
      phone: '+91 98765 43212',
      email: 'noida@decentdrycleaners.com',
      hours: 'Mon-Sat: 8AM-8PM, Sun: 10AM-6PM',
      image: 'https://images.pexels.com/photos/5842512/pexels-photo-5842512.jpeg'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our customer service team',
      contact: '+91 98765 43210',
      availability: 'Mon-Sat: 8AM-8PM',
      color: 'bg-[#0096c7]'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses via WhatsApp chat',
      contact: 'Chat Now',
      availability: 'Usually responds in minutes',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us a detailed message',
      contact: 'info@decentdrycleaners.com',
      availability: 'Response within 24 hours',
      color: 'bg-[#0096c7]'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        urgency: 'normal'
      });
    }, 2000);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0096c7] to-[#007ba3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We're here to help with all your dry cleaning needs. Reach out to us through 
            any of the channels below, and we'll get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              How Would You Like to Connect?
            </h2>
            <p className="text-gray-600">Choose the method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-[#0096c7]">{method.contact}</p>
                    <p className="text-sm text-gray-500">{method.availability}</p>
                  </div>
                  <button className={`mt-4 w-full ${method.color} text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-200`}>
                    {method.title === 'WhatsApp' ? 'Start Chat' : method.title === 'Call Us' ? 'Call Now' : 'Send Email'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  placeholder="Your full name"
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
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="pricing">Pricing Question</option>
                  <option value="service">Service Issue</option>
                  <option value="complaint">Complaint</option>
                  <option value="compliment">Compliment</option>
                  <option value="partnership">Business Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority Level
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                >
                  <option value="normal">Normal</option>
                  <option value="urgent">Urgent</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#0096c7] border-gray-300 focus:ring-[#0096c7]"
                  />
                  <span className="ml-2 text-gray-700">Email</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#0096c7] border-gray-300 focus:ring-[#0096c7]"
                  />
                  <span className="ml-2 text-gray-700">Phone</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="whatsapp"
                    checked={formData.preferredContact === 'whatsapp'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#0096c7] border-gray-300 focus:ring-[#0096c7]"
                  />
                  <span className="ml-2 text-gray-700">WhatsApp</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
                placeholder="Please provide details about your inquiry..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0096c7] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Our Locations
            </h2>
            <p className="text-gray-600">Visit us at any of our convenient locations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-4">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-[#0096c7] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{location.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[#0096c7] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{location.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-[#0096c7] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{location.email}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-[#0096c7] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{location.hours}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-[#0096c7] text-white py-2 rounded-lg hover:bg-[#007ba3] transition-colors duration-200">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Find Us on the Map
            </h2>
            <p className="text-gray-600">We serve customers across Delhi NCR</p>
          </div>

          <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#0096c7] mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</p>
              <p className="text-gray-600">
                In a real application, this would display an interactive map showing all our locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-br from-[#b5ead7] to-[#a8e6cf]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">
            Need Urgent Assistance?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            For time-sensitive issues or emergency dry cleaning needs, 
            contact us immediately through our priority channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0096c7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Hotline
            </button>
            <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Priority WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;