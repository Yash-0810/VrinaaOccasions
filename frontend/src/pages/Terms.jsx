import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Terms = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-[#61525a] hover:text-[#4a3f45]">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1918] mb-8">
          Terms & Conditions
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-[#736c64]">
          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">1. Booking & Reservations</h2>
            <p className="leading-relaxed mb-4">
              To confirm your booking with Vrinaa Occasions, a minimum advance payment of 30% of the total estimated cost is required. The booking will only be considered confirmed upon receipt of this advance payment.
            </p>
            <p className="leading-relaxed">
              The remaining balance must be paid before or on the event date. In case of any changes to the event date, customers must inform us at least 15 days in advance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">2. Cancellation Policy</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Cancellations made 30 days or more before the event date: Full refund of advance payment minus 10% processing fee</li>
              <li>Cancellations made 15-29 days before the event date: 50% refund of advance payment</li>
              <li>Cancellations made less than 15 days before the event date: No refund</li>
              <li>In case of event postponement, the advance payment can be adjusted for a new date within 6 months</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">3. Service Delivery</h2>
            <p className="leading-relaxed mb-4">
              Vrinaa Occasions will make every effort to deliver decoration services as per the agreed design and timeline. However, we reserve the right to make minor adjustments based on venue constraints or material availability, ensuring the overall aesthetic remains consistent with the client's vision.
            </p>
            <p className="leading-relaxed">
              Our team will arrive at the venue at the agreed time for setup. Any delays caused by venue access issues or other external factors beyond our control will not be considered our responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">4. Client Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Provide accurate venue details including address, access times, and any restrictions</li>
              <li>Ensure venue is ready and accessible at the agreed setup time</li>
              <li>Obtain necessary permissions from venue management for decoration installation</li>
              <li>Inform us of any venue-specific rules or requirements in advance</li>
              <li>Provide accurate guest count and event details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">5. Damage & Liability</h2>
            <p className="leading-relaxed mb-4">
              While we take utmost care in handling all decoration materials and venue property, Vrinaa Occasions will not be held liable for any damage caused by third parties, guests, or natural circumstances during the event.
            </p>
            <p className="leading-relaxed">
              Clients will be responsible for any damage to our decoration materials caused by guests or venue staff. The cost of repair or replacement will be charged separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">6. Force Majeure</h2>
            <p className="leading-relaxed">
              Vrinaa Occasions shall not be held responsible for failure to perform services due to circumstances beyond our control, including but not limited to: natural disasters, severe weather conditions, pandemics, government restrictions, strikes, or any other force majeure events. In such cases, we will work with clients to reschedule or provide alternative solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">7. Photography & Marketing</h2>
            <p className="leading-relaxed">
              Vrinaa Occasions reserves the right to photograph our decoration work for portfolio and marketing purposes. If clients wish to keep their event private, they must inform us in writing before the event date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">8. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Advance payment: 30% of total cost at booking</li>
              <li>Final payment: Remaining 70% before or on event date</li>
              <li>Accepted payment methods: Bank transfer, UPI, cash, or cheque</li>
              <li>All prices are inclusive of GST unless otherwise stated</li>
              <li>Additional charges may apply for last-minute changes or requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">9. Customization & Changes</h2>
            <p className="leading-relaxed mb-4">
              Any changes to the decoration plan, theme, or requirements must be communicated at least 7 days before the event date. Last-minute changes may incur additional charges depending on material availability and feasibility.
            </p>
            <p className="leading-relaxed">
              We will provide design concepts and mood boards for approval. Once approved and booking is confirmed, major design changes may not be possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">10. Intellectual Property</h2>
            <p className="leading-relaxed">
              All decoration designs, concepts, and creative work created by Vrinaa Occasions remain our intellectual property. Clients may not reproduce or claim ownership of our designs for commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">11. Dispute Resolution</h2>
            <p className="leading-relaxed">
              Any disputes arising from our services will be resolved through mutual discussion and negotiation. If resolution cannot be reached, the matter will be subject to the jurisdiction of courts in Kolkata, West Bengal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">12. Contact Information</h2>
            <p className="leading-relaxed">
              For any questions or clarifications regarding these terms and conditions, please contact us at:
            </p>
            <ul className="list-none space-y-2 mt-4 leading-relaxed">
              <li><strong>Phone:</strong> +91 9073276092</li>
              <li><strong>Email:</strong> harsh576hya576@gmail.com</li>
              <li><strong>Instagram:</strong> @shaanvi__era</li>
            </ul>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-[#736c64] italic">
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-sm text-[#736c64] italic mt-2">
              By booking our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
