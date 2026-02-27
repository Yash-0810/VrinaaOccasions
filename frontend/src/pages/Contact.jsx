import React, { useState, useRef } from 'react';
import { contactInfo } from '@/mockData';
import { Phone, Mail, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_heuxk2k',
        'template_7s1eg5k',
        formRef.current,
        'ZP1l01ijVcijrBEfF'
      );
      
      toast.success("Inquiry Submitted!", {
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    } catch (error) {
      toast.error("Failed to send inquiry. Please try again or contact us directly.", {
        description: error.text || "Unknown error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent("Hello! I'd like to inquire about event decoration services.");
  const whatsappLink = `https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a1918] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-[#736c64] leading-relaxed">
            Let's discuss your celebration and create something extraordinary together
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a1918] mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#61525a]/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-[#61525a]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1a1918] mb-1">Phone</h3>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-[#736c64] hover:text-[#61525a] transition-colors duration-300"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#61525a]/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-[#61525a]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1a1918] mb-1">Email</h3>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-[#736c64] hover:text-[#61525a] transition-colors duration-300 break-all"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#61525a]/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-[#61525a]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1a1918] mb-1">Location</h3>
                        <p className="text-[#736c64]">{contactInfo.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#61525a]/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-[#61525a]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1a1918] mb-1">Business Hours</h3>
                        <p className="text-[#736c64]">{contactInfo.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#61525a]/10 p-3 rounded-lg">
                        <Instagram className="w-6 h-6 text-[#61525a]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1a1918] mb-1">Instagram</h3>
                        <a
                          href={contactInfo.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#736c64] hover:text-[#61525a] transition-colors duration-300"
                        >
                          {contactInfo.instagramHandle}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a1918] mb-8">Send Us a Message</h2>
<form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a1918] mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1a1918] mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1a1918] mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-[#1a1918] mb-2">
                    Event Type *
                  </label>
                  <Input
                    id="eventType"
                    name="eventType"
                    type="text"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="e.g., Birthday, Wedding, Anniversary"
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-[#1a1918] mb-2">
                    Event Date *
                  </label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1a1918] mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px]"
                    placeholder="Tell us about your event and decoration preferences..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#61525a] hover:bg-[#4a3f45] text-white transition-all duration-300 transform hover:scale-105"
                >
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;