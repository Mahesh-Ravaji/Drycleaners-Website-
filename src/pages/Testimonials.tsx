import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      service: 'Wedding Garment Care',
      location: 'South Delhi',
      date: 'January 2024',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      text: 'Absolutely incredible service! My wedding lehenga had several stubborn stains from the ceremony, and I was worried it was ruined forever. Decent Drycleaners not only removed every single stain but also restored the original shine and texture of the fabric. The team was professional, careful, and delivered exactly when promised.',
      highlight: 'Perfect stain removal on wedding lehenga'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      rating: 5,
      service: 'Regular Dry Cleaning',
      location: 'Gurgaon',
      date: 'February 2024',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      text: "I've been using Decent Drycleaners for over 2 years now, and they never disappoint. My formal suits always come back looking brand new. The pickup and delivery service is incredibly convenient - they work around my schedule. The quality is consistent, and the pricing is very reasonable for the premium service they provide.",
      highlight: 'Consistent quality over 2+ years'
    },
    {
      id: 3,
      name: 'Anita Singh',
      rating: 5,
      service: 'Stain Removal',
      location: 'Central Delhi',
      date: 'March 2024',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      text: 'My silk saree had an oil stain that other dry cleaners said was impossible to remove. Decent Drycleaners took it as a challenge and completely restored it! Their expertise in handling delicate fabrics is unmatched. They explained the entire process and kept me updated throughout.',
      highlight: 'Impossible oil stain completely removed'
    },
    {
      id: 4,
      name: 'Vikram Mehta',
      rating: 5,
      service: 'Steam Ironing',
      location: 'Noida',
      date: 'February 2024',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      text: 'The steam ironing service is phenomenal. My shirts have never looked better - crisp, professional, and perfectly pressed. The attention to detail is remarkable. They even fix minor issues like loose buttons without being asked. Truly premium service!',
      highlight: 'Professional-grade steam ironing'
    },
    {
      id: 5,
      name: 'Meera Gupta',
      rating: 5,
      service: 'Curtain Cleaning',
      location: 'Faridabad',
      date: 'January 2024',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      text: 'Had my heavy curtains cleaned for the first time in years. The transformation was amazing! They removed years of dust and restored the original colors. The pickup and delivery for such bulky items was handled very professionally.',
      highlight: 'Amazing curtain restoration'
    },
    {
      id: 6,
      name: 'Arjun Patel',
      rating: 4,
      service: 'Regular Dry Cleaning',
      location: 'East Delhi',
      date: 'March 2024',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg',
      text: 'Great service overall. My jackets and trousers are always cleaned perfectly. The only minor issue was a slight delay in delivery once, but they compensated by offering a discount on the next order. Very customer-focused approach.',
      highlight: 'Customer-focused service recovery'
    },
    {
      id: 7,
      name: 'Kavya Reddy',
      rating: 5,
      service: 'Wedding Garment Care',
      location: 'Ghaziabad',
      date: 'December 2023',
      image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg',
      text: 'Cleaned my entire wedding trousseau including heavy lehengas, delicate sarees, and embroidered blouses. Every piece was returned in perfect condition. They even provided special hangers and protective covers. Exceptional care for special occasions!',
      highlight: 'Complete wedding trousseau care'
    },
    {
      id: 8,
      name: 'Rohit Sharma',
      rating: 5,
      service: 'Leather Care',
      location: 'West Delhi',
      date: 'February 2024',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      text: 'My leather jacket was looking worn and faded. After their leather care treatment, it looks brand new! The conditioning and color restoration was perfect. They clearly know how to handle different types of leather properly.',
      highlight: 'Expert leather restoration'
    }
  ];

  const services = [
    'all',
    'Wedding Garment Care',
    'Regular Dry Cleaning', 
    'Stain Removal',
    'Steam Ironing',
    'Curtain Cleaning',
    'Leather Care'
  ];

  const ratings = ['all', '5', '4', '3'];

  const getFilteredTestimonials = () => {
    return testimonials.filter(testimonial => {
      const ratingMatch = selectedRating === 'all' || testimonial.rating.toString() === selectedRating;
      const serviceMatch = selectedService === 'all' || testimonial.service === selectedService;
      return ratingMatch && serviceMatch;
    });
  };

  const filteredTestimonials = getFilteredTestimonials();
  const testimonialsPerPage = 6;
  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);
  const currentTestimonials = filteredTestimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const ratingDistribution = {
    5: testimonials.filter(t => t.rating === 5).length,
    4: testimonials.filter(t => t.rating === 4).length,
    3: testimonials.filter(t => t.rating === 3).length,
    2: testimonials.filter(t => t.rating === 2).length,
    1: testimonials.filter(t => t.rating === 1).length
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0096c7] to-[#007ba3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover why thousands of customers trust Decent Drycleaners with their precious garments. 
            Real stories, honest feedback, genuine satisfaction.
          </p>
          
          {/* Rating Summary */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <div className="text-lg opacity-90">
                Based on {testimonials.length} reviews
              </div>
            </div>
            
            <div className="text-sm opacity-80">
              {Math.round((ratingDistribution[5] / testimonials.length) * 100)}% of customers rate us 5 stars
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedRating}
                onChange={(e) => {
                  setSelectedRating(e.target.value);
                  setCurrentPage(0);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
              >
                <option value="all">All Ratings</option>
                {ratings.slice(1).map(rating => (
                  <option key={rating} value={rating}>{rating} Stars</option>
                ))}
              </select>

              <select
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                  setCurrentPage(0);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
              >
                <option value="all">All Services</option>
                {services.slice(1).map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#b5ead7]"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-[#333333] text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">{testimonial.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-[#0096c7] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.service}
                  </span>
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute top-0 left-0 w-6 h-6 text-[#b5ead7]" />
                  <p className="text-gray-700 pl-8 leading-relaxed italic">
                    {testimonial.text}
                  </p>
                </div>

                <div className="bg-[#b5ead7] bg-opacity-30 rounded-lg p-3">
                  <p className="text-sm font-semibold text-[#0096c7]">
                    ✨ {testimonial.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-4">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-[#0096c7]" />
              </button>

              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors duration-200 ${
                      index === currentPage
                        ? 'bg-[#0096c7] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5 text-[#0096c7]" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Rating Breakdown
            </h2>
            <p className="text-gray-600">See how our customers rate different aspects of our service</p>
          </div>

          <div className="space-y-6">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 w-20">
                  <span className="text-sm font-medium">{stars}</span>
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[#0096c7] h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${(ratingDistribution[stars] / testimonials.length) * 100}%`
                    }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 w-16 text-right">
                  {Math.round((ratingDistribution[stars] / testimonials.length) * 100)}%
                </div>
                <div className="text-sm text-gray-500 w-12 text-right">
                  ({ratingDistribution[stars]})
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-20 bg-gradient-to-br from-[#b5ead7] to-[#a8e6cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We'd love to hear about your experience with our services. 
            Your feedback helps us improve and helps others make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0096c7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300">
              Write a Review
            </button>
            <button className="border-2 border-[#0096c7] text-[#0096c7] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0096c7] hover:text-white transition-all duration-300">
              Schedule a Pickup
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-[#333333] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{testimonials.length}+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{averageRating.toFixed(1)}/5</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {Math.round((ratingDistribution[5] / testimonials.length) * 100)}%
              </div>
              <div className="text-gray-400">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;