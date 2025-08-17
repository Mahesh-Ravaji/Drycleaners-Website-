import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Clock, Users, Truck, Award, CheckCircle } from 'lucide-react';

const Homepage = () => {
  const [stats, setStats] = useState({
    customers: 0,
    orders: 0,
    experience: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const targets = { customers: 5000, orders: 25000, experience: 10, satisfaction: 99 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      Object.keys(targets).forEach(key => {
        const target = targets[key as keyof typeof targets];
        let current = 0;
        const step = target / steps;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, increment);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Premium Dry Cleaning",
      description: "Professional care for delicate fabrics with eco-friendly solvents",
      image: "https://images.pexels.com/photos/5842513/pexels-photo-5842513.jpeg"
    },
    {
      icon: Clock,
      title: "24hr Turnaround",
      description: "Express service available for urgent cleaning needs",
      image: "https://images.pexels.com/photos/5842508/pexels-photo-5842508.jpeg"
    },
    {
      icon: Truck,
      title: "Free Pickup & Delivery",
      description: "Convenient doorstep service across Delhi NCR",
      image: "https://images.pexels.com/photos/7214179/pexels-photo-7214179.jpeg"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Excellent service! My wedding dress was cleaned perfectly. Highly recommended!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Professional service with timely delivery. My suits always come back looking brand new.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "Anita Singh",
      rating: 5,
      comment: "Best dry cleaning service in Delhi! They handled my silk sarees with such care.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0096c7] to-[#0077b6]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/5842517/pexels-photo-5842517.jpeg')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Where Clean
            <span className="block text-[#b5ead7]">Meets Class</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Premium dry cleaning services with over 10 years of experience. 
            Professional care for your precious garments with free pickup & delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/schedule"
              className="bg-[#b5ead7] text-[#333333] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Pickup
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0096c7] transition-all duration-300"
            >
              Our Services
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-[#b5ead7]" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-[#b5ead7]" />
              <span>Free Pickup & Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-[#b5ead7]" />
              <span>5000+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0096c7] mb-2">
                {stats.customers.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0096c7] mb-2">
                {stats.orders.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Orders Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0096c7] mb-2">
                {stats.experience}+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0096c7] mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional garment care with attention to detail and commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#0096c7] bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#b5ead7] rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-[#0096c7]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#333333]">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#b5ead7] to-[#a8e6cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Why Choose Decent Drycleaners?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Premium Quality</h3>
              <p className="text-gray-700">State-of-the-art equipment and eco-friendly cleaning solutions</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Free Delivery</h3>
              <p className="text-gray-700">Convenient pickup and delivery across Delhi NCR</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0096c7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">24hr Service</h3>
              <p className="text-gray-700">Express cleaning available for urgent requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">Real feedback from our valued customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#333333]">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
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
            Join thousands of satisfied customers and give your clothes the care they deserve
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule"
              className="bg-[#0096c7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#007ba3] transition-colors duration-300"
            >
              Schedule a Pickup Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#333333] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;