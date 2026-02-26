import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Heart, Award, Users, PartyPopper, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroContent, testimonials } from '@/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with very light overlay for bright image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroContent.heroImage})`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-black/30"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-20 h-20 bg-amber-300/20 rounded-full blur-2xl animate-pulse"
            style={{
              top: '10%',
              left: '5%',
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          ></div>
          <div 
            className="absolute w-32 h-32 bg-orange-300/20 rounded-full blur-3xl animate-pulse" 
            style={{
              top: '20%',
              right: '10%',
              animationDelay: '1s',
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          ></div>
        </div>

        <div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: 1 - scrollY / 500,
          }}
        >
          {/* Text backdrop for better readability */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl py-12 px-8 shadow-2xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-tight bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
              {heroContent.title}
            </h1>
            
            <p className="text-3xl md:text-4xl text-gray-800 mb-4 font-bold">
              {heroContent.subtitle}
            </p>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {heroContent.description}
            </p>
          
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/events">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-7 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110"
                >
                  Explore Events <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-900 text-white border-2 border-gray-800 px-10 py-7 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 border-3 border-gray-700 rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-4 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-amber-50 rounded-full border border-amber-200">
              <Star className="w-5 h-5 text-amber-600" />
              <span className="text-amber-700 font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              We Make Magic Happen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring creativity, expertise, and passion to every celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Creative Excellence',
                description: 'Innovative designs that transform spaces into magical experiences',
                color: 'amber'
              },
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'High-quality materials and flawless execution in every project',
                color: 'orange'
              },
              {
                icon: Heart,
                title: 'Personalized Touch',
                description: 'Custom solutions tailored to your unique vision and style',
                color: 'rose'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Dedicated professionals committed to making your event perfect',
                color: 'amber'
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className="group bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:border-amber-200"
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-${feature.color}-100 rounded-2xl mb-6 transform group-hover:scale-110 transition-all duration-500 shadow-md`}>
                    <feature.icon className={`w-10 h-10 text-${feature.color}-700`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-amber-200">
              <Heart className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700 font-semibold">Client Love Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by families and businesses across Kolkata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <CardContent className="p-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.event}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-amber-600 to-orange-700 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-8">
            <PartyPopper className="w-12 h-12 text-amber-200 animate-bounce" />
            <Sparkles className="w-10 h-10 text-orange-200 animate-pulse" />
            <PartyPopper className="w-12 h-12 text-amber-200 animate-bounce" style={{animationDelay: '0.5s'}} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Ready to Create Magic?
          </h2>
          
          <p className="text-2xl md:text-3xl mb-12 text-white/95 font-light max-w-3xl mx-auto leading-relaxed">
            Let's transform your celebration into an unforgettable experience
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-amber-700 hover:bg-gray-100 px-12 py-8 text-2xl font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110"
              >
                Book Your Event Today <ArrowRight className="ml-3 w-7 h-7" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                size="lg"
                className="bg-transparent border-3 border-white text-white hover:bg-white/10 px-12 py-8 text-2xl font-bold rounded-2xl shadow-2xl transition-all duration-300"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
