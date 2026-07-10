import hairImg from '../assets/images/pelo coloracion.png';
import nailsImg from '../assets/images/uñas.png';
import barberImg from '../assets/images/barba.png';

export interface WhyChooseCard {
  id: string;
  categoryTag: string;
  title: string;
  description: string;
  image: string;
  categoryFilter: string;
  buttonText: string;
}

export interface WhyChooseContent {
  sectionSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  cards: WhyChooseCard[];
}

export const WHY_CHOOSE_CONTENT: WhyChooseContent = {
  sectionSubtitle: "Elegancia & Excelencia",
  sectionTitle: "¿Por qué elegir NYC Salón Beauty Supply?",
  sectionDescription: "Diseñamos servicios personalizados utilizando marcas de calibre profesional y formulaciones orgánicas para un resultado sublime y respetuoso.",
  cards: [
    {
      id: "color-style",
      categoryTag: "Color & Estilo",
      title: "Especialistas en Color",
      description: "Balayage, babylights, platinados y correcciones de color. Nuestro enfoque es lograr el tono soñado manteniendo la estructura de tu cabello impecablemente saludable.",
      image: hairImg,
      categoryFilter: "cabello",
      buttonText: "Ver Colorimetría"
    },
    {
      id: "nails-art",
      categoryTag: "Uñas & Nail Art",
      title: "Uñas Acrílicas & Gel",
      description: "Uñas acrílicas esculpidas, semipermanente, esmaltado en gel y exclusivos diseños a mano alzada. Tu manicura se convertirá en un accesorio de moda de larga duración.",
      image: nailsImg,
      categoryFilter: "uñas",
      buttonText: "Ver Uñas & Gel"
    },
    {
      id: "barberia-cortes-hombre",
      categoryTag: "Barbería & Cortes",
      title: "Cortes de Cabello Hombre",
      description: "Cortes clásicos y modernos, asesoría de imagen y rituales tradicionales de barba con toallas calientes y aceites nutritivos de alta gama.",
      image: barberImg,
      categoryFilter: "barberia",
      buttonText: "Ver Barbería"
    }
  ]
};
