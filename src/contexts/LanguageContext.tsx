import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.fleet": "Vehicle Fleet",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.contact": "Contact",

    // Languages
    "language.english": "English",
    "language.french": "French",
    "language.swahili": "Swahili",

    // Hero
    "hero.title": "Your Trusted EV Importer in Africa",
    "hero.description": "Leading Africa's transition to sustainable mobility with premium electric vehicles and comprehensive support services.",
    "hero.exploreButton": "Explore EVs",
    "hero.servicesButton": "Our Services",

    // Footer
    "footer.description": "Leading Africa's transition to sustainable mobility with premium electric vehicles and comprehensive support services.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved",
    "footer.office.nairobi": "Nairobi Office",
    "footer.office.naivasha": "Naivasha Office",

    // Vehicle Details
    "vehicle.learnMore": "Learn More",
    "vehicle.features": "Key Features",
    "vehicle.specifications": "Specifications",
    "vehicle.price": "Starting from",
    "vehicle.range": "Range",
    "vehicle.acceleration": "Acceleration",
    "vehicle.charging": "Charging Time",

    // Contact Form
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours"
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.fleet": "Flotte de Véhicules",
    "nav.services": "Services",
    "nav.about": "À Propos",
    "nav.contact": "Contact",

    // Languages
    "language.english": "Anglais",
    "language.french": "Français",
    "language.swahili": "Swahili",

    // Hero
    "hero.title": "Votre Importateur de VE de Confiance en Afrique",
    "hero.description": "Mener la transition de l'Afrique vers une mobilité durable avec des véhicules électriques haut de gamme et des services de support complets.",
    "hero.exploreButton": "Explorer les VE",
    "hero.servicesButton": "Nos Services",

    // Footer
    "footer.description": "Mener la transition de l'Afrique vers une mobilité durable avec des véhicules électriques haut de gamme et des services de support complets.",
    "footer.quickLinks": "Liens Rapides",
    "footer.contact": "Contact",
    "footer.followUs": "Suivez-nous",
    "footer.rights": "Tous droits réservés",
    "footer.office.nairobi": "Bureau de Nairobi",
    "footer.office.naivasha": "Bureau de Naivasha",

    // Vehicle Details
    "vehicle.learnMore": "En Savoir Plus",
    "vehicle.features": "Caractéristiques Principales",
    "vehicle.specifications": "Spécifications",
    "vehicle.price": "À partir de",
    "vehicle.range": "Autonomie",
    "vehicle.acceleration": "Accélération",
    "vehicle.charging": "Temps de Charge",

    // Contact Form
    "contact.form.name": "Nom Complet",
    "contact.form.email": "Adresse Email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le Message",
    "contact.info.title": "Informations de Contact",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Téléphone",
    "contact.info.email": "Email",
    "contact.info.hours": "Heures d'Ouverture"
  },
  sw: {
    // Navigation
    "nav.home": "Nyumbani",
    "nav.fleet": "Magari Yetu",
    "nav.services": "Huduma",
    "nav.about": "Kuhusu Sisi",
    "nav.contact": "Wasiliana",

    // Languages
    "language.english": "Kiingereza",
    "language.french": "Kifaransa",
    "language.swahili": "Kiswahili",

    // Hero
    "hero.title": "Mletaji Wako wa Kuaminika wa Magari ya Umeme Afrika",
    "hero.description": "Kuongoza mpito wa Afrika kwenye usafiri endelevu na magari ya umeme ya kipekee na huduma kamili za usaidizi.",
    "hero.exploreButton": "Chunguza Magari",
    "hero.servicesButton": "Huduma Zetu",

    // Footer
    "footer.description": "Kuongoza mpito wa Afrika kwenye usafiri endelevu na magari ya umeme ya kipekee na huduma kamili za usaidizi.",
    "footer.quickLinks": "Viungo vya Haraka",
    "footer.contact": "Mawasiliano",
    "footer.followUs": "Tufuate",
    "footer.rights": "Haki zote zimehifadhiwa",
    "footer.office.nairobi": "Ofisi ya Nairobi",
    "footer.office.naivasha": "Ofisi ya Naivasha",

    // Vehicle Details
    "vehicle.learnMore": "Jifunze Zaidi",
    "vehicle.features": "Vipengele Muhimu",
    "vehicle.specifications": "Maelezo ya Kiufundi",
    "vehicle.price": "Kuanzia",
    "vehicle.range": "Masafa",
    "vehicle.acceleration": "Mwendo",
    "vehicle.charging": "Muda wa Kuchaji",

    // Contact Form
    "contact.form.name": "Jina Kamili",
    "contact.form.email": "Barua Pepe",
    "contact.form.subject": "Somo",
    "contact.form.message": "Ujumbe",
    "contact.form.submit": "Tuma Ujumbe",
    "contact.info.title": "Maelezo ya Mawasiliano",
    "contact.info.address": "Anwani",
    "contact.info.phone": "Simu",
    "contact.info.email": "Barua Pepe",
    "contact.info.hours": "Saa za Kazi"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setLanguage: () => {},
  t: () => '',
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage as keyof typeof translations]?.[key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);