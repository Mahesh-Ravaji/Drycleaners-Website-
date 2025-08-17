import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, X } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'facility', name: 'Our Facility' },
    { id: 'process', name: 'Cleaning Process' },
    { id: 'before-after', name: 'Before & After' },
    { id: 'team', name: 'Our Team' },
    { id: 'customers', name: 'Happy Customers' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'facility',
      type: 'image',
      src: 'https://images.pexels.com/photos/5842513/pexels-photo-5842513.jpeg',
      title: 'Modern Dry Cleaning Equipment',
      description: 'State-of-the-art machines for premium garment care'
    },
    {
      id: 2,
      category: 'process',
      type: 'image',
      src: 'https://images.pexels.com/photos/5842508/pexels-photo-5842508.jpeg',
      title: 'Professional Steam Pressing',
      description: 'Expert pressing techniques for perfect finishes'
    },
    {
      id: 3,
      category: 'facility',
      type: 'image',
      src: 'https://images.pexels.com/photos/5842512/pexels-photo-5842512.jpeg',
      title: 'Quality Control Station',
      description: 'Every garment undergoes thorough quality inspection'
    },
    {
      id: 4,
      category: 'team',
      type: 'image',
      src: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      title: 'Our Expert Team',
      description: 'Experienced professionals dedicated to excellence'
    },
    {
      id: 5,
      category: 'before-after',
      type: 'comparison',
      before: 'https://images.pexels.com/photos/5842510/pexels-photo-5842510.jpeg',
      after: 'https://images.pexels.com/photos/5842513/pexels-photo-5842513.jpeg',
      title: 'Stain Removal Success',
      description: 'Tough stains completely removed with our expert treatment'
    },
    {
      id: 6,
      category: 'customers',
      type: 'image',
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      title: 'Satisfied Customer',
      description: 'Mrs. Priya Sharma with her perfectly cleaned wedding outfit'
    },
    {
      id: 7,
      category: 'facility',
      type: 'image',
      src: 'https://images.pexels.com/photos/7214179/pexels-photo-7214179.jpeg',
      title: 'Delivery Vehicle',
      description: 'Our dedicated delivery fleet for your convenience'
    },
    {
      id: 8,
      category: 'process',
      type: 'video',
      thumbnail: 'https://images.pexels.com/photos/5842517/pexels-photo-5842517.jpeg',
      title: 'Cleaning Process Video',
      description: 'Watch our meticulous cleaning process in action'
    },
    {
      id: 9,
      category: 'before-after',
      type: 'comparison',
      before: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
      after: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
      title: 'Wedding Dress Restoration',
      description: 'Vintage wedding dress restored to its original beauty'
    }
  ];

  const testimonialSlides = [
    {
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      name: 'Priya Sharma',
      rating: 5,
      text: 'Absolutely fantastic service! My wedding lehenga was cleaned to perfection.',
      service: 'Wedding Garment Care'
    },
    {
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Professional and reliable. My suits always come back looking brand new.',
      service: 'Regular Dry Cleaning'
    },
    {
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      name: 'Anita Singh',
      rating: 5,
      text: 'Best dry cleaning service in Delhi! Excellent stain removal expertise.',
      service: 'Stain Removal'
    }
  ];

  const getFilteredItems = () => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === selectedCategory);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialSlides.length) % testimonialSlides.length);
  };

  const ComparisonSlider = ({ before, after, title }) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
        <img 
          src={after} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)` }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-[#0096c7] rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
          Before
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
          After
        </div>
      </div>
    );
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0096c7] to-[#007ba3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Gallery
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            See our state-of-the-art facility, expert team, and the amazing results 
            we achieve for our valued customers every day.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
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

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredItems().map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                {item.type === 'comparison' ? (
                  <ComparisonSlider 
                    before={item.before}
                    after={item.after}
                    title={item.title}
                  />
                ) : item.type === 'video' ? (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-[#0096c7] ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Customer Stories
            </h2>
            <p className="text-xl text-gray-600">Real experiences from our valued customers</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonialSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#b5ead7] to-[#a8e6cf] p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                        <img
                          src={slide.image}
                          alt={slide.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-2">
                            {[...Array(slide.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-lg md:text-xl text-[#333333] italic mb-4">
                            "{slide.text}"
                          </p>
                          <div>
                            <p className="font-bold text-[#333333]">{slide.name}</p>
                            <p className="text-gray-600">{slide.service}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-[#0096c7]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-[#0096c7]" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonialSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-[#0096c7]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden">
              {selectedImage.type === 'comparison' ? (
                <ComparisonSlider 
                  before={selectedImage.before}
                  after={selectedImage.after}
                  title={selectedImage.title}
                />
              ) : (
                <img
                  src={selectedImage.src || selectedImage.thumbnail}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-96 object-cover"
                />
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#333333] mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[#333333] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            See why thousands of customers trust us with their precious garments
          </p>
          <button className="bg-[#0096c7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300">
            Schedule Your Pickup Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;