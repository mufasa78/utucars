import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const vehicles = [
  {
    id: 1,
    name: "AVATR 11",
    description: "The future of SUVs",
    image: "https://i.postimg.cc/x8yJv4c4/avatar-11-3.jpg",
    slug: "avatr-11"
  },
  {
    id: 2,
    name: "Wuling Convertible",
    description: "Luxury meets sustainability",
    image: "https://i.postimg.cc/BQNd86wx/2023-Wuling-MINI-EV-Cabrio-China-Exterior-007-front-three-quarter-three-colors.jpg",
    slug: "wulung-convertible"
  },
  {
    id: 3,
    name: "Neta-V 2022",
    description: "Innovation redefined",
    image: "https://i.postimg.cc/HxQNTsy8/Neta1.jpg",
    slug: "neta-v-2022"
  }
];

export function VehicleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  };

  const handleLearnMore = (slug: string) => {
    navigate(`/fleet/`);

    setTimeout(() => {
      const element = document.getElementById(`vehicle-${slug}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="relative h-[600px] overflow-hidden bg-black">
      {vehicles.map((vehicle, index) => (
        <div
          key={vehicle.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-2">{vehicle.name}</h2>
              <p className="text-xl mb-4">{vehicle.description}</p>
              <button 
                onClick={() => handleLearnMore(vehicle.slug)}
                className="btn-primary transform hover:scale-105 transition-transform duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {vehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}