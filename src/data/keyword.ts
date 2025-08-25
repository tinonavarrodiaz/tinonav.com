//@ts-nocheck

const seoKeywords = {
  // Palabras clave principales (alta competencia, alto volumen)
  primarias: [
    "desarrollo web",
    "desarrollador web",
    "páginas web",
    "aplicaciones web",
    "diseño web",
    "programación web"
  ],

  // Palabras clave secundarias (competencia media)
  secundarias: [
    "desarrollo de software",
    "sitios web responsivos",
    "desarrollo frontend",
    "desarrollo backend",
    "programador web",
    "agencia desarrollo web",
    "desarrollo fullstack",
    "creación sitios web",
    "diseño UX/UI",
    "optimización web"
  ],

  // Long-tail keywords (menor competencia, más específicas)
  longTail: [
    "desarrollo de páginas web profesionales",
    "creación de aplicaciones web personalizadas",
    "desarrollador web freelance",
    "empresa desarrollo web",
    "programación de sitios web modernos",
    "desarrollo web responsive",
    "aplicaciones web a medida",
    "desarrollo web ecommerce",
    "mantenimiento sitios web",
    "migración de sitios web"
  ],

  // Tecnologías específicas
  tecnologias: [
    "desarrollo React",
    "programación JavaScript",
    "desarrollo PHP",
    "WordPress developer",
    "desarrollo Node.js",
    "Angular developer",
    "Vue.js development",
    "desarrollo Laravel",
    "programación Python",
    "desarrollo MongoDB",
    "API REST development",
    "desarrollo MySQL"
  ],

  // Servicios específicos
  servicios: [
    "diseño web responsive",
    "desarrollo ecommerce",
    "aplicaciones móviles web",
    "optimización SEO",
    "hosting y dominio",
    "mantenimiento web",
    "seguridad web",
    "performance web",
    "integración API",
    "desarrollo CMS"
  ],

  // Palabras clave locales (personalizar según ubicación)
  locales: [
    "desarrollo web México",
    "programador web CDMX",
    "diseño web Guadalajara",
    "desarrollador web Monterrey",
    "agencia web México",
    "freelancer web México"
  ],

  // Palabras clave de nicho específico
  nicho: [
    "desarrollo web para startups",
    "sitios web corporativos",
    "desarrollo web médico",
    "páginas web restaurantes",
    "tiendas online",
    "portales educativos",
    "desarrollo web inmobiliario",
    "sitios web abogados"
  ],

  // Meta keywords para diferentes páginas
  metaKeywords: {
    homepage: "desarrollo web, páginas web, aplicaciones web, diseño web profesional",
    servicios: "servicios desarrollo web, programación web, diseño responsive, desarrollo frontend backend",
    portfolio: "proyectos desarrollo web, portfolio desarrollador, casos éxito desarrollo web",
    contacto: "contactar desarrollador web, presupuesto desarrollo web, consultoría web"
  }
};

// Función para obtener keywords por categoría
function getKeywordsByCategory(category) {
  return seoKeywords[category] || [];
}

// Función para obtener todas las keywords como array
export function getAllKeywords() {
  const allKeywords = [];
  Object.keys(seoKeywords).forEach(category => {
    if (Array.isArray(seoKeywords[category])) {
      allKeywords.push(...seoKeywords[category]);
    }
  });
  return allKeywords;
}

// Función para generar meta keywords string
function generateMetaKeywords(category = 'homepage') {
  if (seoKeywords.metaKeywords[category]) {
    return seoKeywords.metaKeywords[category];
  }
  return seoKeywords.primarias.join(', ');
}

// Exportar para uso en módulos
// export { seoKeywords, getKeywordsByCategory, getAllKeywords, generateMetaKeywords };
