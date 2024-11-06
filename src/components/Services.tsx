import { Car, Battery, BanknoteIcon } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Car className="h-8 w-8 text-[#FFA500]" />,
      title: "EV Importation",
      description: "Premium electric vehicles imported with guaranteed quality and reliability."
    },
    {
      icon: <Battery className="h-8 w-8 text-[#FFA500]" />,
      title: "Charging Solutions",
      description: "Access to an extensive network of charging stations across Africa."
    },
    {
      icon: <BanknoteIcon className="h-8 w-8 text-[#FFA500]" />,
      title: "Financing Options",
      description: "Flexible financing solutions to make your EV dreams a reality."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}