import React from 'react';
import { Shield, Droplets, Sparkles, Home, Heart, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Premium Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics using eco-friendly solvents",
      features: ["Eco-friendly solvents", "Delicate fabric care", "Stain treatment", "Professional pressing"],
      image: "https://images.pexels.com/photos/5842513/pexels-photo-5842513.jpeg",
      price: "Starting from ₹50"
    },
    {
      icon: Droplets,
      title: "Steam Ironing & Pressing",
      description: "Professional steam ironing to give your clothes a crisp, fresh look",
      features: ["Steam pressing", "Crease removal", "Professional finish", "Fabric protection"],
      image: "https://images.pexels.com/photos/5842508/pexels-photo-5842508.jpeg",
      price: "Starting from ₹20"
    },
    {
      icon: Sparkles,
      title: "Stain Removal",
      description: "Specialized treatment for tough stains with advanced cleaning techniques",
      features: ["Oil stain removal", "Food stain treatment", "Ink & color stains", "Organic stain care"],
      image: "https://images.pexels.com/photos/5842512/pexels-photo-5842512.jpeg",
      price: "Starting from ₹30"
    },
    {
      icon: Home,
      title: "Curtain & Upholstery",
      description: "Deep cleaning for curtains, sofa covers, and home textiles",
      features: ["Curtain cleaning", "Sofa cover cleaning", "Bedsheet service", "Home pickup"],
      image: "https://images.pexels.com/photos/6769120/pexels-photo-6769120.jpeg",
      price: "Starting from ₹100"
    },
    {
      icon: Heart,
      title: "Wedding Garment Care",
      description: "Special care for precious wedding attire and ceremonial clothes",
      features: ["Bridal wear cleaning", "Lehnga & Saree care", "Suit preservation", "Delicate embroidery"],
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
      price: "Starting from ₹200"
    },
    {
      icon: Star,
      title: "Leather & Suede Care",
      description: "Specialized cleaning and conditioning for leather and suede items",
      features: ["Leather cleaning", "Suede restoration", "Conditioning treatment", "Color restoration"],
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
      price: "Starting from ₹150"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Schedule Pickup",
      description: "Book a convenient pickup time through our website or WhatsApp"
    },
    {
      step: "02",
      title: "Professional Collection",
      description: "Our team collects your garments from your doorstep"
    },
    {
      step: "03",
      title: "Expert Cleaning",
      description: "Advanced cleaning techniques tailored to each garment type"
    },
    {
      step: "04",
      title: "Quality Check",
      description: "Thorough inspection to ensure perfect results"
    },
    {
      step: "05",
      title: "Safe Delivery",
      description: "Clean, fresh garments delivered back to your door"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0096c7] to-[#007ba3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Premium Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional garment care services designed to keep your clothes looking their best. 
            From everyday items to precious ceremonial wear, we handle everything with expert care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0096c7] bg-opacity-20" />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                      <IconComponent className="w-6 h-6 text-[#0096c7]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#333333] mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#333333] mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-[#0096c7] rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-[#0096c7]">{service.price}</span>
                      <button className="bg-[#0096c7] text-white px-4 py-2 rounded-lg hover:bg-[#007ba3] transition-colors duration-200">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Simple, convenient, and professional</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-[#0096c7] transform -translate-x-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-gradient-to-br from-[#b5ead7] to-[#a8e6cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Eco-Friendly</h3>
              <p className="text-gray-700">100% eco-friendly cleaning solvents safe for you and the environment</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Expert Care</h3>
              <p className="text-gray-700">Trained professionals with years of experience in garment care</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Door-to-Door</h3>
              <p className="text-gray-700">Free pickup and delivery service across Delhi NCR</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-700">100% satisfaction guaranteed or we'll re-clean for free</p>
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
            Schedule a pickup today and see the difference professional care makes
          </p>
          <button className="bg-[#0096c7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300">
            Schedule a Pickup
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;