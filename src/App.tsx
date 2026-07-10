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
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import EstimatorForm from './components/EstimatorForm';
import PromoCarousel from './components/PromoCarousel';
import Footer from './components/Footer';
import { SERVICES, FAQS, HIGHLIGHTS } from './data';
import { Service } from './types';
import { WHY_CHOOSE_CONTENT } from './why-choose/whyChooseData';

// Import image assets directly so Vite can bundle and hash them for production/Vercel
import hairImg from './assets/images/pelo coloracion.png';
import nailsImg from './assets/images/uñas.png';
import barberImg from './assets/images/barba.png';

// Real high-quality generated assets
const SALON_IMAGES = {
  hero: "/inicio/foto_inicio.png", // Located in /public/inicio/ for easy user replacement!
  hair: hairImg,
  nails: nailsImg,
  barber: barberImg,
  k18: "/productos/k18.png", // Located in the /public folder for easy user replacement!
};

const PRODUCTS = [
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
    inStock: true
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
    inStock: true
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
    inStock: true
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
    inStock: true
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
    inStock: true
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
    inStock: true
  }
];

export default function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

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
      <section id="productos" className="py-20 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-2">
            <span className="text-editorial-camel text-[10px] font-bold uppercase tracking-widest font-sans">Boutique Profesional</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-editorial-charcoal tracking-tight leading-tight">
              Línea de Productos Premium
            </h2>
            <p className="text-xs text-neutral-600 max-w-xl mx-auto font-sans">
              Lleva el cuidado de salón a la comodidad de tu hogar con fórmulas exclusivas de alta gama, recomendadas por nuestros expertos en color.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id}
                className="group flex flex-col bg-[#FAF7F5] border border-black/10 hover:border-editorial-camel/40 hover:shadow-md transition-all duration-300 rounded-none overflow-hidden"
              >
                {/* Product Image */}
                <div className="aspect-square w-full bg-white overflow-hidden border-b border-black/5 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-editorial-camel text-[8px] font-bold uppercase tracking-widest font-sans">
                        {product.brand}
                      </span>
                      <span className="text-[8px] text-emerald-600 font-bold uppercase tracking-widest font-sans flex items-center gap-1">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> En Stock
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-xs text-editorial-charcoal line-clamp-2 min-h-[2rem] leading-tight">
                      {product.name}
                    </h3>

                    <div className="flex items-baseline gap-1.5">
                      <span className="font-sans font-bold text-base text-editorial-charcoal">{product.price}</span>
                      <span className="text-[8px] text-neutral-400 font-sans">IVA Incluido</span>
                    </div>

                    <p className="text-[11px] text-neutral-500 leading-relaxed font-sans line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Benefits mini list */}
                  <div className="space-y-1 pt-2 border-t border-black/5">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-1 text-[10px] text-neutral-600">
                        <Check className="w-2.5 h-2.5 text-editorial-camel shrink-0" />
                        <span className="truncate">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="space-y-1.5 pt-2">
                    <a
                      href={`https://wa.me/50671049478?text=${encodeURIComponent(`Hola NYC Salón Beauty Supply! Me interesa comprar el producto ${product.name} que vi en su sitio web.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-editorial-charcoal text-white hover:bg-editorial-camel hover:text-white font-bold text-[9px] uppercase tracking-widest py-2 rounded-none transition-colors text-center shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                    >
                      Comprar WhatsApp <ArrowRight className="w-2.5 h-2.5" />
                    </a>
                    <button
                      onClick={() => {
                        const msg = `Hola! Quisiera reservar para retirar en el salón el producto ${product.name} (${product.price}).`;
                        window.open(`https://wa.me/50671049478?text=${encodeURIComponent(msg)}`, '_blank');
                      }}
                      className="w-full border border-editorial-charcoal text-editorial-charcoal hover:bg-editorial-charcoal hover:text-white font-bold text-[9px] uppercase tracking-widest py-1.5 rounded-none transition-colors text-center cursor-pointer"
                    >
                      Reservar Retiro
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
