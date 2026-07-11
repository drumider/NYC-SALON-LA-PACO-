/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  Scissors,
  Heart,
  GraduationCap,
  Phone,
  Instagram,
  MapPin,
  Clock,
  ArrowRight,
  ChevronDown,
  Check,
  Award,
  ShieldCheck,
  Star,
  Users,
  Smile,
  X,
  Search,
  Droplet,
  SlidersHorizontal
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import EstimatorForm from './components/EstimatorForm';
import PromoCarousel from './components/PromoCarousel';
import Footer from './components/Footer';
import { SERVICES, FAQS, HIGHLIGHTS } from './data';
import { Service, Product } from './types';
import { WHY_CHOOSE_CONTENT } from './why-choose/whyChooseData';

// Import image assets directly so Vite can bundle and hash them for production/Vercel
import hairImg from './assets/images/pelo coloracion.png';
import nailsImg from './assets/images/uñas.png';
import barberImg from './assets/images/barba.png';
import yellowConditionerImg from './assets/images/yellow_conditioner_1783693016417.png';
import yellowShampooImg from './assets/images/yellow_shampoo_1783693103821.png';
import semiDiLinoShampooImg from './assets/images/semi_di_lino_shampoo_1783693170354.jpg';
import semiDiLinoCristalliImg from './assets/images/semi_di_lino_cristalli_1783693250000_1783693329201.jpg';
import yellowDetoxCreamImg from './assets/images/yellow_detox_cream_1783693424338.jpg';
import yellowLissSerumImg from './assets/images/yellow_liss_serum_1783693529687.jpg';
import yellowCurlsShampooImg from './assets/images/yellow_curls_shampoo_1783693621452.jpg';
import yellowScalpShampooImg from './assets/images/yellow_scalp_shampoo_1783693759717.jpg';
import yellowComfortShampooImg from './assets/images/yellow_comfort_shampoo_1783693829347.jpg';
import yellowEnergyShampooImg from './assets/images/yellow_energy_shampoo_1783693936922.jpg';
import yellowNourishingShampooImg from './assets/images/yellow_nourish_small_1783728795074.jpg';
import cadiveuConditionerImg from './assets/images/cadiveu_brasil_cacau_conditioner_1783729878381.jpg';
import cadiveuPrimerImg from './assets/images/cadiveu_primer_110ml_1783729959143.jpg';
import cadiveuShampooImg from './assets/images/cadiveu_shampoo_300ml_1783730033540.jpg';
import moroccanoilBodyScrubImg from './assets/images/moroccanoil_body_scrub_1783730117809.jpg';
import lorealMetalDetoxMaskImg from './assets/images/loreal_metal_detox_mask_1783730202272.jpg';
import moroccanoilHydratingMaskImg from './assets/images/moroccanoil_hydrating_mask_1783730317153.jpg';
import biokeraYellowShotCurlyCreamImg from './assets/images/biokera_yellow_shot_curly_cream_1783730519066.jpg';
import salermWheatGermMaskImg from './assets/images/salerm_wheat_germ_mask_1783730630431.jpg';
import biokeraYellowShotMaskImg from './assets/images/biokera_yellow_shot_mask_1783730792617.jpg';
import biokeraGreenShotBalsamImg from './assets/images/biokera_green_shot_balsam_1783730802190.jpg';
import biokeraOilyHairShampooImg from './assets/images/biokera_oily_hair_shampoo_1783730813496.jpg';
import biokeraOilyHairMaskImg from './assets/images/biokera_oily_hair_mask_1783730821120.jpg';
import biokeraDandruffMaskImg from './assets/images/biokera_dandruff_mask_1783730981435.jpg';
import lorealSilverShampooImg from './assets/images/loreal_silver_shampoo_1783731191889.jpg';
import lorealSilverConditionerImg from './assets/images/loreal_silver_conditioner_1783731200845.jpg';
import tecItalyDueFaccettaGiornoImg from './assets/images/tec_italy_due_faccetta_giorno_per_giorno_1783731222939.jpg';
import tecItalyScultoreFineImg from './assets/images/tec_italy_scultore_fine_1783731238180.jpg';
import tecItalyDueFaccettaMassimoImg from './assets/images/tec_italy_due_faccetta_massimo_1783731321947.jpg';
import lorealAbsolutRepairConditionerImg from './assets/images/loreal_absolut_repair_conditioner_1783731395869.jpg';
import lorealVitaminoColorShampooImg from './assets/images/loreal_vitamino_color_shampoo_1783731445278.jpg';

