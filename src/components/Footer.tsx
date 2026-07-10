/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink, Globe, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="ubicacion" className="bg-neutral-950 text-neutral-300 font-sans pt-16 pb-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-none border border-neutral-800 bg-black text-white overflow-hidden shadow-inner">
                <div className="flex flex-col items-center justify-center -space-y-0.5">
                  <span className="font-display font-semibold text-xs tracking-widest text-editorial-camel">NYC</span>
                  <span className="text-[7.5px] tracking-widest text-neutral-400 font-sans uppercase font-bold">Salón</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-medium text-lg text-white tracking-tight leading-none">
                  NYC Salón
                </span>
                <span className="text-[10px] text-editorial-camel tracking-widest font-bold uppercase font-sans">
                  Beauty Supply
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Especialistas en color, tratamientos capilares orgánicos, manicura acrílica y barbería. Ofrecemos una experiencia femenina, relajante y profesional con marcas líderes del mercado en Escazú.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/nycsalonbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-neutral-900 hover:bg-editorial-camel/10 flex items-center justify-center border border-neutral-800 text-editorial-camel hover:text-white transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-sans font-bold text-xs text-editorial-camel uppercase tracking-widest">
              Contáctanos
            </h4>

            <ul className="space-y-4 text-xs font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-editorial-camel shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-neutral-200">Ubicación física:</p>
                  <p className="text-neutral-400 leading-relaxed">Frente al Centro Comercial La Paco, San Rafael de Escazú, San José, Costa Rica</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-editorial-camel shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-neutral-200">Área de servicio:</p>
                  <p className="text-neutral-400">San José, Provincia de San José, Costa Rica</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-editorial-camel shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-neutral-200">Teléfono Celular:</p>
                  <a href="tel:71049478" className="text-editorial-camel hover:underline hover:text-white">
                    7104-9478
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-editorial-camel shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-neutral-200">Correo Electrónico:</p>
                  <a href="mailto:gilma45hernandez@gmail.com" className="text-editorial-camel hover:underline hover:text-white">
                    gilma45hernandez@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Map/Interactive Visual and Hours */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-sans font-bold text-xs text-editorial-camel uppercase tracking-widest">
              Ubicación e Horarios
            </h4>

            <div className="space-y-4 font-sans">
              {/* Hours summary */}
              <div className="bg-neutral-900/60 rounded-none p-3 border border-neutral-900 text-xs space-y-2">
                <div className="flex justify-between items-center text-neutral-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-editorial-camel" /> Lunes a Sábado:
                  </span>
                  <span className="text-neutral-200 font-semibold font-mono">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex flex-col gap-1 text-neutral-400">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-editorial-camel" /> Domingo:
                    </span>
                    <span className="text-editorial-camel font-semibold text-right font-sans">Eventos y citas mayores a ₡50.000</span>
                  </div>
                  <p className="text-[10px] text-neutral-500 text-right leading-none mt-0.5">Programadas previamente</p>
                </div>
              </div>

              {/* Styled interactive map card linking out */}
              <div className="relative rounded-none overflow-hidden aspect-video border border-neutral-800 bg-neutral-900 shadow-lg">
                <iframe
                  title="Mapa de Ubicación NYC Salón"
                  src="https://maps.google.com/maps?q=NYC%20Sal%C3%B3n,%20Escaz%C3%BA,%20Costa%20Rica&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full filter invert-[90%] hue-rotate-[180deg] contrast-[100%] opacity-85"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
                
                <a
                  href="https://maps.app.goo.gl/1tzPzERZ9gRcsbDX9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 bg-neutral-950/90 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-none flex items-center gap-1 border border-neutral-800 hover:bg-editorial-camel hover:border-editorial-camel hover:text-white transition-all cursor-pointer shadow-md"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-neutral-500 font-sans">
          <p>© {currentYear} NYC Salón Beauty Supply. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-neutral-600 hover:text-editorial-camel transition-colors">
            Hecho con amor y elegancia para NYC Salón <Sparkles className="w-3 h-3 text-editorial-camel" />
          </p>
        </div>
      </div>
    </footer>
  );
}
