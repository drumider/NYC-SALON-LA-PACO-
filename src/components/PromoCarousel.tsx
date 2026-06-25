/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PROMOS } from '../data';
import { Promo } from '../types';
import { Ticket, Copy, Check, Gift, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function PromoCarousel() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col items-center text-center space-y-2">
        <span className="border border-editorial-camel/30 bg-editorial-sand text-editorial-camel text-[9px] font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1">
          <Gift className="w-3.5 h-3.5" /> Especiales del Mes
        </span>
        <h2 className="font-display font-bold text-3xl text-editorial-charcoal tracking-tight">
          Promociones Exclusivas
        </h2>
        <p className="text-xs text-neutral-600 max-w-lg">
          Disfruta de nuestros descuentos de temporada. Copia el código y úsalo en el cotizador interactivo para calcular tu precio final especial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {PROMOS.map((promo) => (
          <div
            key={promo.id}
            className="bg-white border border-black/5 rounded-none p-6 shadow-xs hover:border-editorial-camel/20 transition-all relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top decorative circle cutout to simulate a ticket */}
            <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#FAF7F5] rounded-full border-r border-black/5 -translate-y-1/2" />
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#FAF7F5] rounded-full border-l border-black/5 -translate-y-1/2" />

            <div className="space-y-4">
              {/* Promo Badge */}
              <div className="flex justify-between items-start">
                <span className="bg-editorial-sand text-editorial-camel text-xs font-bold px-2.5 py-1 rounded-none border border-editorial-camel/20">
                  {promo.discountValue} Off
                </span>
                <span className="text-[10px] text-neutral-400 font-medium font-mono uppercase bg-neutral-50 px-2 py-1 rounded-none">
                  {promo.expiryDate}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-1">
                <h4 className="font-display font-bold text-lg text-editorial-charcoal tracking-tight">
                  {promo.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {promo.description}
                </p>
              </div>
            </div>

            {/* Promo Code Box */}
            <div className="mt-6 pt-4 border-t border-dashed border-black/5 flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider">Código de Cupón:</span>
                <span className="font-mono font-bold text-sm text-editorial-charcoal tracking-wider">
                  {promo.discountCode}
                </span>
              </div>

              <button
                onClick={() => handleCopy(promo.discountCode, promo.id)}
                className={`p-2.5 rounded-none border flex items-center justify-center transition-all ${
                  copiedId === promo.id
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-editorial-sand hover:bg-editorial-camel/10 text-editorial-camel border-editorial-camel/20'
                }`}
                title="Copiar código"
              >
                {copiedId === promo.id ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
