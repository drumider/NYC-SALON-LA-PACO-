/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Promo } from './types';

export const SERVICES: Service[] = [
  // Cabello - Color y Estilo
  {
    id: 'c1',
    name: 'Balayage Premium + Matiz',
    description: 'Técnica de aclarado a mano alzada para un degradado natural y luminoso, incluye tratamiento hidratante protector de color.',
    price: 45000,
    category: 'cabello',
    duration: '3h 30m',
    isPopular: true
  },
  {
    id: 'c2',
    name: 'Babylights & Contouring',
    description: 'Reflejos ultra finos que imitan los destellos naturales del sol, aportando gran luminosidad al rostro.',
    price: 38000,
    category: 'cabello',
    duration: '3h',
  },
  {
    id: 'c3',
    name: 'Tinte Completo Profesional',
    description: 'Aplicación global de tinte premium (con opciones orgánicas libres de amoníaco) para una cobertura de canas impecable.',
    price: 22000,
    category: 'cabello',
    duration: '1h 45m',
  },
  
  // Cabello - Tratamientos Capilares Orgánicos & Profesionales
  {
    id: 't1',
    name: 'Tratamiento de Queratina Orgánica',
    description: 'Alisado y reconstrucción profunda con activos naturales y orgánicos que eliminan el encrespamiento y aportan un brillo espejo.',
    price: 35000,
    category: 'cabello',
    duration: '2h 30m',
    isPopular: true
  },
  {
    id: 't2',
    name: 'Botox Capilar Rejuvenecedor',
    description: 'Tratamiento intensivo de hidratación y relleno de la fibra capilar, ideal para cabellos dañados o quebradizos.',
    price: 25000,
    category: 'cabello',
    duration: '1h 30m',
  },
  {
    id: 't3',
    name: 'Hidratación Profunda con Marcas Orgánicas',
    description: 'Terapia nutritiva con aceites y mascarillas de marcas profesionales orgánicas certificadas para restaurar la suavidad.',
    price: 18000,
    category: 'cabello',
    duration: '1h 15m',
  },

  // Uñas
  {
    id: 'u1',
    name: 'Uñas Acrílicas Full Set + Diseño',
    description: 'Extensión de uñas con acrílico de alta calidad, esculpidas profesionalmente, incluye esmaltado en gel y diseño personalizado.',
    price: 20000,
    category: 'uñas',
    duration: '2h',
    isPopular: true
  },
  {
    id: 'u2',
    name: 'Manicura Semipermanente',
    description: 'Limpieza, limado, cuidado de cutículas y esmaltado semipermanente de larga duración con brillo duradero.',
    price: 12000,
    category: 'uñas',
    duration: '1h',
  },
  {
    id: 'u3',
    name: 'Pedicura Spa Relajante',
    description: 'Exfoliación profunda, eliminación de callosidades, masaje relajante y esmaltado semipermanente en pies.',
    price: 15000,
    category: 'uñas',
    duration: '1h 15m',
  },

  // Barbería
  {
    id: 'b1',
    name: 'Corte de Cabello Caballero',
    description: 'Corte personalizado según fisionomía, lavado de cabello, peinado y asesoría de estilo.',
    price: 8000,
    category: 'barberia',
    duration: '45m',
  },
  {
    id: 'b2',
    name: 'Ritual de Barba con Toalla Caliente',
    description: 'Perfilado y rebajado de barba utilizando aceites esenciales, toallas calientes y afeitado tradicional con navaja.',
    price: 6000,
    category: 'barberia',
    duration: '35m',
  },
  {
    id: 'b3',
    name: 'Combo Barber Premium (Corte + Barba)',
    description: 'Corte de cabello completo y ritual de barba tradicional para una experiencia de renovación absoluta.',
    price: 12000,
    category: 'barberia',
    duration: '1h 15m',
    isPopular: true
  },

  // Capacitaciones
  {
    id: 'ed1',
    name: 'Curso Colorimetría Profesional',
    description: 'Capacitación intensiva teórico-práctica sobre combinaciones, neutralización y técnicas modernas de color.',
    price: 65000,
    category: 'capacitacion',
    duration: '4 Sesiones',
  },
  {
    id: 'ed2',
    name: 'Taller de Nail Art Avanzado',
    description: 'Aprende técnicas de mano alzada, 3D, encapsulados y tendencias de diseños modernos para uñas.',
    price: 45000,
    category: 'capacitacion',
    duration: '2 Sesiones',
  },
];

