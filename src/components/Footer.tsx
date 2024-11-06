import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-[#FFA500]" />
              <span className="ml-2 text-xl font-bold">UTU Africa</span>
            </div>
            <p className="text-gray-400">{t('footer.description')}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#FFA500] transition-colors duration-300">{t('nav.home')}</Link></li>
              <li><Link to="/fleet" className="text-gray-400 hover:text-[#FFA500] transition-colors duration-300">{t('nav.fleet')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#FFA500] transition-colors duration-300">{t('nav.services')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#FFA500] transition-colors duration-300">{t('nav.about')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.office.nairobi')}</li>
              <li>{t('footer.office.naivasha')}</li>
              <li>sales@utucars.africa</li>
              <li>+254 790 775 463</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com/UtuCarsAfrica" className="text-gray-400 hover:text-[#FFA500] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/UtuCarsAfrica" className="text-gray-400 hover:text-[#FFA500] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/UtuCarsAfrica" className="text-gray-400 hover:text-[#FFA500] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/utu-cars-africa" className="text-gray-400 hover:text-[#FFA500] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} UTU Africa. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}