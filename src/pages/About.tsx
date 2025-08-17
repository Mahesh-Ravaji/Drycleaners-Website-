import React from 'react';
import { Users, Award, Heart, Target } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2014",
      title: "The Beginning",
      description: "Started with a small shop and a big dream to provide premium dry cleaning services"
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Opened our second location and introduced pickup & delivery services"
    },
    {
      year: "2018",
      title: "Technology Integration",
      description: "Launched online booking platform and order tracking system"
    },
    {
      year: "2020",
      title: "Eco-Friendly Initiative",
      description: "Adopted 100% eco-friendly cleaning solvents and processes"
    },
    {
      year: "2024",
      title: "Premium Service",
      description: "Now serving 5000+ customers with specialized garment care services"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around our customers' satisfaction and convenience"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality and use only the best equipment and techniques"
    },
    {
      icon: Users,
      title: "Trust & Reliability",
      description: "Building lasting relationships through consistent, dependable service"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously improving our processes and services to exceed expectations"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0096c7] to-[#007ba3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-xl mb-8 opacity-90">
                For over a decade, Decent Drycleaners has been the trusted choice 
                for premium garment care in Delhi NCR. Our journey began with a 
                simple mission: to care for your clothes like they were our own.
              </p>
              <blockquote className="text-2xl italic border-l-4 border-[#b5ead7] pl-6">
                "Clothes are not just worn — they're memories. Let us help you keep them fresh."
              </blockquote>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5842513/pexels-photo-5842513.jpeg"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#b5ead7] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide exceptional dry cleaning services that preserve the quality, 
                appearance, and longevity of our customers' garments while offering 
                unmatched convenience through our pickup and delivery services.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading dry cleaning service provider in India, setting 
                the standard for quality, innovation, and customer satisfaction in 
                the garment care industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">A decade of growth, innovation, and customer satisfaction</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#0096c7]"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-[#0096c7] font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-[#333333] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-[#0096c7] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#007ba3] transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#b5ead7] to-[#a8e6cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-700">Dedicated professionals committed to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Rajesh Gupta</h3>
              <p className="text-[#0096c7] font-semibold mb-3">Founder & CEO</p>
              <p className="text-gray-700">With over 15 years in the garment care industry, Rajesh started Decent Drycleaners with a vision to provide premium services.</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Operations Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Priya Sharma</h3>
              <p className="text-[#0096c7] font-semibold mb-3">Operations Manager</p>
              <p className="text-gray-700">Priya ensures smooth operations and maintains our high quality standards across all locations.</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Customer Service Head"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Anita Singh</h3>
              <p className="text-[#0096c7] font-semibold mb-3">Customer Service Head</p>
              <p className="text-gray-700">Anita leads our customer service team, ensuring every customer receives exceptional care and support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;