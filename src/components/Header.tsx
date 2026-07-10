/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MapPin, Instagram, Menu, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Promociones', href: '#promociones' },
    { name: 'Productos', href: '#productos' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <>
      {/* Top Banner with info */}
      <div className="bg-editorial-charcoal text-neutral-200 text-xs py-2.5 px-4 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-white/5 font-sans z-50 relative">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="flex items-center gap-1.5 opacity-90">
            <MapPin className="w-3.5 h-3.5 text-editorial-camel" />
            Frente a La Paco, Escazú, Costa Rica
          </span>
          <span className="flex items-center gap-1.5 opacity-90">
            <Clock className="w-3.5 h-3.5 text-editorial-camel" />
            Lun a Sáb: 9:00 AM - 6:00 PM | Dom: Citas mayores a ₡50k o Eventos
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:71049478"
            className="flex items-center gap-1.5 hover:text-editorial-camel transition-colors opacity-90"
          >
            <Phone className="w-3.5 h-3.5 text-editorial-camel" />
            Tel: 7104-9478
          </a>
          <a
            href="https://instagram.com/nycsalonbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-editorial-camel transition-colors opacity-90"
          >
            <Instagram className="w-3.5 h-3.5 text-editorial-camel" />
            @nycsalonbeauty
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-editorial-sand/95 backdrop-blur-md shadow-xs border-b border-editorial-camel/10 py-3'
            : 'bg-editorial-sand/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo & Name */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-none border border-editorial-camel bg-editorial-charcoal text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-editorial-camel/20" />
              <div className="flex flex-col items-center justify-center -space-y-0.5">
                <span className="font-display font-medium text-xs tracking-widest text-editorial-camel">NYC</span>
                <span className="text-[6.5px] tracking-widest text-neutral-300 font-sans uppercase font-bold">Salón</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl text-editorial-charcoal tracking-tight leading-none group-hover:text-editorial-camel transition-colors">
                NYC Salón
              </span>
              <span className="text-[9px] text-editorial-camel tracking-[0.25em] font-bold font-sans uppercase">
                Beauty Supply
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href === '#cotizador') {
                    e.preventDefault();
                    onOpenBooking?.();
                  }
                }}
                className="text-xs uppercase tracking-widest font-semibold text-editorial-charcoal/80 hover:text-editorial-camel transition-colors duration-200 relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-editorial-camel transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Call to action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking?.()}
              className="border border-editorial-charcoal text-editorial-charcoal hover:bg-editorial-charcoal hover:text-white text-[10px] uppercase tracking-widest font-bold px-6 py-2.5 transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-editorial-camel" />
              Agendar Cita
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-editorial-charcoal hover:text-editorial-camel focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-editorial-sand border-b border-editorial-camel/15 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      if (item.href === '#cotizador') {
                        e.preventDefault();
                        onOpenBooking?.();
                      }
                    }}
                    className="block px-3 py-2.5 text-xs uppercase tracking-widest font-bold text-editorial-charcoal/80 hover:bg-white hover:text-editorial-camel transition-all"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-editorial-camel/15 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenBooking?.();
                    }}
                    className="w-full text-center border border-editorial-charcoal text-editorial-charcoal hover:bg-editorial-charcoal hover:text-white text-[10px] uppercase tracking-widest font-bold py-3 transition-colors block cursor-pointer"
                  >
                    Agendar Cita
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