export const PROMOS: Promo[] = [
  {
    id: 'p1',
    title: 'Mes del Color & Brillo',
    description: 'Recibe un 15% de descuento en cualquier servicio de Balayage o Babylights de lunes a miércoles.',
    discountCode: 'PROMOCOLOR15',
    discountValue: '15%',
    expiryDate: 'Fin de mes'
  },
  {
    id: 'p2',
    title: 'Martes de Uñas Perfectas',
    description: 'Por la aplicación de tu set completo de acrílicas, la pedicura spa te queda a mitad de precio.',
    discountCode: 'ACRYLICPEDISP50',
    discountValue: '50% Pedicura',
    expiryDate: 'Válido Martes'
  },
  {
    id: 'p3',
    title: 'Bienvenida Orgánica',
    description: 'Obtén un tratamiento de hidratación orgánica express de regalo con tu primer tinte completo.',
    discountCode: 'BIENVENIDAORGA',
    discountValue: 'Regalo Express',
    expiryDate: 'Clientes nuevos'
  }
];

export const FAQS = [
  {
    question: '¿Dónde están ubicados exactamente?',
    answer: 'Nos encontramos en Calle Guachipelín de Escazú, San Rafael de Escazú, San José, Costa Rica. Código Postal 10203. Estamos en una zona muy accesible con estacionamiento seguro disponible.'
  },
  {
    question: '¿Qué marcas de productos orgánicos utilizan?',
    answer: 'Trabajamos con marcas profesionales certificadas libres de sulfatos, parabenos y crueldad animal, ideales para proteger la estructura capilar y cuero cabelludo sensible. Ofrecemos coloración orgánica libre de amoníaco.'
  },
  {
    question: '¿Ofrecen servicio sin cita previa?',
    answer: 'Recomendamos encarecidamente agendar una cita previa para asegurar la disponibilidad del especialista en el servicio que deseas, sin embargo, atendemos según disponibilidad si nos visitas de improviso.'
  },
  {
    question: '¿Cómo funcionan los cursos y capacitaciones?',
    answer: 'Nuestras capacitaciones son dictadas por profesionales certificados e incluyen kits de inicio o materiales de práctica. Al finalizar, entregamos un certificado oficial de participación. Pregúntanos por la próxima fecha disponible.'
  },
  {
    question: '¿Cómo puedo agendar o cotizar mi cita?',
    answer: 'Puedes usar nuestro cotizador interactivo más abajo, seleccionar tus servicios favoritos y presionar "Enviar a WhatsApp". Esto creará un mensaje detallado para que nuestro equipo confirme tu espacio de inmediato.'
  }
];

export const HIGHLIGHTS = [
  {
    id: 'h1',
    title: 'Uñas y mas',
    icon: 'Sparkles',
    description: 'Nail art, acrílicos premium, manicura impecable.'
  },
  {
    id: 'h2',
    title: 'Capacitación',
    icon: 'GraduationCap',
    description: 'Cursos profesionales y talleres prácticos.'
  },
  {
    id: 'h3',
    title: 'Tratamientos',
    icon: 'Heart',
    description: 'Cuidado capilar orgánico y regeneración.'
  },
  {
    id: 'h4',
    title: 'Barbería',
    icon: 'Scissors',
    description: 'Cortes clásicos, modernos y cuidado de barba.'
  },
  {
    id: 'h5',
    title: 'Contacto',
    icon: 'Phone',
    description: 'Atención personalizada y reservas directas.'
  },
];