// Real high-quality generated assets
const SALON_IMAGES = {
  hero: "/inicio/foto_inicio.png", // Located in /public/inicio/ for easy user replacement!
  hair: hairImg,
  nails: nailsImg,
  barber: barberImg,
  k18: "/productos/k18.png", // Located in the /public folder for easy user replacement!
};
const PRODUCTS: Product[] = [
  {
    id: "k18",
    brand: "K18 Hair Science",
    name: "K18 Damage Shield Conditioner 250 ml",
    price: "₡18.000",
    image: "/productos/k18.png",
    description: "Acondicionador protector que hidrata, fortalece y defiende del daño diario, rayos UV y polución.",
    benefits: [
      "Protección contra rayos UV y polución",
      "Fórmula con K18Peptide™ patentado",
      "Aporta brillo radiante y sedosidad"
    ],
    inStock: true,
    category: "acondicionador"
  },
  {
    id: "biotop",
    brand: "Biotop Professional",
    name: "700 Keratin & Kale Mascarilla 250 ml",
    price: "₡28.000",
    image: "/productos/biotop.jpg",
    description: "Tratamiento intensivo con queratina y kale que reconstruye, suaviza y nutre el pelo dañado.",
    benefits: [
      "Repara y reconstruye con queratina",
      "Nutre en profundidad con kale orgánico",
      "Controla el frizz y devuelve brillo"
    ],
    inStock: true,
    category: "mascarilla"
  },
  {
    id: "loreal",
    brand: "L'Oréal Professionnel",
    name: "Absolut Repair Shampoo 300 ml",
    price: "₡18.000",
    image: "/productos/absolut.jpg",
    description: "Shampoo restructurante profesional que limpia suavemente, restaura la fibra capilar y devuelve fuerza.",
    benefits: [
      "Repara y restructura el cabello dañado",
      "Nutre con proteína y omega-9",
      "Aporta suavidad y manejabilidad"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "biotop_cond",
    brand: "Biotop Professional",
    name: "700 Keratin & Kale Acondicionador 250 ml",
    price: "₡15.000",
    image: "/productos/biotop_cond.jpg",
    description: "Acondicionador reparador que fortalece, suaviza, desenreda y restaura la fibra capilar dañada.",
    benefits: [
      "Repara y fortalece con queratina",
      "Nutre con kale orgánico",
      "Desenreda y suaviza instantáneamente"
    ],
    inStock: true,
    category: "acondicionador"
  },
  {
    id: "biotop_19",
    brand: "Biotop Professional",
    name: "19 Pro Silver Shampoo Matizador 250 ml",
    price: "₡19.000",
    image: "/productos/biotop_19.jpg",
    description: "Shampoo tonificante violeta que neutraliza tonos amarillos no deseados en cabellos rubios, canos y plateados.",
    benefits: [
      "Neutraliza tonos amarillos y anaranjados",
      "Realza rubios, grises y plateados",
      "Aporta luminosidad y un acabado frío"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "biotop_911",
    brand: "Biotop Professional",
    name: "911 Quinoa Mascarilla Hidratante 250 ml",
    price: "₡23.000",
    image: "/productos/biotop_911.jpg",
    description: "Mascarilla de tratamiento intensivo con quinoa que restaura la hidratación, nutre en profundidad y devuelve el brillo.",
    benefits: [
      "Restaura la hidratación con quinoa",
      "Suaviza y aporta brillo",
      "Nutre el cabello seco o apagado",
      "Deja el pelo más suave y manejable"
    ],
    inStock: true,
    category: "mascarilla"
  },
  {
    id: "yellow_color_care",
    brand: "Yellow Professional",
    name: "Yellow Maintenance Conditioner - Color Care 500 ml",
    price: "₡23.000",
    image: yellowConditionerImg,
    description: "Acondicionador profesional para el mantenimiento del cabello teñido. Protege la intensidad del color y aporta suavidad.",
    benefits: [
      "Protección y fijación de color prolongada",
      "Aporta suavidad extrema y desenredo dócil",
      "Fórmula profesional Color-Lock & Pro-Shine"
    ],
    inStock: true,
    category: "acondicionador"
  },
  {
    id: "yellow_shampoo_color_care",
    brand: "Yellow Professional",
    name: "Yellow Maintenance Shampoo - Color Care 500 ml",
    price: "₡23.000",
    image: yellowShampooImg,
    description: "Champú profesional de limpieza suave para cabellos teñidos. Mantiene vivo el reflejo del color por más tiempo y aporta brillo excepcional.",
    benefits: [
      "Limpieza delicada sin agredir el color",
      "Mantiene el reflejo brillante y vibrante",
      "Fórmula enriquecida con complejo Color-Lock"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "semi_di_lino_balancing",
    brand: "Alfaparf Milano",
    name: "Semi di Lino Scalp Rebalance - Balancing Low Shampoo 250 ml",
    price: "₡18.000",
    image: semiDiLinoShampooImg,
    description: "Champú delicado equilibrante para el cuero cabelludo graso. Limpia profundamente, regula el exceso de sebo y refresca.",
    benefits: [
      "Fórmula libre de sulfatos (Sulfate-Free)",
      "Regula la sobreproducción de grasa y sebo",
      "Efecto refrescante de larga duración"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "semi_di_lino_cristalli",
    brand: "Alfaparf Milano",
    name: "Semi di Lino Sublime - Cristalli Liquidi The Original 30 ml",
    price: "₡18.000",
    image: semiDiLinoCristalliImg,
    description: "Sérum perfeccionador instantáneo para todo tipo de cabello. Aporta un brillo infinito, protege contra el calor y previene las puntas abiertas.",
    benefits: [
      "Brillo sublime e inmediato",
      "Protección térmica contra el calor hasta 230°C",
      "Efecto seda al tacto y control del frizz"
    ],
    inStock: true,
    category: "estilizado"
  },
  {
    id: "yellow_detox_cream",
    brand: "Yellow Professional",
    name: "Yellow Detox Cream - Scalp and Hair Wellness Boost 250 ml",
    price: "₡22.000",
    image: yellowDetoxCreamImg,
    description: "Crema desintoxicante capilar y del cuero cabelludo con Rambután. Captura metales pesados y cloro, aportando frescura, hidratación y acondicionamiento.",
    benefits: [
      "Acción desintoxicante profunda para cuero cabelludo y fibra",
      "Enriquecido con Rambután 100% de origen natural",
      "Acondiciona, hidrata y brinda bienestar absoluto"
    ],
    inStock: true,
    category: "mascarilla"
  },
  {
    id: "yellow_liss_serum",
    brand: "Yellow Professional",
    name: "Yellow Liss Multi-Benefit - 10-in-1 Smoothing Serum 150 ml",
    price: "₡13.000",
    image: yellowLissSerumImg,
    description: "Sérum alisador multitarea 10 en 1 para cabellos rebeldes o alisados. Aporta control del encrespamiento, brillo deslumbrante, sedosidad y protección térmica.",
    benefits: [
      "10 beneficios en 1 solo producto profesional",
      "Efecto alisador progresivo y control absoluto del frizz",
      "Protección térmica contra herramientas de calor"
    ],
    inStock: true,
    category: "estilizado"
  },
  {
    id: "yellow_curls_shampoo",
    brand: "Yellow Professional",
    name: "Yellow Curls Low Shampoo - Curly Hair 500 ml",
    price: "₡23.000",
    image: yellowCurlsShampooImg,
    description: "Champú hidratante y anti-frizz libre de sulfatos diseñado especialmente para cabellos rizados y ondulados. Con Aceite de Baobab y Mango.",
    benefits: [
      "Limpieza delicada que preserva la hidratación natural de los rizos",
      "Definición perfecta, elasticidad y control absoluto del frizz",
      "Enriquecido con Aceite de Baobab y Mango 100% naturales"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "yellow_scalp_balance",
    brand: "Yellow Professional",
    name: "Yellow Scalp Balance Shampoo - Oily Scalp 500 ml",
    price: "₡23.000",
    image: yellowScalpShampooImg,
    description: "Champú profesional seborregulador formulado para el cuero cabelludo graso. Purifica en profundidad aportando frescor y vitalidad.",
    benefits: [
      "Regula el exceso de sebo y grasa de forma equilibrada",
      "Enriquecido con Rambután and Enebro de origen natural",
      "Limpieza refrescante de larga duración y vitalidad capilar"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "yellow_scalp_comfort",
    brand: "Yellow Professional",
    name: "Yellow Scalp Comfort Shampoo - Sensitive Scalp 500 ml",
    price: "₡23.000",
    image: yellowComfortShampooImg,
    description: "Champú calmante profesional para cuero cabelludo sensible. Limpia con delicadeza, reduce rojeces y proporciona un alivio reconfortante inmediato.",
    benefits: [
      "Alivio inmediato y reducción de la irritación del cuero cabelludo",
      "Formulado con Rambután y Jengibre 100% de origen natural",
      "Limpia suavemente mientras hidrata y protege la fibra"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "yellow_scalp_energy",
    brand: "Yellow Professional",
    name: "Yellow Scalp Energy Shampoo - Hair Loss Prevention 500 ml",
    price: "₡23.000",
    image: yellowEnergyShampooImg,
    description: "Champú fortificante anticaída profesional. Estimula el cuero cabelludo, fortalece la fibra capilar desde la raíz y previene la caída del cabello.",
    benefits: [
      "Fórmula fortificante que estimula el crecimiento del cabello",
      "Enriquecido con Rambután y Albahaca 100% naturales",
      "Aporta energía, densidad, cuerpo y vitalidad al cabello débil"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "yellow_nourishing_shampoo",
    brand: "Yellow Professional",
    name: "Yellow Nutritive Nourishing Shampoo - Dry Hair 500 ml",
    price: "₡23.000",
    image: yellowNourishingShampooImg,
    description: "Champú nutritivo profesional para cabello seco. Limpia con delicadeza mientras nutre e hidrata en profundidad, aportando suavidad y brillo extraordinarios.",
    benefits: [
      "Nutre e hidrata intensamente la fibra capilar sin apelmazar",
      "Enriquecido con Aceite de Argán y Aceite de Coco 100% naturales",
      "Aporta un brillo radiante, sedosidad al tacto y máxima manejabilidad"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "cadiveu_brasil_cacau_conditioner",
    brand: "Cadiveu Professional",
    name: "Brasil Cacau Anti Frizz Conditioner 300 ml",
    price: "₡17.000",
    image: cadiveuConditionerImg,
    description: "Acondicionador anti-frizz de uso diario para cabellos rebeldes y encrespados. Formulado con Queratina, Cacau y D-Pantenol para un cabello liso, suave y brillante.",
    benefits: [
      "Control absoluto del frizz y efecto liso duradero",
      "Fórmula enriquecida con Queratina, Cacau y D-Pantenol",
      "Aporta suavidad extrema, sedosidad y brillo radiante"
    ],
    inStock: true,
    category: "acondicionador"
  },
  {
    id: "cadiveu_brasil_cacau_primer",
    brand: "Cadiveu Professional",
    name: "Brasil Cacau Primer Pre-Styling Leave-In 110 ml",
    price: "₡14.000",
    image: cadiveuPrimerImg,
    description: "Tratamiento pre-peinado leave-in multifuncional con protección térmica. Crea una barrera protectora contra la humedad y el daño térmico, eliminando el frizz y aportando brillo.",
    benefits: [
      "Protección térmica de alto rendimiento y anti-humedad",
      "Fórmula leave-in ligera con Queratina, Cacau y D-Pantenol",
      "Facilita el peinado, elimina el frizz y aporta brillo sedoso"
    ],
    inStock: true,
    category: "estilizado"
  },
  {
    id: "cadiveu_brasil_cacau_shampoo",
    brand: "Cadiveu Professional",
    name: "Brasil Cacau Anti Frizz Shampoo 300 ml",
    price: "₡16.000",
    image: cadiveuShampooImg,
    description: "Champú anti-frizz de uso diario para cabellos rebeldes y encrespados. Limpia con delicadeza mientras regenera la fibra capilar, eliminando el frizz y aportando una suavidad excepcional.",
    benefits: [
      "Limpia suavemente controlando el frizz de manera eficaz",
      "Enriquecido con Queratina, Cacau natural y D-Pantenol",
      "Prepara el cabello para un tratamiento liso de larga duración"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "moroccanoil_body_scrub",
    brand: "Moroccanoil",
    name: "Moroccanoil Body Polishing Scrub - Hydrating Exfoliation",
    price: "₡10.000",
    image: moroccanoilBodyScrubImg,
    description: "Exfoliante corporal nutritivo y altamente hidratante. Contiene polvo de cáscara de argán y aceite de argán para pulir suavemente la piel, dejándola increíblemente suave, renovada y sedosa.",
    benefits: [
      "Exfoliación suave pero efectiva con polvo de cáscara de Argán",
      "Nutre profundamente gracias al Aceite de Argán antioxidante",
      "Revela una piel suave, revitalizada, luminosa e intensamente hidratada"
    ],
    inStock: true,
    category: "corporal"
  },
  {
    id: "loreal_metal_detox_mask",
    brand: "L'Oréal Professionnel",
    name: "Serie Expert Metal Detox Masque 250 ml",
    price: "₡27.000",
    image: lorealMetalDetoxMaskImg,
    description: "Mascarilla protectora anti-depósito de metales para después de la coloración o balayage. Protege la fibra de los depósitos de partículas tras cualquier servicio de color, balayage o decoloración.",
    benefits: [
      "87% menos riesgo de rotura del cabello",
      "Resultado de color 100% optimizado y de larga duración",
      "Brillo radiante con nutrición profunda y alta manejabilidad"
    ],
    inStock: true,
    category: "mascarilla"
  },
  {
    id: "moroccanoil_intense_hydrating_mask",
    brand: "Moroccanoil",
    name: "Intense Hydrating Mask 250 ml",
    price: "₡38.500",
    image: moroccanoilHydratingMaskImg,
    description: "Mascarilla de hidratación profunda de alto rendimiento para cabellos secos de medio a grueso. Enriquecida con aceite de argán rico en antioxidantes para hidratar y acondicionar profundamente.",
    benefits: [
      "Hidratación profunda y acondicionamiento intenso",
      "Mejora significativamente la textura, elasticidad y brillo",
      "Fórmula rica con aceite de argán para revitalizar el cabello"
    ],
    inStock: true,
    category: "mascarilla"
  },
  {
    id: "biokera_yellow_shot_curly_cream",
    brand: "Biokera Natura",
    name: "Fresh Yellow Shot Curly Cream 300 ml",
    price: "₡21.000",
    image: biokeraYellowShotCurlyCreamImg,
    description: "Crema para definición de rizos formulada bajo el método curly con un 98% de ingredientes de origen natural. Enriquecida con cóctel amarillo (plátano y ginseng) para nutrir, definir y eliminar el frizz.",
    benefits: [
      "Definición perfecta y elástica de rizos y ondas sin apelmazar",
      "Fórmula natural con plátano y ginseng para hidratación profunda",
      "Apto para el Método Curly y libre de sulfatos y siliconas"
    ],
    inStock: true,
    category: "estilizado"
  },
  {
    id: "salerm_wheat_germ_mask",
    brand: "Salerm Cosmetics",
    name: "Mascarilla Capilar al Germen de Trigo 200 ml",
    price: "₡28.000",
    image: salermWheatGermMaskImg,
    description: "Mascarilla capilar nutritiva recomendada para cabellos secos o dañados. Enriquecida con aceite de germen de trigo y Provitamina B5 para devolver la vitalidad, hidratación y brillo al cabello.",
    benefits: [
      "Nutrición intensiva para cabellos extremadamente secos o maltratados",
      "Fórmula con germen de trigo natural and Provitamina B5",
      "Efecto revitalizante que devuelve la elasticidad, suavidad y brillo"
    ],
    inStock: true,
    category: "mascarilla"
  },
  {
    id: "biokera_yellow_shot_mask",
    brand: "Biokera Natura",
    name: "Fresh Yellow Shot Mask 250 ml",
    price: "₡22.500",
    image: biokeraYellowShotMaskImg,
    description: "Mascarilla capilar reparadora y protectora formulada con un 97% de ingredientes de origen natural. Diseñada con un cóctel amarillo de plátano y ginseng para nutrir intensamente y proteger la fibra.",
    benefits: [
      "Reparación intensiva y protección profunda de la fibra capilar",
      "Fórmula natural con plátano y ginseng que nutre y aporta elasticidad",
      "Libre de sulfatos y parabenos, ideal para revitalizar cabellos dañados"
    ],
    inStock: true,
    category: "mascarilla"
  },
  {
    id: "biokera_green_shot_balsam",
    brand: "Biokera Natura",
    name: "Fresh Green Shot Balsam 300 ml",
    price: "₡23.500",
    image: biokeraGreenShotBalsamImg,
    description: "Bálsamo capilar hidratante y desintoxicante con un 97% de ingredientes de origen natural. Enriquecido con cóctel verde (manzana, aloe vera y menta) para purificar, refrescar e hidratar.",
    benefits: [
      "Acción hidratante, acondicionadora y desenredante inmediata",
      "Efecto desintoxicante y purificante para un cabello más ligero",
      "Enriquecido con manzana ácida, aloe vera y menta refrescante"
    ],
    inStock: true,
    category: "acondicionador"
  },
  {
    id: "biokera_oily_hair_shampoo",
    brand: "Salerm Cosmetics",
    name: "Biokera Specific Oily Hair Shampoo 300 ml",
    price: "₡20.500",
    image: biokeraOilyHairShampooImg,
    description: "Champú específico para regular y normalizar el exceso de grasa en el cuero cabelludo. Limpia profundamente respetando el pH fisiológico, dejando el cabello fresco, ligero y con volumen natural.",
    benefits: [
      "Regula eficazmente la producción de sebo en el cuero cabelludo",
      "Limpia profundamente y aporta frescura duradera",
      "Fórmula suave que deja el cabello suelto, ligero y brillante"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "biokera_oily_hair_mask",
    brand: "Salerm Cosmetics",
    name: "Biokera Specific Oily Hair Mask 200 ml",
    price: "₡23.500",
    image: biokeraOilyHairMaskImg,
    description: "Mascarilla purificante y equilibrante específica para cabello graso. Ayuda a prolongar el tiempo entre lavados regulando el exceso de grasa mientras hidrata la fibra sin apelmazar.",
    benefits: [
      "Purifica intensamente el cuero cabelludo y la fibra capilar",
      "Control del exceso de grasa sin restar hidratación ni volumen",
      "Facilita el desenredado y aporta suavidad y ligereza natural"
    ],
    inStock: true,
    category: "mascarilla"
  },
  {
    id: "biokera_dandruff_mask",
    brand: "Salerm Cosmetics",
    name: "Biokera Specific Dandruff Mask 200 ml",
    price: "₡21.000",
    image: biokeraDandruffMaskImg,
    description: "Mascarilla capilar purificante de acción intensiva anticaspa. Ayuda a normalizar el ciclo de descamación celular, hidratando el cuero cabelludo y eliminando la caspa de forma prolongada.",
    benefits: [
      "Combate de manera eficaz y duradera la descamación y caspa",
      "Calma el cuero cabelludo sensible, aliviando el picor y la irritación",
      "Fórmula acondicionadora que aporta brillo, suavidad y elasticidad"
    ],
    inStock: true,
    category: "mascarilla"
  },
  {
    id: "loreal_silver_shampoo",
    brand: "L'Oréal Professionnel",
    name: "Serie Expert Silver Shampoo 300 ml",
    price: "₡18.000",
    image: lorealSilverShampooImg,
    description: "Champú perfeccionador y neutralizador para cabellos grises, blancos o rubios platinados. Elimina eficazmente los reflejos amarillos indeseados.",
    benefits: [
      "Neutraliza los tonos amarillos en cabellos blancos o platinados",
      "Enriquecido con aminoácidos y agentes protectores",
      "Aporta suavidad extrema y un brillo frío impecable"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "loreal_silver_conditioner",
    brand: "L'Oréal Professionnel",
    name: "Serie Expert Silver Conditioner 200 ml",
    price: "₡19.500",
    image: lorealSilverConditionerImg,
    description: "Acondicionador suavizante e iluminador con pigmentos azules y violetas. Diseñado para nutrir el cabello mientras neutraliza subtonos cálidos y amarillos.",
    benefits: [
      "Nutre profundamente aportando ligereza y elasticidad",
      "Potencia el reflejo frío y luminoso del cabello platinado",
      "Facilita instantáneamente el peinado y aporta sedosidad"
    ],
    inStock: true,
    category: "acondicionador"
  },
  {
    id: "loreal_absolut_repair_conditioner",
    brand: "L'Oréal Professionnel",
    name: "Serie Expert Absolut Repair Conditioner 200 ml",
    price: "₡19.500",
    image: lorealAbsolutRepairConditionerImg,
    description: "Acondicionador de reparación instantánea para cabellos muy dañados o debilitados. Reestructura la fibra capilar aportándole un tacto ligero.",
    benefits: [
      "Reparación instantánea y visible de la superficie capilar",
      "Fórmula ligera con quinoa dorada y proteínas",
      "Reduce el daño superficial en un 77% sin aportar peso"
    ],
    inStock: true,
    category: "acondicionador"
  },
  {
    id: "loreal_vitamino_color_shampoo",
    brand: "L'Oréal Professionnel",
    name: "Serie Expert Vitamino Color Shampoo 300 ml",
    price: "₡18.000",
    image: lorealVitaminoColorShampooImg,
    description: "Champú fijador del color y perfeccionador del brillo para cabellos teñidos. Protege la fibra contra el desvanecimiento del color.",
    benefits: [
      "Prolonga la duración e intensidad del color hasta por 8 semanas",
      "Fórmula profesional antioxidante con resveratrol",
      "Limpia suavemente aportando brillo y luminosidad extrema"
    ],
    inStock: true,
    category: "shampoo"
  },
  {
    id: "tec_italy_scultore_fine",
    brand: "Tec Italy",
    name: "Scultore Fine Styling Liquid Gel 300 ml",
    price: "₡15.000",
    image: tecItalyScultoreFineImg,
    description: "Gel líquido de estilizado y modelado profesional. Aporta una fijación flexible y definición excepcional, ideal para definir rizos y controlar el frizz.",
    benefits: [
      "Define y esculpe rizos y ondas con caída natural",
      "Contiene extracto de girasol y aminoácidos de trigo",
      "Fórmula acondicionadora que no deja residuos pesados"
    ],
    inStock: true,
    category: "estilizado"
  },
  {
    id: "tec_italy_due_faccetta_giorno",
    brand: "Tec Italy",
    name: "Due Faccetta Giorno Per Giorno Treatment 300 ml",
    price: "₡16.000",
    image: tecItalyDueFaccettaGiornoImg,
    description: "Tratamiento bifásico hidratante y reconstructor de uso diario. Diseñado para desenredar instantáneamente y proteger el cabello de factores externos.",
    benefits: [
      "Hidratación intensiva inmediata con acción desenredante",
      "Protección contra rayos UV y herramientas térmicas",
      "Enriquecido con proteínas de trigo y aceites naturales"
    ],
    inStock: true,
    category: "mascarilla"
  },
  {
    id: "tec_italy_due_faccetta_massimo",
    brand: "Tec Italy",
    name: "Due Faccetta Massimo Treatment 300 ml",
    price: "₡16.000",
    image: tecItalyDueFaccettaMassimoImg,
    description: "Tratamiento hidratante y reconstructor bifásico de acción profunda para cabellos sobreprocesados o maltratados.",
    benefits: [
      "Nutrición y reestructuración profunda de la hebra",
      "Sella la cutícula aportando suavidad y brillo tridimensional",
      "Fórmula ligera protectora enriquecida con aminoácidos"
    ],
    inStock: true,
    category: "mascarilla"
  }
];

export default function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [activeProductCategory, setActiveProductCategory] = useState<string>('todos');
  const [productSearchQuery, setProductSearchQuery] = useState<string>('');

  // Manage selection
  const handleToggleService = (service: Service) => {
    setSelectedServices(prev => {
      const exists = prev.some(s => s.id === service.id);
      if (exists) {
        return prev.filter(s => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleRemoveServiceId = (id: string) => {
    setSelectedServices(prev => prev.filter(s => s.id !== id));
  };

  const handleClearAllSelected = () => {
    setSelectedServices([]);
  };

  // Quick category selection mapper from instagram highlights
  const handleHighlightClick = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('uña')) {
      setActiveCategoryFilter('uñas');
      scrollToSection('servicios');
    } else if (lowerTitle.includes('trata') || lowerTitle.includes('cabello')) {
      setActiveCategoryFilter('cabello');
      scrollToSection('servicios');
    } else if (lowerTitle.includes('barber') || lowerTitle.includes('barba')) {
      setActiveCategoryFilter('barberia');
      scrollToSection('servicios');
    } else if (lowerTitle.includes('contact') || lowerTitle.includes('reser')) {
      setIsBookingModalOpen(true);
    }
  };

  // Helper smooth scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter services
  const filteredServices = activeCategoryFilter === 'todos'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategoryFilter);

  // Format colon currency helper
  const totalSelectedPrice = selectedServices.reduce((acc, curr) => acc + curr.price, 0);
  const formatPrice = (val: number) => {
    if (val === 0) return 'Por Consultar';
    return new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(val);
  };

  // Map icons for highlight stories
  const renderHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      default: return <Phone className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#FAF7F5] text-neutral-800 font-sans min-h-screen relative overflow-x-hidden selection:bg-editorial-camel/20 selection:text-editorial-charcoal">
      
      {/* Header */}
      <Header onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section id="inicio" className="relative pt-6 pb-20 md:py-24 lg:py-32 overflow-hidden bg-editorial-sand border-b border-black/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square rounded-full bg-editorial-camel/5 blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[45%] aspect-square rounded-full bg-editorial-blush/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 border border-editorial-camel/30 bg-white px-3.5 py-1.5 rounded-none shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full bg-editorial-camel opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-editorial-camel"></span>
              </span>
              <span className="text-[10px] font-bold text-editorial-camel uppercase tracking-widest font-sans">
                Especialistas en Color Orgánico & Belleza
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-editorial-charcoal tracking-tight leading-none">
                La elegancia y cuidado <br />
                <span className="text-editorial-camel italic font-serif">
                  que tu cabello merece
                </span>
              </h1>
              <p className="text-xs md:text-sm text-neutral-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
                Bienvenida a <strong>NYC Salón Beauty Supply</strong> en Escazú. Creamos estilos impecables respetando la salud de tu fibra capilar, fusionando alta colorimetría con exclusivos tratamientos orgánicos y profesionales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-editorial-charcoal text-white hover:bg-editorial-camel hover:text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-colors shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
              >
                Reservar Mi Cita <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="border border-editorial-charcoal text-editorial-charcoal hover:bg-editorial-charcoal hover:text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-colors flex items-center justify-center gap-2"
              >
                Ver Menú de Servicios
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-black/10 max-w-md mx-auto lg:mx-0 text-left">
              <div>
                <p className="font-sans font-bold text-2xl md:text-3xl text-editorial-camel">100%</p>
                <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">Productos Orgánicos</p>
              </div>
              <div>
                <p className="font-sans font-bold text-2xl md:text-3xl text-editorial-camel">107+</p>
                <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">Publicaciones</p>
              </div>
              <div>
                <p className="font-sans font-bold text-2xl md:text-3xl text-editorial-camel">Escazú</p>
                <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">San Rafael, Costa Rica</p>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none aspect-[4/3] sm:aspect-square md:aspect-[16/11] rounded-none overflow-hidden shadow-xl border border-black/10">
              <img
                src={SALON_IMAGES.hero}
                alt="NYC Salón Beauty Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              
              {/* Overlay contact indicator */}
              <div className="absolute bottom-5 left-5 right-5 bg-white p-4 rounded-none flex justify-between items-center shadow-xs border border-black/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">Llámanos Hoy</span>
                    <span className="text-sm font-bold text-editorial-charcoal">Tel: 7104-9478</span>
                  </div>
                </div>
                <a
                  href="tel:71049478"
                  className="bg-editorial-charcoal hover:bg-editorial-camel text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-none transition-colors shadow-xs"
                >
                  Llamar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Story Highlights Style Section */}
      <section className="bg-white border-y border-black/5 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-1.5 mb-6 text-center">
            <span className="text-[9px] text-editorial-camel font-bold uppercase tracking-widest font-sans">Nuestras Historias</span>
            <h3 className="font-display font-medium text-lg text-editorial-charcoal tracking-tight">Especialidades Destacadas</h3>
          </div>

          {/* Staggered Highlights circles */}
          <div className="flex items-center justify-start md:justify-center gap-6 md:gap-10 overflow-x-auto pb-4 scrollbar-none px-4">
            {HIGHLIGHTS.map((highlight) => (
              <button
                key={highlight.id}
                onClick={() => handleHighlightClick(highlight.title)}
                className="flex flex-col items-center gap-2 group shrink-0 focus:outline-none cursor-pointer"
              >
                {/* Insta Ring Circle */}
                <div className="w-[72px] h-[72px] rounded-full p-[2px] bg-editorial-camel group-hover:scale-105 transition-all duration-300">
                  <div className="w-full h-full bg-white rounded-full p-[2px] flex items-center justify-center">
                    <div className="w-full h-full bg-editorial-sand text-editorial-camel rounded-full flex items-center justify-center group-hover:bg-editorial-camel group-hover:text-white transition-all duration-300">
                      {renderHighlightIcon(highlight.icon)}
                    </div>
                  </div>
                </div>
                {/* Name */}
                <div className="text-center">
                  <span className="block text-xs font-semibold text-editorial-charcoal leading-tight group-hover:text-editorial-camel transition-colors">
                    {highlight.title}
                  </span>
                  <span className="block text-[8px] uppercase tracking-wider text-neutral-400 font-medium font-sans">Ver Info</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Detail Bento Grid Section */}
      <section id="especialidades" className="py-20 bg-[#FAF7F5] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-editorial-camel text-[10px] font-bold uppercase tracking-widest font-sans">
              {WHY_CHOOSE_CONTENT.sectionSubtitle}
            </span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-editorial-charcoal tracking-tight leading-tight">
              {WHY_CHOOSE_CONTENT.sectionTitle}
            </h2>
            <p className="text-xs md:text-sm text-neutral-600">
              {WHY_CHOOSE_CONTENT.sectionDescription}
            </p>
          </div>

          {/* Specialties Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_CHOOSE_CONTENT.cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-none border border-black/5 overflow-hidden shadow-xs group hover:border-editorial-camel/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-editorial-charcoal text-editorial-camel text-[9px] font-bold px-3 py-1 rounded-none uppercase tracking-widest">
                      {card.categoryTag}
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-display font-semibold text-lg text-editorial-charcoal">
                      {card.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => {
                      setActiveCategoryFilter(card.categoryFilter);
                      scrollToSection('servicios');
                    }}
                    className="text-[10px] uppercase tracking-widest font-bold text-editorial-camel hover:text-editorial-charcoal flex items-center gap-1 group cursor-pointer"
                  >
                    {card.buttonText} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Catalog and Menu Section */}
      <section id="servicios" className="py-20 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-editorial-camel text-[10px] font-bold uppercase tracking-widest font-sans">Menú de Especialidades</span>
              <h2 className="font-display font-medium text-3xl text-editorial-charcoal tracking-tight leading-tight">
                Nuestros Servicios de Salón
              </h2>
              <p className="text-xs text-neutral-600 max-w-xl font-sans">
                Haz clic en cualquier servicio para agregarlo a tu cotización interactiva de abajo. Podrás programar tu fecha favorita y reservar mediante WhatsApp en un solo clic.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'cabello', label: 'Cabello & Estilo' },
                { id: 'uñas', label: 'Uñas & Gel' },
                { id: 'barberia', label: 'Barbería' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategoryFilter(tab.id);
                    setShowAllServices(false);
                  }}
                  className={`text-[10px] uppercase tracking-widest font-bold px-4 py-2.5 rounded-none border transition-all cursor-pointer ${
                    activeCategoryFilter === tab.id
                      ? 'bg-editorial-charcoal text-white border-editorial-charcoal'
                      : 'bg-white text-editorial-charcoal border-neutral-200 hover:border-editorial-camel hover:text-editorial-camel'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllServices ? filteredServices : filteredServices.slice(0, 9)).map(service => {
              const isSelected = selectedServices.some(s => s.id === service.id);
              return (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSelected={isSelected}
                  onToggleSelect={() => handleToggleService(service)}
                />
              );
            })}
          </div>

          {/* View More / View Less Toggle Button */}
          {filteredServices.length > 9 && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="flex items-center gap-2 bg-white hover:bg-[#FAF7F5] text-editorial-charcoal border border-neutral-200 hover:border-editorial-camel text-[10px] uppercase tracking-widest font-bold px-6 py-3 transition-all duration-300 cursor-pointer"
              >
                {showAllServices ? (
                  <>
                    Mostrar menos servicios
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 rotate-180 text-editorial-camel" />
                  </>
                ) : (
                  <>
                    Ver más servicios (+{filteredServices.length - 9} disponibles)
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 text-editorial-camel" />
                  </>
                )}
              </button>
            </div>
          )}

          {/* Quick Notice */}
          <div className="bg-editorial-sand rounded-none p-5 border border-editorial-camel/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-editorial-charcoal">
              <Award className="w-5 h-5 text-editorial-camel shrink-0" />
              <span className="font-medium">¿No encuentras el servicio capilar o diseño exacto? Contáctanos y cotizamos tu requerimiento a la medida.</span>
            </div>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-editorial-charcoal hover:bg-editorial-camel text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-none transition-colors shrink-0 cursor-pointer"
            >
              Consultar Personalizado
            </button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promociones" className="py-20 bg-gradient-to-b from-white to-[#FAF7F5] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <PromoCarousel />
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-24 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-editorial-camel text-[10px] font-bold uppercase tracking-widest font-sans">Boutique Profesional</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-editorial-charcoal tracking-tight leading-tight">
              Línea de Productos Premium
            </h2>
            <p className="text-xs md:text-sm text-neutral-500 font-sans leading-relaxed">
              Lleva el cuidado de salón de alta gama a la comodidad de tu hogar. Fórmulas de exclusividad profesional recomendadas por nuestros expertos en coloración.
            </p>
          </div>

          {/* Interactive Filters & Search Bar Control Panel */}
          <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between border-b border-black/5 pb-6">
              
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 shrink-0 -mx-4 px-4 lg:mx-0 lg:px-0">
                {[
                  { id: 'todos', name: 'Todos', count: PRODUCTS.length },
                  { id: 'shampoo', name: 'Shampoos', count: PRODUCTS.filter(p => p.category === 'shampoo').length },
                  { id: 'acondicionador', name: 'Acondicionadores', count: PRODUCTS.filter(p => p.category === 'acondicionador').length },
                  { id: 'mascarilla', name: 'Mascarillas & Trats.', count: PRODUCTS.filter(p => p.category === 'mascarilla').length },
                  { id: 'estilizado', name: 'Estilizado & Sérums', count: PRODUCTS.filter(p => p.category === 'estilizado').length },
                  { id: 'corporal', name: 'Corporal', count: PRODUCTS.filter(p => p.category === 'corporal').length },
                ].map((cat) => {
                  const isActive = activeProductCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveProductCategory(cat.id);
                      }}
                      className={`px-4 py-2 text-xs font-sans tracking-wide transition-all duration-300 flex items-center gap-2 rounded-none whitespace-nowrap cursor-pointer ${
                        isActive
                          ? "bg-editorial-charcoal text-white font-bold"
                          : "bg-[#FAF7F5] text-neutral-600 hover:bg-editorial-camel/10 hover:text-editorial-charcoal border border-black/5"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-neutral-200 text-neutral-600"
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Live Search Input */}
              <div className="relative w-full lg:max-w-xs shrink-0">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar producto..."
                  value={productSearchQuery}
                  onChange={(e) => setProductSearchQuery(e.target.value)}
                  className="w-full bg-[#FAF7F5] border border-black/10 focus:border-editorial-camel text-xs px-9 py-2.5 rounded-none outline-hidden font-sans placeholder-neutral-400 text-editorial-charcoal transition-colors"
                />
                {productSearchQuery && (
                  <button
                    onClick={() => setProductSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-editorial-charcoal transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Render Products Grouped in Beautiful Sections */}
          <div className="space-y-16">
            {(() => {
              // 1. Filter products by search and category
              const filteredProducts = PRODUCTS.filter(product => {
                const matchesSearch = 
                  product.name.toLowerCase().includes(productSearchQuery.toLowerCase()) ||
                  product.brand.toLowerCase().includes(productSearchQuery.toLowerCase()) ||
                  product.description.toLowerCase().includes(productSearchQuery.toLowerCase());
                
                const matchesCategory = activeProductCategory === 'todos' || product.category === activeProductCategory;
                
                return matchesSearch && matchesCategory;
              });

              // Section metadata map
              const SECTION_METADATA: { [key: string]: { title: string; subtitle: string; description: string; accentClass: string } } = {
                shampoo: {
                  title: "Shampoos & Limpieza Capilar",
                  subtitle: "EQUILIBRIO, HIGIENE Y PROTECCIÓN DIARIA",
                  description: "Limpia y purifica delicadamente la fibra y el cuero cabelludo, preparando el cabello para tratamientos más profundos.",
                  accentClass: "border-amber-500/50 bg-amber-50/40"
                },
                acondicionador: {
                  title: "Acondicionadores & Bálsamos",
                  subtitle: "SELLADO DE CUTÍCULA, BRILLO Y PREVENCIÓN DE DAÑO",
                  description: "Cuidado de uso frecuente que desenreda instantáneamente, hidrata y bloquea los efectos del daño diario.",
                  accentClass: "border-blue-500/50 bg-blue-50/40"
                },
                mascarilla: {
                  title: "Mascarillas & Tratamientos Reconstructores",
                  subtitle: "REPARACIÓN INTERNA INTENSIVA Y NUTRICIÓN COMPLETA",
                  description: "Tratamientos profesionales de alta penetración que restauran la queratina, hidratación y elasticidad natural.",
                  accentClass: "border-purple-500/50 bg-purple-50/40"
                },
                estilizado: {
                  title: "Estilizado, Sérums & Finalizadores",
                  subtitle: "MOLDEADO, CONTROL DE ENCRESPAMIENTO Y ACABADO SEDOSO",
                  description: "Sérums sublimes, geles líquidos y sprays térmicos diseñados para esculpir con precisión y aportar brillo radiante.",
                  accentClass: "border-rose-500/50 bg-rose-50/40"
                },
                corporal: {
                  title: "Cuidado Corporal Premium",
                  subtitle: "EXFOLIACIÓN E HIDRATACIÓN INTEGRAL DE LUJO",
                  description: "Formulaciones finas con extractos naturales y aceites nutritivos para renovar y pulir tu piel dejándola tersa y perfumada.",
                  accentClass: "border-emerald-500/50 bg-emerald-50/40"
                }
              };

              // Categories order to map
              const categoriesToRender = activeProductCategory === 'todos'
                ? ['shampoo', 'acondicionador', 'mascarilla', 'estilizado', 'corporal']
                : [activeProductCategory];

              const sectionsWithProducts = categoriesToRender.filter(catId => 
                filteredProducts.some(p => p.category === catId)
              );

              if (sectionsWithProducts.length === 0) {
                return (
                  <div className="text-center py-16 bg-[#FAF7F5] border border-black/5 space-y-4 rounded-none max-w-xl mx-auto">
                    <p className="text-sm text-neutral-500 font-sans">No se encontraron productos que coincidan con tu búsqueda.</p>
                    <button
                      onClick={() => {
                        setProductSearchQuery('');
                        setActiveProductCategory('todos');
                      }}
                      className="bg-editorial-charcoal text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-editorial-camel transition-colors rounded-none cursor-pointer"
                    >
                      Restablecer Filtros
                    </button>
                  </div>
                );
              }

              return sectionsWithProducts.map(catId => {
                const sectionMeta = SECTION_METADATA[catId];
                const sectionProducts = filteredProducts.filter(p => p.category === catId);

                return (
                  <div key={catId} className="space-y-6 scroll-mt-24">
                    
                    {/* Section Label Header */}
                    <div className={`p-6 border-l-4 ${sectionMeta.accentClass} flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-editorial-camel font-sans block">
                          {sectionMeta.subtitle}
                        </span>
                        <h3 className="font-display font-medium text-lg md:text-xl text-editorial-charcoal tracking-tight">
                          {sectionMeta.title}
                        </h3>
                        <p className="text-[11px] text-neutral-500 max-w-3xl font-sans leading-relaxed">
                          {sectionMeta.description}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-neutral-400 whitespace-nowrap shrink-0 bg-white/80 border border-black/5 px-2.5 py-1">
                        {sectionProducts.length} {sectionProducts.length === 1 ? 'producto' : 'productos'}
                      </span>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {sectionProducts.map((product) => (
                        <div 
                          key={product.id}
                          className="group flex flex-col bg-white border border-neutral-200 hover:border-editorial-camel/60 hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden p-4 relative"
                        >
                          {/* Inner container to group nicely */}
                          <div className="space-y-4 flex-1 flex flex-col justify-between">
                            
                            <div className="space-y-3">
                              {/* Product Image Container (Casilla de Imagen) */}
                              <div className="aspect-square w-full bg-neutral-50 rounded-lg overflow-hidden border border-neutral-100 relative group-hover:shadow-xs transition-shadow duration-300">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  referrerPolicy="no-referrer"
                                />
                                {/* Soft badge on the image itself */}
                                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2 py-0.5 border border-black/5 rounded-full">
                                  <span className="text-[8px] text-emerald-600 font-bold uppercase tracking-widest font-sans flex items-center gap-1">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> En Stock
                                  </span>
                                </div>
                              </div>

                              {/* Brand and category info */}
                              <div className="space-y-1">
                                <span className="text-editorial-camel text-[9px] font-bold uppercase tracking-widest font-sans block">
                                  {product.brand}
                                </span>
                                <h3 className="font-display font-bold text-sm text-editorial-charcoal leading-snug group-hover:text-editorial-camel transition-colors min-h-[2.5rem] line-clamp-2">
                                  {product.name}
                                </h3>
                              </div>

                              {/* Price Division Box */}
                              <div className="bg-[#FAF7F5] border border-black/5 p-2.5 rounded-lg flex items-center justify-between">
                                <div className="flex flex-col">
                                  <span className="text-[8px] text-neutral-400 font-sans uppercase tracking-wider">Precio Especial</span>
                                  <span className="font-sans font-extrabold text-base text-editorial-charcoal">{product.price}</span>
                                </div>
                                <span className="text-[8px] bg-neutral-200/50 text-neutral-600 px-1.5 py-0.5 rounded-sm font-sans font-bold">IVA Incluido</span>
                              </div>

                              {/* Description Box with comfortable line height */}
                              <p className="text-[11px] text-neutral-500 leading-relaxed font-sans min-h-[3rem] line-clamp-3">
                                {product.description}
                              </p>
                            </div>

                            <div className="space-y-4">
                              {/* Benefits List (Casilla de Beneficios) */}
                              <div className="pt-3 border-t border-dashed border-neutral-200 space-y-2">
                                <span className="text-[8px] text-neutral-400 font-bold uppercase tracking-widest block">Beneficios Clave</span>
                                <div className="space-y-1.5">
                                  {product.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-1.5 text-[10px] text-neutral-600 leading-tight">
                                      <Check className="w-3 h-3 text-editorial-camel shrink-0 mt-0.5" />
                                      <span className="font-sans">{benefit}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Action Buttons (Casilla de Acciones) */}
                              <div className="pt-3 border-t border-neutral-100 space-y-2">
                                <a
                                  href={`https://wa.me/50671049478?text=${encodeURIComponent(`Hola NYC Salón Beauty Supply! Me interesa comprar el producto ${product.name} (${product.price}) que vi en su sitio web.`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full bg-editorial-charcoal text-white hover:bg-editorial-camel hover:text-white font-bold text-[9px] uppercase tracking-widest py-2.5 rounded-lg transition-all text-center shadow-xs flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-md hover:-translate-y-0.5"
                                >
                                  Comprar WhatsApp <ArrowRight className="w-3 h-3" />
                                </a>
                                <button
                                  onClick={() => {
                                    const msg = `Hola! Quisiera reservar para retirar en el salón el producto ${product.name} (${product.price}).`;
                                    window.open(`https://wa.me/50671049478?text=${encodeURIComponent(msg)}`, '_blank');
                                  }}
                                  className="w-full border border-neutral-200 text-neutral-600 hover:text-editorial-charcoal hover:bg-neutral-50 font-bold text-[9px] uppercase tracking-widest py-2 rounded-lg transition-all text-center cursor-pointer flex items-center justify-center gap-1"
                                >
                                  Reservar Retiro
                                </button>
                              </div>

                            </div>

                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                );
              });
            })()}
          </div>

        </div>
      </section>



      {/* Accordion FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <span className="text-editorial-camel text-[10px] font-bold uppercase tracking-widest font-sans">Preguntas Frecuentes</span>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-editorial-charcoal tracking-tight">
              Preguntas & Respuestas
            </h2>
            <p className="text-xs text-neutral-600 font-sans">
              ¿Tienes alguna duda sobre nuestros servicios de belleza, reservas o localización? Aquí aclaramos las principales consultas.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4 pt-2">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-black/5 rounded-none overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-editorial-sand/40 transition-colors cursor-pointer"
                  >
                    <span className="font-semibold text-sm md:text-base text-editorial-charcoal tracking-tight leading-tight">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-editorial-camel transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-neutral-600 leading-relaxed border-t border-black/5 font-sans">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Sticky selection bar indicator when services selected but not near cotizador */}
      <AnimatePresence>
        {selectedServices.length > 0 && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-lg bg-editorial-charcoal text-white p-4 rounded-none shadow-xl border border-white/10 flex items-center justify-between gap-4 font-sans"
          >
            <div className="flex flex-col">
              <span className="text-[9px] text-editorial-camel uppercase font-bold tracking-widest">Cita en Cotización</span>
              <span className="text-xs font-semibold">
                {selectedServices.length} {selectedServices.length === 1 ? 'servicio' : 'servicios'} seleccionado{selectedServices.length === 1 ? '' : 's'}
              </span>
              <span className="text-sm font-bold text-white font-mono">{formatPrice(totalSelectedPrice)}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleClearAllSelected}
                className="text-[10px] hover:text-editorial-camel uppercase font-bold tracking-widest px-2.5 py-2 rounded-none transition-all cursor-pointer"
              >
                Limpiar
              </button>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-editorial-camel hover:bg-white hover:text-editorial-camel text-[10px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-none transition-colors duration-200 border border-editorial-camel flex items-center gap-1 cursor-pointer"
              >
                Cotizar Ahora <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal Popup */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingModalOpen(false)}
              className="fixed inset-0 bg-editorial-charcoal/60 backdrop-blur-sm"
            />
            
            {/* Modal Box */}
            <div className="flex min-h-screen items-center justify-center p-4 relative pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                className="relative w-full max-w-2xl bg-white shadow-2xl border border-black/10 pointer-events-auto overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsBookingModalOpen(false)}
                  className="absolute top-5 right-5 z-50 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Form wrapper */}
                <EstimatorForm
                  selectedServices={selectedServices}
                  onRemoveService={handleRemoveServiceId}
                  onClearServices={handleClearAllSelected}
                />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
