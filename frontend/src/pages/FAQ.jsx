import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      q: "What exactly does Vrinaa do?",
      a: "Vrinaa plans and sets up beautiful surprise decorations and event setups so you can enjoy the moment while we handle the magic behind the scenes."
    },
    {
      q: "Can I customize the theme or colors?",
      a: "Absolutely! Every setup can be customized based on your theme, colors, and vibe. We love creating setups that feel personal to your celebration."
    },
    {
      q: "When should I book my setup?",
      a: "We recommend booking a few days in advance so we can plan everything perfectly. But if we’re available, we’ll happily try to help with last-minute surprises too."
    },
    {
      q: "Do you set up decorations at home or only venues?",
      a: "Both! Whether it’s your home, hotel room, café, or event space, we’ll come and set everything up for you."
    },
    {
      q: "Do you also clean the decorations after the event?",
      a: "Yes! For certain packages we take care of the post-event cleanup as well so you can just relax and enjoy the celebration."
    },
    {
      q: "Will Vrinaa take photos or videos during the event?",
      a: "Only the decoration setup may be photographed for our portfolio — and that too after discussing it with you first. Your guests and personal moments are never recorded without permission."
    },
    {
      q: "Can you help plan a surprise?",
      a: "Of course! We even offer surprise planner consultation to help you plan the perfect moment without the other person finding out."
    },
    {
      q: "What if I need help during the event?",
      a: "No worries — if you need assistance with anything related to the setup during your event, we’re just a call away and ready to help."
    },
    {
      q: "How can I book Vrinaa?",
      a: "Just message us or contact us through the website, share your event details, and we’ll guide you through the next steps."
    },
    {
      q: "Do you judge people who cry during surprises?",
      a: "Never. In fact… that’s usually our favourite moment."
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-[#f8f6f4]">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <Link to="/">
          <Button
            variant="ghost"
            className="mb-10 rounded-full px-5 hover:bg-[#f0ece8] hover:text-[#1a1918] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1918]">
            Frequently Asked Questions
          </h1>
          <p className="text-[#736c64] mt-4 max-w-2xl mx-auto leading-relaxed">
            Answers to the most common questions about our event setups, bookings, and how we make your special moments unforgettable.
          </p>
        </div>

        <div className="grid gap-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white border border-[#e8e3de] rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#1a1918] flex items-start gap-3">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#9d866a] group-hover:bg-[#7f6951] transition-colors duration-300" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-[#736c64] mt-3 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;