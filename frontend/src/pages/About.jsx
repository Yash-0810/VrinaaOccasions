import React from 'react';
import { aboutContent } from '@/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Award, Users } from 'lucide-react';

const About = () => {
  const valueIcons = {
    'Creativity': Target,
    'Quality': Award,
    'Reliability': Users,
    'Personalization': Heart
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a1918] mb-6">
            About Vrinaa Occasions
          </h1>
          <p className="text-xl text-[#736c64] leading-relaxed">
            Crafting extraordinary experiences, one celebration at a time
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a1918] mb-6">Our Story</h2>
              <p className="text-lg text-[#736c64] leading-relaxed mb-6">
                {aboutContent.story}
              </p>
              <p className="text-lg text-[#736c64] leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1769812343353-ae6ca1250bc2"
                alt="Elegant event decoration"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1918] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => {
              const IconComponent = valueIcons[value.title];
              return (
                <Card
                  key={index}
                  className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#61525a]/10 rounded-full mb-6">
                      <IconComponent className="w-8 h-8 text-[#61525a]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1918] mb-3">{value.title}</h3>
                    <p className="text-[#736c64] leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team/Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1918] mb-4">
              How We Work
            </h2>
            <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
              Our simple yet effective process ensures your event is perfect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We listen to your vision, understand your requirements, and discuss ideas to bring your celebration to life.'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Our team creates a customized decoration plan with mood boards, color schemes, and detailed layouts.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We handle everything on the day, ensuring flawless setup and a stunning result that exceeds expectations.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#61525a] rounded-full text-white text-2xl font-bold mb-6">
                  {process.step}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1918] mb-4">{process.title}</h3>
                <p className="text-[#736c64] leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#61525a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Events Decorated' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Event Types' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
