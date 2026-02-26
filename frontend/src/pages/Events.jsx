import React from 'react';
import { Link } from 'react-router-dom';
import { eventCategories } from '@/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Events = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a1918] mb-6">
            Event Decorations
          </h1>
          <p className="text-xl text-[#736c64] leading-relaxed">
            Discover our comprehensive range of decoration services for every celebration
          </p>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((event) => (
              <Card
                key={event.id}
                className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-[#736c64] mb-4 leading-relaxed">{event.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1a1918] mb-3">Our Services Include:</h4>
                    <ul className="space-y-2">
                      {event.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <span className="text-[#61525a] mr-2">✓</span>
                          <span className="text-[#736c64]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact">
                    <Button className="w-full bg-[#61525a] hover:bg-[#4a3f45] text-white transition-all duration-300">
                      Book This Event <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Events CTA */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1918] mb-6">
            Have a Special Event in Mind?
          </h2>
          <p className="text-xl text-[#736c64] mb-8 leading-relaxed">
            We specialize in creating custom decoration solutions for any occasion. From intimate gatherings to grand celebrations, we bring your vision to life.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-[#61525a] hover:bg-[#4a3f45] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Discuss Your Event
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;
