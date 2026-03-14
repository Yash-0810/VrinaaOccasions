import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Phone, Users, Star, Wrench, Shield, DollarSign, Heart, MessageCircle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WhatMakesUsSpecial = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <Link to="/about">
          <Button variant="ghost" className="mb-8 text-[#61525a] hover:text-[#4a3f45]">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to About
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1918] mb-12 text-center">
          What Makes Vrinaa Special
        </h1>

        <p className="text-xl text-[#736c64] mb-16 text-center max-w-2xl mx-auto leading-relaxed">
          Vrinaa isn't just about decorating spaces – it's about creating moments people remember.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

          {/* Personalized Just for You */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-md mb-6">
                <span className="text-2xl">🎨</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1918] mb-4 flex items-center">
                <Palette className="w-6 h-6 mr-2 text-[#61525a]" />
                Personalized Just for You
              </h3>

              <p className="text-[#736c64] leading-relaxed">
                Our themes are crafted to look amazing, but if you'd like to add your own twist or bring a different idea to the table, we're always open to discussing and customizing it with you.
              </p>
            </CardContent>
          </Card>

          {/* Smooth Communication */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-md mb-6">
                <span className="text-2xl">📞</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1918] mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2 text-[#61525a]" />
                Smooth and Friendly Communication
              </h3>

              <p className="text-[#736c64] leading-relaxed">
                From the moment you book with us until the setup is complete, we keep communication simple, clear, and stress-free.
              </p>
            </CardContent>
          </Card>

          {/* Surprise Planner */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-md mb-6">
                <span className="text-2xl">🎉</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1918] mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-[#61525a]" />
                Surprise Planner Consultation
              </h3>

              <p className="text-[#736c64] leading-relaxed">
                Planning a surprise can sometimes feel confusing that's completely normal. Our Surprise Planner Consultation helps you plan the moment smoothly by discussing your idea, the occasion, and decor options that suit it best.
              </p>
            </CardContent>
          </Card>

          {/* Quality of Decor */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-md mb-6">
                <span className="text-2xl">✨</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1918] mb-4 flex items-center">
                <Star className="w-6 h-6 mr-2 text-[#61525a]" />
                Quality of Decor
              </h3>

              <p className="text-[#736c64] leading-relaxed">
                We carefully select decor elements and styling pieces to create elegant and well-balanced setups with neat finishing and thoughtful details.
              </p>
            </CardContent>
          </Card>

          {/* Setup Experience */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-md mb-6">
                <span className="text-2xl">🛠️</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1918] mb-4 flex items-center">
                <Wrench className="w-6 h-6 mr-2 text-[#61525a]" />
                Setup Experience
              </h3>

              <p className="text-[#736c64] leading-relaxed">
                Every setup is planned with care and completed with proper attention to detail so your decor looks polished and ready for your special moment.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Matters */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-md mb-6">
                <span className="text-2xl">📸</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1918] mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-[#61525a]" />
                Your Privacy Matters
              </h3>

              <p className="text-[#736c64] leading-relaxed">
                We respect your comfort. Photos or videos are taken only for decor reference and only after discussing with you.
              </p>
            </CardContent>
          </Card>

          {/* Transparent Pricing */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-md mb-6">
                <span className="text-2xl">💰</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1918] mb-4 flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-[#61525a]" />
                Transparent and Honest Pricing
              </h3>

              <p className="text-[#736c64] leading-relaxed">
                No hidden surprises in pricing — just clear packages and honest communication.
              </p>
            </CardContent>
          </Card>

          {/* Special Moment */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-md mb-6">
                <span className="text-2xl">🤍</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1918] mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-[#61525a]" />
                Your Special Moment Matters To Us
              </h3>

              <p className="text-[#736c64] leading-relaxed">
                For us, it's not just decoration. It's about creating a joyful surprise and making your moment truly memorable.
              </p>
            </CardContent>
          </Card>

          {/* Immediate Call */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-md mb-6">
                <span className="text-2xl">📞</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1918] mb-4 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-[#61525a]" />
                Immediate Call to Action
              </h3>

              <p className="text-[#736c64] leading-relaxed">
                Our team stays available throughout the setup and event time. If you need any small adjustment or assistance, we're just a call away.
              </p>
            </CardContent>
          </Card>

          {/* Post Event Cleaning */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-md mb-6">
                <span className="text-2xl">🧹</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1918] mb-4 flex items-center">
                <Trash2 className="w-6 h-6 mr-2 text-[#61525a]" />
                Post-Event Cleaning Assistance
              </h3>

              <p className="text-[#736c64] leading-relaxed">
                Your celebration shouldn't end with cleanup stress. Our team can assist with post-event clearing and basic cleaning.
              </p>
            </CardContent>
          </Card>

        </div>

        <div className="text-center mt-20">
          <Link to="/contact">
            <Button size="lg" className="bg-[#61525a] hover:bg-[#4a3f45] text-white px-12 py-6 text-xl rounded-2xl shadow-xl">
              Get Started Today
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default WhatMakesUsSpecial;