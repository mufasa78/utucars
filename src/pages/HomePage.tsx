import { Hero } from '../components/Hero';
import { VehicleCarousel } from '../components/VehicleCarousel';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <VehicleCarousel />
      <Services />
      <Contact />
    </>
  );
}