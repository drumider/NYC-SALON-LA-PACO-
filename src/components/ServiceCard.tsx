/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Service } from '../types';
import { Clock, Plus, Check, Star } from 'lucide-react';

interface ServiceCardProps {
  key?: string;
  service: Service;
  isSelected: boolean;
  onToggleSelect: () => void;
}

export default function ServiceCard({ service, isSelected, onToggleSelect }: ServiceCardProps) {
  // Format price helper (Colon ₡)
  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div
      onClick={onToggleSelect}
      className={`relative rounded-none p-5 border transition-all duration-300 cursor-pointer select-none h-full flex flex-col justify-between ${
        isSelected
          ? 'bg-editorial-sand border-editorial-camel shadow-xs ring-1 ring-editorial-camel/30 translate-y-[-1px]'
          : 'bg-white border-black/5 hover:border-editorial-camel/30 hover:shadow-xs hover:translate-y-[-1px]'
      }`}
    >
      {/* Popular badge */}
      {service.isPopular && (
        <span className="absolute -top-3 left-4 bg-editorial-camel text-white text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 shadow-xs flex items-center gap-1">
          <Star className="w-2.5 h-2.5 fill-current" /> Popular
        </span>
      )}

      {/* Header and details */}
      <div className="space-y-3">
        <div className="flex justify-between items-start gap-3 pt-1">
          <h3 className="font-display font-bold text-base text-editorial-charcoal tracking-tight leading-tight group-hover:text-editorial-camel transition-colors">
            {service.name}
          </h3>
          <span className="font-sans font-bold text-sm text-editorial-camel whitespace-nowrap">
            {formatPrice(service.price)}
          </span>
        </div>

        <p className="text-xs text-neutral-600 leading-relaxed font-sans line-clamp-3">
          {service.description}
        </p>
      </div>

      {/* Footer and selection trigger */}
      <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between">
        <span className="flex items-center gap-1 text-[11px] text-neutral-500 font-medium font-mono">
          <Clock className="w-3.5 h-3.5 text-neutral-400" />
          {service.duration}
        </span>

        {/* Custom button/status */}
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-none transition-all duration-200 ${
            isSelected
              ? 'bg-editorial-charcoal text-white shadow-xs'
              : 'bg-editorial-sand text-editorial-camel hover:bg-editorial-camel hover:text-white'
          }`}
        >
          {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </div>
    </div>
  );
}
