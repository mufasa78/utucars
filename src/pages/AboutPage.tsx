import { Target, Users, Globe, Leaf } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Mission",
    description: "To accelerate Africa's transition to sustainable mobility by providing accessible and reliable electric vehicle solutions."
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Vision",
    description: "To be Africa's leading provider of electric mobility solutions, driving the continent towards a cleaner, more sustainable future."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "People First",
    description: "We prioritize our customers and employees, fostering a culture of innovation, integrity, and excellence."
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "Sustainability",
    description: "We're committed to reducing carbon emissions and promoting environmental sustainability across Africa."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About UTU Africa</h1>
          <p className="text-xl text-gray-300">Leading the electric vehicle revolution in Africa</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              UTU Africa was founded with a vision to revolutionize transportation in Africa through sustainable electric mobility solutions. We recognized the growing need for clean transportation options and the potential for electric vehicles to transform the continent's mobility landscape.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be at the forefront of Africa's e-mobility revolution, providing premium electric vehicles and comprehensive support services to make sustainable transportation accessible to all.
            </p>
          </div>
          <div>
            <img
              src="https://i.postimg.cc/0QGrbG9f/3d-electric-car-with-charged-battery.jpg"
              alt="UTU Africa Charged Up Car"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">EVs Imported</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Charging Stations</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">Tons of CO₂ Saved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}