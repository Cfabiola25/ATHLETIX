// src/config.ts
export const APP_URL = import.meta.env.PROD 
  ? 'https://app.athletix.com' 
  : 'http://localhost';

export const LINKS = {
  app: APP_URL,
  login: `${APP_URL}/login`,
  register: `${APP_URL}/register`,
  whatsappContact: 'https://wa.me/573108895042?text=Hola,%20quiero%20información%20sobre%20Athletix%20para%20mi%20torneo',
  whatsappDemo: 'https://wa.me/573108895042?text=Hola,%20quisiera%20solicitar%20una%20demostración%20en%20vivo%20de%20Athletix%20y%20SIGET',
};

export const SITE_INFO = {
  name: 'Athletix',
  tagline: 'Gestión Inteligente de Torneos Deportivos',
  poweredBy: 'SIGET Tournament Engine',
  description: 'Athletix automatiza tablas de posiciones, cruces de llaves, sanciones disciplinarias y planillas arbitrales con la potencia de SIGET. La plataforma definitiva para torneos de fútbol y microfútbol.',
  phone: '+57 310 889 5042',
  email: 'contacto@athletix.co',
};