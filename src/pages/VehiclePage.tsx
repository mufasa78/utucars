import { useParams, useNavigate } from 'react-router-dom';
import { Battery, Gauge, Zap, ChevronLeft, ShieldCheck, Wrench, Banknote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const vehicles = {
  'tesla-model-y': {
    name: "Tesla Model Y",
    description: "The future of SUVs is here. Experience unmatched performance, safety, and versatility.",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80",
    price: "$42,000",
    range: "330 miles",
    acceleration: "0-60 mph in 3.5s",
    charging: "15-25 minutes",
    features: [
      "Autopilot",
      "All-Wheel Drive",
      "Glass Roof",
      "15\" Touchscreen",
      "Wireless Charging",
      "Premium Audio System",
      "Smart Air Suspension",
      "Enhanced Autopilot Available"
    ],
    specs: {
      power: "384 hp",
      battery: "82 kWh",
      topSpeed: "155 mph",
      seating: "5-7 seats",
      cargo: "76 cu ft",
      weight: "4,416 lbs"
    }
  },
  'avatr 11': {
    name: "AVATR 11",
    description: "Where luxury meets sustainability. The perfect blend of BMW performance and electric efficiency.",
    image: "https://i.postimg.cc/fyN6d0Nv/avatr2.jpg",
    price: "$51,800",
    range: "680 km",
    acceleration: "0-100 km/h in 3.98s",
    charging: "240 kW",
    features: [
      "Harmony OS",
      "14-speaker system with noise cancellation (RNC) and active sound enhancemen (ASE)",
      "HiCar Autonomous Drive Tech",
      "Sport Seats",
      "Radar Sensors",
      "Dual Electric Motors",
      "21 or 22-inch wheels with Brembo brake calipers",
      "Wireless Phone Integration"
    ],
    specs: {
      power: "578 hp",
      battery: "116.79 kWh",
      topSpeed: "200 km/h",
      seating: "5 seats",
      cargo: "13.91 cu ft",
      weight: "2,380 kg"
    }
  },
  'neta-v': {
    name: "Neta-V 2022",
    description: "Innovation redefined with cutting-edge technology and sustainable materials.",
    image: "https://i.postimg.cc/9fwSNBXp/neta4.webp",
    price: "$31,000",
    range: "303 miles",
    acceleration: "0-60 mph in 5.2s",
    charging: "18-25 minutes",
    features: [
      "Vehicle-to-Load (V2L)",
      "Dual Motor AWD",
      "20\" Alloy Wheels",
      "12.3\" Digital Cluster",
      "Highway Driving Assist",
      "Remote Smart Parking",
      "Augmented Reality HUD",
    ],
    specs: {
      power: "70-95 kW/PS",
      battery: "38.54 kWh",
      topSpeed: "101 Km/h",
      seating: "5 seats",
      cargo: "27.2 cu ft",
      weight: "4,464 lbs"
    }
  }
};

export default function VehiclePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const vehicle = vehicles[slug as keyof typeof vehicles];

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Vehicle Not Found</h2>
          <button 
            onClick={() => navigate('/fleet')}
            className="btn-primary"
          >
            Return to Fleet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <img 
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button
          onClick={() => navigate('/fleet')}
          className="absolute top-4 left-4 flex items-center text-white hover:text-primary transition-colors duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
          <span>Back to Fleet</span>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{vehicle.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{vehicle.description}</p>
            <div className="text-2xl font-bold text-primary mb-8">{vehicle.price}</div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-4 rounded-lg">
                <Battery className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">{t('vehicle.range')}</h3>
                <p>{vehicle.range}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Gauge className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">{t('vehicle.acceleration')}</h3>
                <p>{vehicle.acceleration}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">{t('vehicle.charging')}</h3>
                <p>{vehicle.charging}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-12">
              <button className="flex-1 btn-primary">
                Schedule Test Drive
              </button>
              <button className="flex-1 btn-secondary">
                Request Quote
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">5-Year Warranty</h4>
              </div>
              <div className="text-center">
                <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Free Maintenance</h4>
              </div>
              <div className="text-center">
                <Banknote className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Financing Available</h4>
              </div>
            </div>
          </div>

          <div>
            {/* Features */}
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-6">{t('vehicle.features')}</h2>
              <div className="grid grid-cols-2 gap-4">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">{t('vehicle.specifications')}</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Power Output</h3>
                  <p>{vehicle.specs.power}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Battery Capacity</h3>
                  <p>{vehicle.specs.battery}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Top Speed</h3>
                  <p>{vehicle.specs.topSpeed}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Seating</h3>
                  <p>{vehicle.specs.seating}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cargo Space</h3>
                  <p>{vehicle.specs.cargo}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Curb Weight</h3>
                  <p>{vehicle.specs.weight}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}