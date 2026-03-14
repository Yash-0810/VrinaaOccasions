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
            <p className="leading-relaxed text-lg mb-8 text-[#1a1918]">
              At Vrinaa, we specialize in creating beautiful décor setups and memorable experiences for your special occasions. To ensure smooth planning and execution for every celebration, we kindly request all clients to review and follow the guidelines outlined below before confirming a booking.
            </p>
            <p className="leading-relaxed text-lg mb-8 font-semibold text-[#1a1918]">
              By confirming a booking with Vrinaa, you acknowledge and agree to the following terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">1. Booking Confirmation</h2>
            <p className="leading-relaxed mb-4">
              Your event date will be considered reserved only after the booking is confirmed.
            </p>
            <p className="leading-relaxed">
              As we accommodate a limited number of décor setups per day, we recommend confirming your booking in advance to secure your preferred date and design.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">2. Advance Payment</h2>
            <p className="leading-relaxed mb-4">
              To confirm and secure a booking, 50% of the total service amount must be paid in advance at the time of confirmation.
            </p>
            <p className="leading-relaxed mb-4">
              The remaining 50% balance must be paid before or on the day of the setup, as mutually agreed during the booking process.
            </p>
            <p className="leading-relaxed">
              This advance payment allows our team to begin preparations, including arranging décor materials, props, logistics, and design elements necessary for your event.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">3. Rescheduling Policy</h2>
            <p className="leading-relaxed mb-4">
              We understand that plans may occasionally change.
            </p>
            <p className="leading-relaxed mb-4">
              Clients may reschedule their event once, provided that Vrinaa is informed at least 48 hours prior to the scheduled setup time.
            </p>
            <p className="leading-relaxed">
              Please note that:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Rescheduling is subject to date availability.</li>
              <li>Requests made less than 48 hours before the setup may not be accommodated.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">4. Cancellation & Refund Policy</h2>
            <p className="leading-relaxed mb-6">
              In case of cancellation, the following refund policy will apply:
            </p>
            <ul className="list-disc list-inside space-y-4 leading-relaxed text-lg">
              <li><strong>Cancellation 14 days or more before the event date</strong><br className="sm:hidden" />
              → 50% refund of the booking amount.</li>
              <li><strong>Cancellation within 14 days of the event date</strong><br className="sm:hidden" />
              → No refund will be applicable.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              This policy is necessary because décor materials, props, and design elements are typically arranged and sourced in advance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">5. Reusable Décor Items</h2>
            <p className="leading-relaxed mb-4">
              Certain décor elements used in the setup are part of Vrinaa&apos;s reusable décor collection. These items are provided on a rental basis and will be collected by our team after the event.
            </p>
            <p className="leading-relaxed mb-4">
              Reusable items may include, but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Artificial flower arrangements</li>
              <li>Backdrop stands and frames</li>
              <li>Decorative props and display pieces</li>
              <li>Lighting elements or neon signs</li>
            </ul>
            <p className="leading-relaxed">
              Our team may visit the venue the following day (or as mutually agreed) to collect these items.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">6. Damage or Loss of Décor Items</h2>
            <p className="leading-relaxed mb-4">
              Clients are responsible for ensuring that rented décor items are handled with care during the event.
            </p>
            <p className="leading-relaxed mb-4">
              If any items such as props, lights, neon signs, stands, décor pieces, or other rental materials are:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Damaged</li>
              <li>Broken</li>
              <li>Lost or misplaced</li>
            </ul>
            <p className="leading-relaxed">
              the repair or replacement cost may be charged to the client.
            </p>
            <p className="leading-relaxed">
              Vrinaa will always aim to address such situations in a fair and reasonable manner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">7. Photography & Media Usage</h2>
            <p className="leading-relaxed mb-4">
              Vrinaa respects the privacy of all clients and their guests.
            </p>
            <p className="leading-relaxed mb-4">
              Our team may photograph or record only the décor setup for portfolio or promotional purposes.
            </p>
            <p className="leading-relaxed mb-4">
              Such photos or videos will be taken only after prior discussion and approval from the client.
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Clients, guests, and personal moments will not be photographed or recorded unless the client explicitly requests it.</li>
              <li>Any media featuring people will be used only with the client&apos;s prior consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1a1918] mb-4">8. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By confirming a booking with Vrinaa, the client acknowledges that they have read, understood, and agreed to the above Terms & Conditions.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12 text-center">
            <p className="text-2xl md:text-3xl font-light text-[#1a1918] mb-6 tracking-wide leading-tight">
              ✨ Thank you for choosing Vrinaa to be part of your celebration.
            </p>
            <p className="text-xl font-light text-[#1a1918] mb-8 leading-relaxed">
              We look forward to creating a beautiful and memorable experience for your special occasion.
            </p>
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