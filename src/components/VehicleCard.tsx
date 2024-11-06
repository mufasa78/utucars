import { Battery, Gauge, Zap } from 'lucide-react';
import { Vehicle } from '../types/vehicle';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
}

export function VehicleCard({ vehicle, onSelect }: VehicleCardProps) {
  return (
    <div 
      id={`vehicle-${vehicle.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative group">
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => onSelect(vehicle)}
            className="px-6 py-2 bg-primary text-black rounded-full font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{vehicle.name}</h3>
            <p className="text-gray-600">{vehicle.price}</p>
          </div>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm capitalize">
            {vehicle.category}
          </span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <Battery className="h-5 w-5 text-primary mr-2" />
            <span>Range: {vehicle.range}</span>
          </div>
          <div className="flex items-center">
            <Gauge className="h-5 w-5 text-primary mr-2" />
            <span>Acceleration: {vehicle.acceleration}</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-5 w-5 text-primary mr-2" />
            <span>Fast Charging: {vehicle.charging}</span>
          </div>
        </div>
      </div>
    </div>
  );
}