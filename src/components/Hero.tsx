import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-16 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/fleet')}
                className="bg-[#FFA500] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#FF8C00] transition-colors"
              >
                {t('hero.exploreButton')}
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="border-2 border-[#FFA500] text-[#FFA500] px-8 py-3 rounded-full font-semibold hover:bg-[#FFA500] hover:text-black transition-colors"
              >
                {t('hero.servicesButton')}
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.postimg.cc/tTT1j7f2/image-1.jpg"
              alt="Electric Vehicle"
              className="rounded-lg shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}