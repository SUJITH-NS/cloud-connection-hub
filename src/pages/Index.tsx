
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CloudLightning, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cug-blue/10 to-cug-purple/10 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cug-blue/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cug-purple/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Cloud User Group</span>
                <br />
                <span>Community & Innovation</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Join our vibrant community of cloud enthusiasts, professionals, and innovators. 
                Share knowledge, build connections, and stay ahead in the world of cloud computing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                  <Link to="/events">Register for Events</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative">
                <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500/80 to-purple-500/80 rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <svg width="100%" height="100%">
                      <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                        <circle id="pattern-circle" cx="10" cy="10" r="1.6" fill="#fff"></circle>
                      </pattern>
                      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <CloudLightning size={80} className="text-white" />
                      <h3 className="text-xl md:text-2xl text-white mt-4">Cloud User Group</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Join Our Community?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Speakers",
                description: "Learn from industry leaders and cloud computing experts at our regular events.",
                icon: <CloudLightning className="w-12 h-12 text-blue-500" />
              },
              {
                title: "Networking",
                description: "Connect with like-minded professionals and build your professional network.",
                icon: <CloudLightning className="w-12 h-12 text-purple-500" />
              },
              {
                title: "Latest Trends",
                description: "Stay updated with the latest trends and technologies in cloud computing.",
                icon: <CloudLightning className="w-12 h-12 text-indigo-500" />
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become a part of our growing network of cloud professionals and enthusiasts.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/events">View Upcoming Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Cloud Architect",
                quote: "Being part of the CUG community has significantly expanded my knowledge and professional network."
              },
              {
                name: "Michael Chen",
                role: "DevOps Engineer",
                quote: "The events organized by CUG are always informative and offer great networking opportunities."
              },
              {
                name: "Jessica Williams",
                role: "Solution Architect",
                quote: "I've learned about cutting-edge cloud technologies through CUG that have helped advance my career."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
