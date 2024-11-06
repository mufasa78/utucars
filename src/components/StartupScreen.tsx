import { useState } from'react';
import { X, Car } from 'lucide-react';

interface Country {
  code: string;
  name: string;
  flag: string;
}

const countries: Country[] = [
  { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: 'RW', name: 'Rwanda', flag: '🇷🇼' },
  { code: 'BI', name: 'Burundi', flag: '🇧🇮' },
  { code: 'BW', name: 'Botswana', flag: '🇧🇼' },
  { code: 'UG', name: 'Uganda', flag: '🇺🇬' },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'sw', name: 'Kiswahili' },
];

interface StartupScreenProps {
  onClose: () => void;
}

export function StartupScreen({ onClose }: StartupScreenProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const handleSubmit = () => {
    if (selectedCountry) {
      localStorage.setItem('country', selectedCountry);
      localStorage.setItem('language', selectedLanguage);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-8">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              <Car className="h-16 w-16 text-primary relative z-10" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">UTU Africa</h1>
          <p className="text-gray-600">Your Trusted EV Partner</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Your Country
          </label>
          <div className="grid grid-cols-2 gap-3">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => setSelectedCountry(country.code)}
                className={`flex items-center p-3 border rounded-lg transition-all duration-200 ${
                  selectedCountry === country.code
                    ? 'border-primary bg-primary/10 shadow-md'
                    : 'border-gray-200 hover:border-primary hover:shadow-sm'
                }`}
              >
                <span className="text-2xl mr-2">{country.flag}</span>
                <span className="font-medium">{country.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Language
          </label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:ring focus:ring-primary/20 transition-all duration-200"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!selectedCountry}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
            selectedCountry
              ? 'bg-primary text-black hover:bg-primary/90 shadow-lg hover:shadow-xl'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue to UTU Africa
        </button>
      </div>
    </div>
  );
}