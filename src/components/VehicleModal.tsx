import { Battery, Gauge, Zap, X, ChevronRight } from 'lucide-react';
import { Vehicle } from '../types/vehicle';

interface VehicleModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

export function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={vehicle.image} 
            alt={vehicle.name}
            className="w-full h-72 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{vehicle.name}</h2>
              <p className="text-xl text-primary font-semibold">{vehicle.price}</p>
            </div>
            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full capitalize">
              {vehicle.category}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <Battery className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-semibold mb-1">Range</h3>
              <p>{vehicle.range}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <Gauge className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-semibold mb-1">Acceleration</h3>
              <p>{vehicle.acceleration}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <Zap className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-semibold mb-1">Fast Charging</h3>
              <p>{vehicle.charging}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="grid md:grid-cols-2 gap-3">
            {(vehicle.features as string[]).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="flex-1 btn-primary">
              Request Information
            </button>
            <button className="flex-1 btn-secondary">
              Schedule Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}