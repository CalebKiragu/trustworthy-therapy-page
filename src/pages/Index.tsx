
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Activity, Calendar, MessageSquare, Award, User } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Journey to Pain-Free Living Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert physiotherapy care tailored to your needs
            </p>
            <Button className="bg-primary hover:bg-primary-hover text-white text-lg px-8 py-6">
              Book Your Session
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive physiotherapy solutions for your well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real people
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MessageSquare className="text-primary mb-4" />
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-fade-in">
            Ready to Start Your Recovery Journey?
          </h2>
          <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
            Schedule Your First Session
          </Button>
        </div>
      </section>
      
      {/* Add Footer */}
      <Footer />
    </div>
  );
};

// Sample data
const services = [
  {
    icon: <Activity size={32} />,
    title: "Sports Rehabilitation",
    description: "Specialized treatment for sports-related injuries and performance enhancement.",
  },
  {
    icon: <Heart size={32} />,
    title: "Chronic Pain Management",
    description: "Comprehensive approaches to manage and reduce chronic pain conditions.",
  },
  {
    icon: <Award size={32} />,
    title: "Post-Surgery Recovery",
    description: "Tailored rehabilitation programs for post-surgical recovery.",
  },
];

const testimonials = [
  {
    text: "The team's expertise and dedication helped me recover faster than I expected.",
    name: "Sarah Johnson",
    title: "Marathon Runner",
  },
  {
    text: "Professional, caring, and highly skilled. Highly recommend their services!",
    name: "Michael Chen",
    title: "Office Professional",
  },
  {
    text: "A life-changing experience. I'm pain-free for the first time in years.",
    name: "Emma Wilson",
    title: "Yoga Instructor",
  },
];

export default Index;
