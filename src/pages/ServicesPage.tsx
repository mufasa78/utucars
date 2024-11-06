import { Car, Battery, BanknoteIcon, Wrench, Shield, HeartHandshake } from 'lucide-react';
import { FinanceCalculator } from '../components/FinanceCalculator';

const services = [
  {
    icon: <Car className="h-12 w-12 text-primary" />,
    title: "EV Importation",
    description: "We handle the entire importation process, from vehicle selection to delivery at your doorstep. Our expertise ensures a smooth transition to electric mobility.",
    features: [
      "Personalized vehicle selection",
      "Complete import documentation",
      "Customs clearance handling",
      "Door-to-door delivery",
    ]
  },
  {
    icon: <Battery className="h-12 w-12 text-primary" />,
    title: "Charging Solutions",
    description: "Access our growing network of charging stations across Africa. We provide both home and public charging solutions to keep you moving.",
    features: [
      "Home charging installation",
      "Public charging network access",
      "24/7 charging support",
      "Smart charging management",
    ]
  },
  {
    icon: <BanknoteIcon className="h-12 w-12 text-primary" />,
    title: "Financing Options",
    description: "Make your EV dreams a reality with our flexible financing solutions. We work with trusted partners to offer competitive rates and terms.",
    features: [
      "Competitive interest rates",
      "Flexible payment terms",
      "Quick approval process",
      "Trade-in options",
    ]
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary" />,
    title: "Maintenance & Support",
    description: "Keep your EV in perfect condition with our comprehensive maintenance and support services.",
    features: [
      "Regular maintenance checks",
      "Software updates",
      "Battery health monitoring",
      "24/7 roadside assistance",
    ]
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Warranty Coverage",
    description: "Drive with confidence knowing your EV is protected by our comprehensive warranty coverage.",
    features: [
      "Extended warranty options",
      "Battery warranty",
      "Parts coverage",
      "Service guarantees",
    ]
  },
  {
    icon: <HeartHandshake className="h-12 w-12 text-primary" />,
    title: "Customer Care",
    description: "Experience exceptional customer service with our dedicated support team ready to assist you.",
    features: [
      "Dedicated account manager",
      "Training and orientation",
      "Online support portal",
      "Regular follow-ups",
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300">Comprehensive solutions for your electric vehicle journey</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              {service.title === "Financing Options" && (
                <div className="mt-6">
                  <FinanceCalculator />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}