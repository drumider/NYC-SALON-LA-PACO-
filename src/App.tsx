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
  Smile
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import EstimatorForm from './components/EstimatorForm';
import PromoCarousel from './components/PromoCarousel';
import Footer from './components/Footer';
import { SERVICES, FAQS, HIGHLIGHTS } from './data';
import { Service } from './types';

// Import image assets directly so Vite can bundle and hash them for production/Vercel
import heroImg from './assets/images/nyc_salon_hero_1782425071357.jpg';
import hairImg from './assets/images/nyc_salon_hair_1782425089522.jpg';
import nailsImg from './assets/images/nyc_salon_nails_1782425099196.jpg';
import barberImg from './assets/images/nyc_salon_barber_1782425109070.jpg';

// Real high-quality generated assets
const SALON_IMAGES = {
  hero: heroImg,
  hair: hairImg,
  nails: nailsImg,
  barber: barberImg,
};

export default function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
    } else if (lowerTitle.includes('capaci')) {
      setActiveCategoryFilter('capacitacion');
      scrollToSection('servicios');
    } else if (lowerTitle.includes('trata') || lowerTitle.includes('cabello')) {
      setActiveCategoryFilter('cabello');
      scrollToSection('servicios');
    } else if (lowerTitle.includes('barber')) {
      setActiveCategoryFilter('barberia');
      scrollToSection('servicios');
    } else if (lowerTitle.includes('contact') || lowerTitle.includes('reser')) {
      scrollToSection('cotizador');
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
      <Header />

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
                onClick={() => scrollToSection('cotizador')}
                className="bg-editorial-charcoal text-white hover:bg-editorial-camel hover:text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-colors shadow-xs flex items-center justify-center gap-2 group"
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
                    <span className="text-sm font-bold text-editorial-charcoal">Tel: 4034-5687</span>
                  </div>
                </div>
                <a
                  href="tel:40345687"
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
            <span className="text-editorial-camel text-[10px] font-bold uppercase tracking-widest font-sans">Elegancia & Excelencia</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-editorial-charcoal tracking-tight leading-tight">
              ¿Por qué elegir NYC Salón Beauty Supply?
            </h2>
            <p className="text-xs md:text-sm text-neutral-600">
              Diseñamos servicios personalizados utilizando marcas de calibre profesional y formulaciones orgánicas para un resultado sublime y respetuoso.
            </p>
          </div>

          {/* Specialties Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Color specialists card */}
            <div className="bg-white rounded-none border border-black/5 overflow-hidden shadow-xs group hover:border-editorial-camel/30 transition-all flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={SALON_IMAGES.hair}
                    alt="Especialistas en Color"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-editorial-charcoal text-editorial-camel text-[9px] font-bold px-3 py-1 rounded-none uppercase tracking-widest">
                    Color & Estilo
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-display font-semibold text-lg text-editorial-charcoal">Especialistas en Color</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Balayage, babylights, platinados y correcciones de color. Nuestro enfoque es lograr el tono soñado manteniendo la estructura de tu cabello impecablemente saludable.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => {
                    setActiveCategoryFilter('cabello');
                    scrollToSection('servicios');
                  }}
                  className="text-[10px] uppercase tracking-widest font-bold text-editorial-camel hover:text-editorial-charcoal flex items-center gap-1 group cursor-pointer"
                >
                  Ver Colorimetría <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Nails card */}
            <div className="bg-white rounded-none border border-black/5 overflow-hidden shadow-xs group hover:border-editorial-camel/30 transition-all flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={SALON_IMAGES.nails}
                    alt="Manicura y Pedicura Premium"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-editorial-charcoal text-editorial-camel text-[9px] font-bold px-3 py-1 rounded-none uppercase tracking-widest">
                    Uñas & Nail Art
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-display font-semibold text-lg text-editorial-charcoal">Uñas Acrílicas & Gel</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Uñas acrílicas esculpidas, semipermanente, esmaltado en gel y exclusivos diseños a mano alzada. Tu manicura se convertirá en un accesorio de moda de larga duración.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => {
                    setActiveCategoryFilter('uñas');
                    scrollToSection('servicios');
                  }}
                  className="text-[10px] uppercase tracking-widest font-bold text-editorial-camel hover:text-editorial-charcoal flex items-center gap-1 group cursor-pointer"
                >
                  Ver Diseños <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Barber card */}
            <div className="bg-white rounded-none border border-black/5 overflow-hidden shadow-xs group hover:border-editorial-camel/30 transition-all flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={SALON_IMAGES.barber}
                    alt="Barbería Caballero"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-editorial-charcoal text-editorial-camel text-[9px] font-bold px-3 py-1 rounded-none uppercase tracking-widest">
                    Barbería Profesional
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-display font-semibold text-lg text-editorial-charcoal">Corte & Cuidado de Barba</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Un espacio dedicado para caballeros. Cortes clásicos y modernos, y rituales tradicionales de barba con toalla caliente y productos que estimulan la piel y el vello facial.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => {
                    setActiveCategoryFilter('barberia');
                    scrollToSection('servicios');
                  }}
                  className="text-[10px] uppercase tracking-widest font-bold text-editorial-camel hover:text-editorial-charcoal flex items-center gap-1 group cursor-pointer"
                >
                  Ver Barbería <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

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
                { id: 'cabello', label: 'Cabello & Color' },
                { id: 'uñas', label: 'Uñas & Gel' },
                { id: 'barberia', label: 'Barbería' },
                { id: 'capacitacion', label: 'Capacitaciones' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategoryFilter(tab.id)}
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
            {filteredServices.map(service => {
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

          {/* Quick Notice */}
          <div className="bg-editorial-sand rounded-none p-5 border border-editorial-camel/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-editorial-charcoal">
              <Award className="w-5 h-5 text-editorial-camel shrink-0" />
              <span className="font-medium">¿No encuentras el servicio capilar o diseño exacto? Contáctanos y cotizamos tu requerimiento a la medida.</span>
            </div>
            <button
              onClick={() => scrollToSection('cotizador')}
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

      {/* Quote Estimator / Interactive Booking Section */}
      <section className="py-20 bg-[#FAF7F5] relative overflow-hidden border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Booking Left description side */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <span className="text-editorial-camel text-[10px] font-bold uppercase tracking-widest font-sans">Reservas Prácticas</span>
              <h2 className="font-display font-medium text-3xl md:text-4xl text-editorial-charcoal tracking-tight leading-none">
                Tu Experiencia Premium en NYC Salón
              </h2>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans">
                Queremos consentirte desde el primer instante. Rellena el cotizador con los servicios deseados y enviaremos una reserva directa a nuestro WhatsApp. Te confirmaremos tu hora y estilista en cuestión de minutos.
              </p>
            </div>

            {/* List of benefits */}
            <div className="space-y-4 text-xs font-medium">
              {[
                { title: 'Estilistas Certificados', desc: 'Atención personalizada por especialistas liderados por Gilma Hernández.' },
                { title: 'Productos Orgánicos & Premium', desc: 'Fórmulas cuidadosas libres de tóxicos que protegen tu salud capilar.' },
                { title: 'Ubicación Estratégica', desc: 'En Calle Guachipelín, Escazú. Parqueo privado seguro y gratuito.' },
                { title: 'Amenities Relax', desc: 'Disfruta de café premium, té relajante o agua fresca mientras te consentimos.' }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-none bg-editorial-camel/10 text-editorial-camel flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="font-bold text-editorial-charcoal font-display">{benefit.title}</h4>
                    <p className="text-neutral-500 font-normal mt-0.5 font-sans">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-none border border-black/5 shadow-xs max-w-sm">
              <ShieldCheck className="w-8 h-8 text-editorial-camel shrink-0" />
              <div className="text-xs font-sans">
                <p className="font-bold text-editorial-charcoal">Reserva 100% Segura</p>
                <p className="text-neutral-500">Sin pagos anticipados. Cancelas directamente en el salón de belleza.</p>
              </div>
            </div>
          </div>

          {/* Booking right form side */}
          <div className="lg:col-span-7">
            <EstimatorForm
              selectedServices={selectedServices}
              onRemoveService={handleRemoveServiceId}
              onClearServices={handleClearAllSelected}
            />
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
                onClick={() => scrollToSection('cotizador')}
                className="bg-editorial-camel hover:bg-white hover:text-editorial-camel text-[10px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-none transition-colors duration-200 border border-editorial-camel flex items-center gap-1 cursor-pointer"
              >
                Cotizar Ahora <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
