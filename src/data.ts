/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Promo } from './types';

export const SERVICES: Service[] = [
  // === SERVICIOS DE UÑAS ===
  {
    id: 'u_manicura_normal',
    name: 'Manicura Tradicional (Normal / Sin Pintar)',
    description: 'Cuidado higiénico de cutículas, limado profesional y esmaltado tradicional o al natural para un aspecto impecable.',
    price: 11500,
    category: 'uñas',
    duration: '45m'
  },
  {
    id: 'u_pedicura_normal',
    name: 'Pedicura Tradicional (Con / Sin Esmalte)',
    description: 'Tratamiento clásico para pies con exfoliación suave, remoción de asperezas, limado de uñas y esmalte tradicional.',
    price: 15000,
    category: 'uñas',
    duration: '1h'
  },
  {
    id: 'u_pedicura_gel',
    name: 'Pedicura con Gel',
    description: 'Pedicura tradicional combinada con un esmaltado semipermanente de alta resistencia secado en lámpara LED.',
    price: 18000,
    category: 'uñas',
    duration: '1h 15m'
  },
  {
    id: 'u_manicura_gel',
    name: 'Manicura con Gel',
    description: 'Limpieza profunda de manos y cutículas con la aplicación de esmalte semipermanente de brillo duradero.',
    price: 15000,
    category: 'uñas',
    duration: '1h'
  },
  {
    id: 'u3', // Preserved for coupon: Martes de Uñas Perfectas (Pedicura Spa)
    name: 'Pedicura Spa Premium',
    description: 'Experiencia relajante con baño de pies, exfoliación marina, mascarilla nutritiva, toallas calientes y masaje hidratante.',
    price: 30000,
    category: 'uñas',
    duration: '1h 30m',
    isPopular: true
  },
  {
    id: 'u_pedicura_masaje',
    name: 'Masaje de Pies Adicional para Pedicura',
    description: 'Complementa tu tratamiento de pedicura con un masaje relajante extendido de pies para aliviar tensiones.',
    price: 3000,
    category: 'uñas',
    duration: '15m'
  },
  {
    id: 'u_pedicura_masc',
    name: 'Pedicura Masculina',
    description: 'Tratamiento especializado para caballeros enfocado en la salud y estética del pie, eliminando callosidades y asperezas.',
    price: 12000,
    category: 'uñas',
    duration: '45m'
  },
  {
    id: 'u_manicura_masc',
    name: 'Manicura Masculina',
    description: 'Limpieza de manos, cuidado y retiro de exceso de cutícula con un acabado natural pulido y elegante.',
    price: 10000,
    category: 'uñas',
    duration: '35m'
  },
  {
    id: 'u_esmaltado_illuminari',
    name: 'Esmaltado en Gel Illuminari',
    description: 'Esmaltado de alta gama con efectos tridimensionales y de brillo superior que refleja la luz de manera única.',
    price: 13000,
    category: 'uñas',
    duration: '50m'
  },
  {
    id: 'u_esmaltado_base_normal',
    name: 'Esmaltado con Base Niveladora',
    description: 'Esmaltado semipermanente complementado con una base niveladora que unifica la superficie de la uña natural.',
    price: 11500,
    category: 'uñas',
    duration: '45m'
  },
  {
    id: 'u_esmaltado_calcio',
    name: 'Esmaltado Fortalecedor con Calcio',
    description: 'Esmaltado en gel enriquecido con calcio para proteger, nutrir y evitar el quiebre de uñas delgadas.',
    price: 13000,
    category: 'uñas',
    duration: '50m'
  },
  {
    id: 'u_esmaltado_disenos',
    name: 'Esmaltado en Gel con Diseños (Nail Art)',
    description: 'Luce tus uñas con esmalte semipermanente y diseños personalizados y creativos pintados a mano por nuestras artistas.',
    price: 16000,
    category: 'uñas',
    duration: '1h 15m'
  },
  {
    id: 'u_esmaltado_un_diseno',
    name: 'Esmaltado con un Diseño en Cada Mano',
    description: 'Esmaltado de gel semipermanente con un detalle de diseño sutil y elegante en una sola uña de cada mano.',
    price: 13000,
    category: 'uñas',
    duration: '55m'
  },
  {
    id: 'u_retirar_pintura',
    name: 'Retiro de Esmalte de Uñas',
    description: 'Remoción segura y delicada de pintura tradicional de manos o pies, con humectación profunda de cutículas.',
    price: 3000,
    category: 'uñas',
    duration: '15m'
  },
  {
    id: 'u_retirar_gelx',
    name: 'Retiro Profesional de Uñas Gel-X',
    description: 'Retiro seguro mediante técnica de ablandado protector para evitar daños en la capa queratínica natural de la uña.',
    price: 6000,
    category: 'uñas',
    duration: '30m'
  },
  {
    id: 'u_retirar_acrilicas',
    name: 'Retiro Profesional de Uñas Acrílicas',
    description: 'Retiro técnico de acrílico mediante limado suave y dilución especial que preserva la salud de tus uñas.',
    price: 7500,
    category: 'uñas',
    duration: '40m'
  },
  {
    id: 'u_esmaltado_normal_manos_pies',
    name: 'Esmaltado Tradicional Rápido (Manos y Pies)',
    description: 'Servicio express de limado básico y aplicación de pintura normal en manos y pies sin manicura completa.',
    price: 6000,
    category: 'uñas',
    duration: '25m'
  },
  {
    id: 'u_reconstruccion_u_unidad',
    name: 'Reconstrucción de Uña Dañada (Por Unidad)',
    description: 'Reparación cosmética individual de uña rota o quebrada utilizando acrílico o gel de alta adherencia.',
    price: 2500,
    category: 'uñas',
    duration: '15m'
  },
  {
    id: 'u_nivelacion_crecer',
    name: 'Pintura con Nivelación de Crecimiento',
    description: 'Alineación de la superficie con base de alta viscosidad que refuerza el crecimiento y previene roturas.',
    price: 16000,
    category: 'uñas',
    duration: '1h'
  },
  {
    id: 'u4', // Preserved for coupon: Martes de Uñas Perfectas (Gel-X)
    name: 'Uñas Gel-X (Set Completo)',
    description: 'Extensiones de uñas de última tendencia con tips de gel suave (soft gel), de aspecto muy natural, ligeras y ultra resistentes.',
    price: 22000,
    category: 'uñas',
    duration: '1h 30m'
  },
  {
    id: 'u_gelx_disenos',
    name: 'Uñas Gel-X con Diseños Artísticos',
    description: 'Extensiones completas Gel-X decoradas con maravillosos diseños artísticos a mano alzada según tu estilo.',
    price: 26000,
    category: 'uñas',
    duration: '2h'
  },
  {
    id: 'u1', // Preserved for coupon: Martes de Uñas Perfectas (Acrílicas Full Set)
    name: 'Uñas Acrílicas Esculpidas (Full Set)',
    description: 'Extensión y esculpido artesanal de uñas acrílicas con acabados perfectos de alta duración y esmaltado semipermanente.',
    price: 35000,
    category: 'uñas',
    duration: '2h',
    isPopular: true
  },
  {
    id: 'u_gelpolis',
    name: 'Uñas Gelpolis Permanente',
    description: 'Esmaltado de larga duración con esmalte de gel de alta calidad para un brillo e intensidad inalterables por semanas.',
    price: 22000,
    category: 'uñas',
    duration: '1h'
  },
  {
    id: 'u_moldeada_multigel',
    name: 'Uñas Moldeadas con Builder Gel / Multigel',
    description: 'Moldeado y extensión utilizando gel constructor para unas uñas flexibles, ligeras, fuertes y sumamente naturales.',
    price: 23000,
    category: 'uñas',
    duration: '1h 30m'
  },

  // === SERVICIOS DE CABELLO ===
  // Químicos
  {
    id: 'c_tinte_raiz',
    name: 'Tinte de Raíz (Cubrimiento de Canas / Color)',
    description: 'Aplicación precisa en la zona de crecimiento para cubrir canas o unificar el tono con coloración profesional.',
    price: 40000,
    category: 'cabello',
    duration: '1h 30m'
  },
  {
    id: 'c3', // Preserved for coupon: Promo Color (Tinte Completo)
    name: 'Tinte Completo Global',
    description: 'Coloración profesional global desde la raíz hasta las puntas para un color homogéneo, brillante e hidratado.',
    price: 55000,
    category: 'cabello',
    duration: '2h',
    isPopular: true
  },
  {
    id: 'c_bano_color_proteinas',
    name: 'Baño de Color con Proteínas',
    description: 'Refrescamiento de tonos apagados enriquecido con complejo proteico que sella la cutícula aportando suavidad y brillo.',
    price: 35000,
    category: 'cabello',
    duration: '1h 15m'
  },
  {
    id: 'c_bano_color_clasico',
    name: 'Baño de Color Clásico',
    description: 'Tonalización clásica libre de amoníaco ideal para devolver vida, reflejo y brillo al cabello teñido o natural.',
    price: 28000,
    category: 'cabello',
    duration: '1h'
  },
  {
    id: 'c_rayitos_cortos',
    name: 'Rayitos en Cabello Corto',
    description: 'Clásicos reflejos de luz distribuidos uniformemente para dar luminosidad y contraste en melenas cortas.',
    price: 45000,
    category: 'cabello',
    duration: '2h'
  },
  {
    id: 'c_rayitos_medianos',
    name: 'Rayitos en Cabello Mediano',
    description: 'Técnica de iluminación detallada mediante mechas de contraste para dar una sensación multidimensional en cabello mediano.',
    price: 75000,
    category: 'cabello',
    duration: '2h 45m'
  },
  {
    id: 'c2', // Preserved for coupon: Promo Color (Rayitos Cabello Largo)
    name: 'Rayitos en Cabello Largo',
    description: 'Efectos de iluminación radiante distribuidos estratégicamente a lo largo de tu melena larga para máxima luminosidad.',
    price: 85000,
    category: 'cabello',
    duration: '3h 30m'
  },
  {
    id: 'c1', // Preserved for coupon: Promo Color (Diseños Balayage / Ombré)
    name: 'Diseños de Color (Balayage / Ombré)',
    description: 'Técnicas avanzadas de aclarado artístico a mano alzada. El precio base es ₡65.000 y varía hasta ₡150.000 según volumen y largo.',
    price: 65000,
    category: 'cabello',
    duration: '4h',
    isPopular: true
  },
  {
    id: 'c_diagnostico_prueba_hebra',
    name: 'Diagnóstico Capilar & Prueba de Hebra',
    description: 'Evaluación técnica minuciosa de resistencia y porosidad del cabello para asegurar la viabilidad de procesos de aclaración.',
    price: 12000,
    category: 'cabello',
    duration: '30m'
  },

  // Cortes y Estilizado
  {
    id: 'c_corte_blower_corto',
    name: 'Corte + Blower Cabello Corto',
    description: 'Diseño de corte adaptado a tu rostro y secado profesional blower para dar estructura y volumen.',
    price: 16000,
    category: 'cabello',
    duration: '1h'
  },
  {
    id: 'c_corte_blower_mediano',
    name: 'Corte + Blower Cabello Mediano',
    description: 'Corte de estilo moderno y secado profesional para conseguir una caída dócil con movimiento y brillo.',
    price: 22000,
    category: 'cabello',
    duration: '1h 15m'
  },
  {
    id: 'c_corte_blower_largo',
    name: 'Corte + Blower Cabello Largo',
    description: 'Corte de puntas y capas de diseño y secado blower para lucir una melena larga radiante y pulida.',
    price: 25000,
    category: 'cabello',
    duration: '1h 30m'
  },
  {
    id: 'c_corte_blower_extralargo',
    name: 'Corte + Blower Cabello Extra Largo',
    description: 'Servicio especializado para melenas de gran volumen o longitud, logrando un acabado sofisticado de pasarela.',
    price: 32000,
    category: 'cabello',
    duration: '1h 45m'
  },
  {
    id: 'c_solo_corte_mujer',
    name: 'Solo Corte para Dama',
    description: 'Lavado nutritivo de cabello y corte especializado diseñado según la fisionomía de tu rostro (no incluye blower).',
    price: 12000,
    category: 'cabello',
    duration: '45m'
  },
  {
    id: 'c_blower_extracorto',
    name: 'Blower Cabello Extra Corto',
    description: 'Secado y modelado rápido con cepillo para dar textura o definición a cortes extra cortos y estilo pixie.',
    price: 10000,
    category: 'cabello',
    duration: '30m'
  },
  {
    id: 'c_blower_corto',
    name: 'Blower Cabello Corto',
    description: 'Lavado, acondicionamiento y secado modelador profesional con cepillo para lucir volumen natural.',
    price: 12000,
    category: 'cabello',
    duration: '40m'
  },
  {
    id: 'c_blower_mediano',
    name: 'Blower Cabello Mediano',
    description: 'Secado blower para cabellos de largo medio, controlando el encrespamiento y aportando una caída dócil.',
    price: 15000,
    category: 'cabello',
    duration: '45m'
  },
  {
    id: 'c_blower_largo',
    name: 'Blower Cabello Largo',
    description: 'Secado con cepillo redondo para melenas largas, perfecto para lucir un liso pulido o hermosas ondas elásticas.',
    price: 18000,
    category: 'cabello',
    duration: '1h'
  },
  {
    id: 'c_blower_extralargo',
    name: 'Blower Cabello Extra Largo',
    description: 'Servicio detallado de secado profesional para cabellos muy largos o de alta densidad capilar.',
    price: 23000,
    category: 'cabello',
    duration: '1h 15m'
  },
  {
    id: 'c_plancha_corta',
    name: 'Planchado Cabello Corto',
    description: 'Alisado térmico de gran precisión utilizando protectores de calor profesionales para un brillo sedoso.',
    price: 10000,
    category: 'cabello',
    duration: '30m'
  },
  {
    id: 'c_plancha_mediana',
    name: 'Planchado Cabello Mediano',
    description: 'Alineación térmica perfecta en cabello mediano, sellando la cutícula para un acabado pulcro.',
    price: 12000,
    category: 'cabello',
    duration: '40m'
  },
  {
    id: 'c_plancha_larga',
    name: 'Planchado Cabello Largo',
    description: 'Alisado térmico minucioso con planchas profesionales para un cabello largo totalmente dócil y lacio.',
    price: 13000,
    category: 'cabello',
    duration: '50m'
  },
  {
    id: 'c_plancha_extralarga',
    name: 'Planchado Cabello Extra Largo',
    description: 'Planchado intensivo y protector de calor para cabellos de gran longitud y abundancia.',
    price: 16000,
    category: 'cabello',
    duration: '1h'
  },
  {
    id: 'c_ondas_medio',
    name: 'Ondas de Agua (Cabello Mediano)',
    description: 'Estilizado glamuroso con pinza para crear ondas de agua fluidas de aspecto natural y elegante.',
    price: 15000,
    category: 'cabello',
    duration: '45m'
  },
  {
    id: 'c_ondas_largo',
    name: 'Ondas de Agua (Cabello Largo)',
    description: 'Peinado con ondas de agua en cabello largo, ideal para lucir volumen, movimiento y elegancia en cualquier evento.',
    price: 18000,
    category: 'cabello',
    duration: '1h'
  },
  {
    id: 'c_ondas_extralargo',
    name: 'Ondas de Agua (Cabello Extra Largo)',
    description: 'Estilizado sofisticado de ondas duraderas y de alta definición en melenas de gran volumen.',
    price: 25000,
    category: 'cabello',
    duration: '1h 15m'
  },
  {
    id: 'c_peinado_semirecogido',
    name: 'Peinado Semirecogido',
    description: 'Estilo versátil combinando sutiles recogidos con trenzados u ondas sueltas para celebraciones especiales.',
    price: 15000,
    category: 'cabello',
    duration: '1h'
  },
  {
    id: 'c_peinado_recogido',
    name: 'Peinado Recogido Completo',
    description: 'Recogidos sofisticados y moños artísticos de alta gala ideales para novias, graduaciones o eventos de noche.',
    price: 25000,
    category: 'cabello',
    duration: '1h 30m'
  },
  {
    id: 'c_maquillaje_dia',
    name: 'Maquillaje Profesional de Día',
    description: 'Maquillaje fresco y luminoso que potencia tu belleza natural con acabados sutiles de larga duración.',
    price: 22000,
    category: 'cabello',
    duration: '1h'
  },
  {
    id: 'c_maquillaje_noche',
    name: 'Maquillaje de Gala / Noche',
    description: 'Maquillaje de gran impacto con técnicas de difuminado de ojos, contorno de rostro y alta cobertura (₡25.000 a ₡35.000).',
    price: 25000,
    category: 'cabello',
    duration: '1h 15m'
  },
  {
    id: 'c_pestanas_punito',
    name: 'Colocación de Pestañas (Puñitos)',
    description: 'Aplicación profesional de pestañas en grupo para conseguir una mirada profunda y con volumen por varios días.',
    price: 12000,
    category: 'cabello',
    duration: '40m'
  },
  {
    id: 'c_pestanas_linea',
    name: 'Colocación de Pestañas (Línea)',
    description: 'Aplicación rápida de pestañas postizas enteras en tira utilizando adhesivo hipoalergénico seguro.',
    price: 6000,
    category: 'cabello',
    duration: '15m'
  },

  // Tratamientos Capilares
  {
    id: 't_celulas_madres',
    name: 'Tratamiento de Células Madres',
    description: 'Terapia de regeneración profunda que reactiva el folículo y restaura la elasticidad y juventud del cabello.',
    price: 18000,
    category: 'cabello',
    duration: '1h 15m'
  },
  {
    id: 't_ampolla_hid_adicional',
    name: 'Ampolla de Hidratación Express (Adicional)',
    description: 'Tratamiento súper hidratante rápido que se añade a cualquier servicio de lavado de cabello.',
    price: 5000,
    category: 'cabello',
    duration: '10m'
  },
  {
    id: 't_coctel_ampollas_adicional',
    name: 'Cóctel de Ampollas de Nutrición (Adicional al Blower)',
    description: 'Fusión personalizada de ampollas de brillo, hidratación y queratínicas que se activa térmicamente con el secado.',
    price: 10000,
    category: 'cabello',
    duration: '15m'
  },
  {
    id: 't_bano_brillo_glaze',
    name: 'Tratamiento Baño de Brillo (Glaze)',
    description: 'Sella la cutícula del cabello con un velo translúcido tridimensional reflectante de brillo extraordinario.',
    price: 35000,
    category: 'cabello',
    duration: '1h'
  },
  {
    id: 't_queratina_hidrolizada',
    name: 'Tratamiento de Queratina Hidrolizada',
    description: 'Reparación intensiva que rellena fisuras de la hebra capilar dañada (rango varía de ₡35.000 a ₡40.000 según largo).',
    price: 35000,
    category: 'cabello',
    duration: '1h 15m'
  },
  {
    id: 't_botox_mediano',
    name: 'Botox Capilar Rellenador (Cabello Mediano)',
    description: 'Terapia rejuvenecedora que rellena la fibra capilar eliminando por completo el frizz en largos medianos.',
    price: 30000,
    category: 'cabello',
    duration: '1h 30m'
  },
  {
    id: 't_botox_largo',
    name: 'Botox Capilar Rellenador (Cabello Largo)',
    description: 'Tratamiento intensivo de hidratación orgánica y relleno capilar que aporta peso y suavidad extrema.',
    price: 40000,
    category: 'cabello',
    duration: '1h 45m'
  },
  {
    id: 't_botox_extralargo',
    name: 'Botox Capilar Rellenador (Cabello Extra Largo)',
    description: 'Tratamiento hidratante premium de alta nutrición para melenas extra largas dañadas o quebradizas.',
    price: 55000,
    category: 'cabello',
    duration: '2h'
  },
  {
    id: 't_hid_productos_calidad',
    name: 'Tratamiento de Hidratación Profunda Especializado',
    description: 'Nutrición personalizada con mascarillas profesionales y marcas de calidad. Por favor llamar al salón para cotizar y reservar.',
    price: 0,
    category: 'cabello',
    duration: '1h'
  },
  {
    id: 't_salerm_21',
    name: 'Tratamiento Intensivo Salerm 21',
    description: 'Superhidratación con provitamina B5 y proteínas de seda que regenera el cabello deshidratado. Llamar al salón para cotizar.',
    price: 0,
    category: 'cabello',
    duration: '45m'
  },
  {
    id: 't_vapor_limpieza_cuero',
    name: 'Terapia de Vapor & Detox de Cuero Cabelludo',
    description: 'Purificación profunda de poros capilares asistido por vapor caliente para promover el crecimiento fuerte. Llamar para cotizar.',
    price: 0,
    category: 'cabello',
    duration: '1h'
  },
  {
    id: 't_diagnostico_enfermedades',
    name: 'Diagnóstico de Afecciones del Cuero Cabelludo',
    description: 'Estudio con cámara de diagnóstico para detectar sequedad, exceso de grasa, debilitamiento o descamación. Llamar para cita.',
    price: 0,
    category: 'cabello',
    duration: '30m'
  },
  {
    id: 't_keratina_cacao_onza',
    name: 'Alisado de Keratina Brasil Cacau (Por Onza)',
    description: 'Tratamiento termoactivo premium que reconstruye la fibra capilar logrando un alisado sedoso. ₡40.000 por onza aplicada.',
    price: 40000,
    category: 'cabello',
    duration: '2h'
  },
  {
    id: 't_liso_organico_onza',
    name: 'Alisado de Liso Orgánico (Por Onza)',
    description: 'Fórmula termoactiva con activos naturales y orgánicos que eliminan el encrespamiento de forma segura. ₡35.000 por onza aplicada.',
    price: 35000,
    category: 'cabello',
    duration: '2h'
  },
  {
    id: 't_nanoplastia_onza',
    name: 'Nanoplastia Reconstructora Capilar (Por Onza)',
    description: 'Tecnología celular para regenerar el cabello logrando un liso dócil de aspecto natural. ₡32.000 por onza de producto aplicada.',
    price: 32000,
    category: 'cabello',
    duration: '2h'
  },
  {
    id: 't_colageno_embarazadas_onza',
    name: 'Tratamiento de Colágeno para Embarazadas (Por Onza)',
    description: 'Alisado termoactivo reparador libre de formol, seguro para mujeres gestantes y lactantes. ₡42.000 por onza aplicada.',
    price: 42000,
    category: 'cabello',
    duration: '2h'
  },

  // === SERVICIOS DE BARBERÍA ===
  {
    id: 'b1',
    name: 'Corte de Cabello Caballero',
    description: 'Corte personalizado según fisionomía, lavado de cabello con shampoo refrescante, peinado profesional y asesoría de estilo.',
    price: 8000,
    category: 'barberia',
    duration: '45m',
    isPopular: true
  },
  {
    id: 'b2',
    name: 'Ritual de Barba con Toalla Caliente',
    description: 'Perfilado, afeitado tradicional y rebajado de barba utilizando aceites esenciales naturales, toallas calientes y afeitado tradicional con navaja.',
    price: 6000,
    category: 'barberia',
    duration: '35m'
  },
  {
    id: 'b3',
    name: 'Combo Barber Premium (Corte + Barba)',
    description: 'Experiencia premium completa que combina corte de cabello personalizado, lavado y el ritual de barba tradicional para una renovación absoluta.',
    price: 12000,
    category: 'barberia',
    duration: '1h 15m',
    isPopular: true
  },
  {
    id: 'b4',
    name: 'Corte de Cabello para Niños',
    description: 'Corte de estilo moderno y divertido para los más pequeños de la casa, realizado por estilistas pacientes.',
    price: 7000,
    category: 'barberia',
    duration: '30m'
  },
  {
    id: 'b5',
    name: 'Tinte o Matizado de Barba',
    description: 'Coloración y cubrimiento de canas o matizado especializado para dar volumen, densidad y simetría al diseño de tu barba.',
    price: 10000,
    category: 'barberia',
    duration: '50m'
  },
  {
    id: 'b6',
    name: 'Marcación de Barba Express',
    description: 'Servicio rápido de limpieza, delineado y definición del contorno de mejillas y cuello.',
    price: 5000,
    category: 'barberia',
    duration: '20m'
  }
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
    description: 'En tu aplicación de set completo de Acrílicas o Gel-X, obtén un 25% de descuento en la Pedicura Spa. ¡Si traes un acompañante, recibes un 25% de descuento adicional!',
    discountCode: 'MARTESUNAS',
    discountValue: '25% Pedi + Acompañante',
    expiryDate: 'Válido Martes'
  }
];

export const FAQS = [
  {
    question: '¿Dónde están ubicados exactamente?',
    answer: 'Nos encontramos en Escazú, Costa Rica, frente al Centro Comercial La Paco. Es un punto de muy fácil acceso con parqueo privado, seguro y gratuito para la comodidad de todos nuestros clientes.'
  },
  {
    question: '¿Ofrecen servicio sin cita previa?',
    answer: 'Recomendamos encarecidamente agendar una cita previa para asegurar la disponibilidad del especialista en el servicio que deseas, sin embargo, atendemos según disponibilidad si nos visitas de improviso.'
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
