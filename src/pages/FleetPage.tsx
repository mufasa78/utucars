import { useState } from 'react';
import { VehicleCard } from '../components/VehicleCard';
import { VehicleModal } from '../components/VehicleModal';
import { Vehicle } from '../types/vehicle';

const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Tesla Model Y",
    image: "https://i.postimg.cc/vHX7C3zs/Model-Y-64.jpg",
    price: "$42,000",
    range: "270 miles",
    acceleration: "0-60 mph in 3.1s",
    charging: "15-25 minutes",
    category: "sedan",
    features: ["Autopilot", "Premium Sound", "Glass Roof", "Wireless Charging" , "AWD Dual Motor", "76 cu ft Cargo Space"]
  },
  {
    id: 2,
    name: "Neta-V",
    image: "https://i.postimg.cc/HndhnDwZ/Neta3.jpg",
    price: "$31,000",
    range: "380 miles",
    acceleration: "0-50 mph in 3.9s",
    charging: "20-35 minutes",
    category: "sedan",
    features: ["ABS, EBD, HAC, ESC", "14.6-inch Central Control Screen", "Ambient Lighting", "Hatchback"]
  },
  {
    id: 3,
    name: "AVATR 11",
    image: "https://i.postimg.cc/sg0B4Sgs/AVatr-11-2.jpg",
    price: "From $51,800",
    range: "680 km",
    acceleration: "0-100 mph in 3.98s",
    charging: "240 kW (up to 200 km in 10 minutes)",
    category: "suv",
    features: ["Harmony OS", "HiCar Autonomous Drive Tech", "Radar Sensors", "Dual Electric Motors", "14-speaker system with noise cancellation (RNC) and active sound enhancement (ASE)"]
  },
  {
    id: 4,
    name: "Wuling Bingo",
    image: "https://i.postimg.cc/XYzfYqm1/Wuling-Bingo-Out.jpg",
    price: "From $12,3000",
    range: "333 km",
    acceleration: "0-100 mph in 13.5s",
    charging: "DC fast charging: 35 minutes (30-80%)",
    category: "sedan",
    features: ["Affordable Urban Electric Car", "10.25-inch Infotainment Display", "Compact Design for City Driving", "31.9 kWh Battery Option", "Modern Interior with Dual Screens", "Smartphone Connectivity", "300 L Trunk Space"]
  },
  {
    id: 5,
    name: "Wuling Convertible",
    image: "https://i.postimg.cc/mkj6FXVb/wuling-convertible.png",
    price: "From $14,000",
    range: "200 km",
    acceleration: "0-50 km/h in 8s",
    charging: "6-8 hours on standard AC charging",
    category: "sedan",
    features: ["World's Most Affordable Convertible EV", "Compact City Car", "30 kW Motor (41 hp)", "Top Speed of 100 km/h", "Roll Bars for Safety", "Open-Air Driving Experience", "Simple, Functional Interior", "Compact Dimentions for Urban Use"]
  },
  {
    id: 6,
    name: "BYD Song Plus",
    image: "https://i.postimg.cc/hjygkFfm/BYD2.jpg",
    price: "From $21,000",
    range: "605 km",
    acceleration: "0-100 km/h in 8s",
    charging: "1-2 hours with a fast charger, 8-12 hours on a standard home charger",
    category: "suv",
    features: ["15.6-inch rotatable touchscreen dsiplay", "DiLink 100 OS with voice and gesture control", "DiPilot ADAS safety systems", "Optional Heated Steering wheel and wireless charging"]
  },
  {
    id: 7,
    name: "Dayun Yuehu",
    image: "https://i.postimg.cc/VLdvtZP7/dayun-y-5.jpg",
    price: "From $21,000",
    range: "330 Km",
    acceleration: "0-60 mph in 2.6s",
    charging: "20% to 80% in under an hour",
    category: "sedan",
    features: ["Traction Control, Hill Start Assist, Slope Descent Control and Automatic Cruise Control", "High-strength steel cage, Dual airbags, and braking systems (ABS, EBD, and Brake Assist)", "Eco-friendly Urban Commuuter"]
  },
  {
    id: 8,
    name: "Dayun Single Cab",
    image: "https://i.postimg.cc/dtKqRLBp/45.jpg",
    price: "From $18,000",
    range: "250 km",
    acceleration: "0-50 km/h in 10s",
    charging: "6-7 hours on standard AC charging",
    category: "pickup",
    features: ["Single Cab Design", "Economical Electric Pickup", "45 kW Motor (60 hp)", "Top Speed of 90 km/h", "Suitable for Light Cargo", "Durable and Functional", "Compact for Urban Deliveries"]
  },
  {
    id: 9,
    name: "Dayun Double Cab",
    image: "https://i.postimg.cc/CK5ksvNv/45.jpg",
    price: "From $22,000",
    range: "240 km",
    acceleration: "0-50 km/h in 10s",
    charging: "6-7 hours on standard AC charging",
    category: "pickup",
    features: ["Double Cab Design", "Family and Cargo Friendly", "45 kW Motor (60 hp)", "Top Speed of 90 km/h", "Enhanced Passenger Capacity", "Urban and Light Off-Road Capabilities", "Durable and Spacious Interior"]
  },
  {
    id: 10,
    name: "Electric Golf Cart",
    image: "https://i.postimg.cc/rmVYmYYj/Golf-Cart3.jpg",
    price: "From $8,000",
    range: "80 km",
    acceleration: "0-30 km/h in 5s",
    charging: "4-6 hours on standard AC charging",
    category: "golf cart",
    features: ["Quiet Electric Motor", "Compact Design for Easy Navigation", "20 kW Motor (27 hp)", "Top Speed of 40 km/h", "Ideal for Golf Courses or Resorts", "Low Maintenance", "Comfortable Seating for 2-4 Passengers"]
  },
  {
    id: 11,
    name: "Electric TukTuk",
    image: "https://i.postimg.cc/XNptCq80/TuKTuK1.jpg",
    price: "From $5,500",
    range: "120 km",
    acceleration: "0-30 km/h in 6 seconds",
    charging: "5-7 hours on standard AC charging",
    category: "tuktuk",
    features: ["Eco-Friendly Transport", "3-Wheeler Compact Design", "15 kW Motor (20 hp)", "Top Speed of 50 km/h", "Affordable and Convenient for Short Trips", "Spacious Seating for 3 Passengers", "Efficient for Urban Mobility"]
  },
  {
    id: 12,
    name: "Dayun Electric Light Truck",
    image: "https://i.postimg.cc/ryG6kg1Z/l3.jpg",
    price: "From $30,000",
    range: "300 km",
    acceleration: "0-50 km/h in 12 seconds",
    charging: "8-10 hours on standard AC charging",
    category: "truck",
    features: ["Efficient for Urban Deliveries", "60 kW Motor (80 hp)", "Top Speed of 90 km/h", "Robust Build for Cargo", "Spacious Load Area", "Ideal for Short to Medium Hauls", "Low Maintenance Costs"]
  },
  {
    id: 13,
    name: "Dayun Electric Medium Truck",
    image: "https://i.postimg.cc/Gm26vCZ6/lorry.jpg",
    price: "From $45,000",
    range: "350 km",
    acceleration: "0-50 km/h in 14 seconds",
    charging: "10-12 hours on standard AC charging",
    category: "truck",
    features: ["Ideal for Urban and Highway Routes", "85 kW Motor (115 hp)", "Top Speed of 80 km/h", "Large Cargo Capacity", "Suitable for Heavier Loads", "Reinforced Suspension", "Energy-Efficient Operation"]
}
];

type Category = 'all' | 'sedan' | 'pickup' | 'truck' | 'suv'| 'tuktuk'| 'golf cart';

export default function FleetPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const categories = [
    { id: 'all', name: 'All Vehicles' },
    { id: 'sedan', name: 'Sedans' },
    { id: 'pickup', name: 'Pick-ups' },
    { id: 'truck', name: 'Trucks' },
    { id: 'suv', name: 'SUV' },
    { id: 'tuktuk', name: 'Tuk-Tuk' },
    { id: 'golf cart', name: 'Golf Cart' },
  ];

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Electric Vehicle Fleet</h1>
          <p className="text-xl text-gray-300">Discover our premium selection of electric vehicles</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as Category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary text-black shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelect={setSelectedVehicle}
            />
          ))}
        </div>
      </div>

      {/* Vehicle Details Modal */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
}