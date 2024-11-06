import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">We're here to answer any questions about our EV solutions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <MapPin className="h-8 w-8 text-[#FFA500] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-center text-gray-600">Nairobi & Naivasha Locations</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Phone className="h-8 w-8 text-[#FFA500] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-center text-gray-600">+254 790 775 463</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Mail className="h-8 w-8 text-[#FFA500] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-center text-gray-600">sales@utucars.africa</p>
          </div>
        </div>
      </div>
    </section>
  );
}