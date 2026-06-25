/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Service, Promo } from '../types';
import { PROMOS } from '../data';
import { Calendar, Clock, User, Phone, Send, CheckCircle2, Ticket, CreditCard, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface EstimatorFormProps {
  selectedServices: Service[];
  onRemoveService: (id: string) => void;
  onClearServices: () => void;
}

export default function EstimatorForm({
  selectedServices,
  onRemoveService,
  onClearServices
}: EstimatorFormProps) {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedStylist, setSelectedStylist] = useState('gilma'); // gilma, nails, barber, any
  const [couponCode, setCouponCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<Promo | null>(null);
  const [couponError, setCouponError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Format money
  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(val);
  };

  // Subtotal
  const subtotal = selectedServices.reduce((acc, curr) => acc + curr.price, 0);

  // Discount calculation
  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountCode === 'PROMOCOLOR15') {
      // 15% off color services
      const colorServicesTotal = selectedServices
        .filter(s => s.id === 'c1' || s.id === 'c2' || s.id === 'c3')
        .reduce((sum, s) => sum + s.price, 0);
      discount = colorServicesTotal * 0.15;
    } else if (appliedPromo.discountCode === 'ACRYLICPEDISP50') {
      // Half off pedicure spa if acryllic full set is selected
      const hasAcrylic = selectedServices.some(s => s.id === 'u1');
      const pedicura = selectedServices.find(s => s.id === 'u3');
      if (hasAcrylic && pedicura) {
        discount = pedicura.price * 0.5;
      } else {
        // Fallback default small discount if they just apply it
        discount = 3000;
      }
    } else if (appliedPromo.discountCode === 'BIENVENIDAORGA') {
      // Treat as free express hydration, value ~₡6000 discount
      discount = 6000;
    }
  }

  const total = Math.max(0, subtotal - discount);

  const handleApplyCoupon = () => {
    setCouponError('');
    if (!couponCode.trim()) {
      setAppliedPromo(null);
      return;
    }
    const found = PROMOS.find(
      p => p.discountCode.toLowerCase() === couponCode.trim().toLowerCase()
    );
    if (found) {
      setAppliedPromo(found);
    } else {
      setCouponError('Código inválido o vencido');
      setAppliedPromo(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert('Por favor selecciona al menos un servicio del menú de servicios más arriba.');
      return;
    }

    if (!clientName.trim() || !clientPhone.trim()) {
      alert('Por favor ingresa tu nombre y número telefónico.');
      return;
    }

    // Determine stylist label
    let stylistLabel = 'Cualquiera';
    if (selectedStylist === 'gilma') stylistLabel = 'Gilma Hernández (Color y Tratamientos)';
    else if (selectedStylist === 'nails') stylistLabel = 'Nail Artist (Especialista en Uñas)';
    else if (selectedStylist === 'barber') stylistLabel = 'Barbero de Turno (Barbería)';

    // Compile WhatsApp message
    const servicesListText = selectedServices
      .map(s => `- ${s.name} (${formatPrice(s.price)})`)
      .join('%0A');

    const promoText = appliedPromo
      ? `%0A🎟️ *Cupón Aplicado:* ${appliedPromo.discountCode} (-${formatPrice(discount)})`
      : '';

    const message = `¡Hola *NYC Salón Beauty Supply*! ✨%0A%0AHe cotizado mi cita desde su sitio web y me gustaría programarla:%0A%0A👤 *Cliente:* ${clientName}%0A📞 *Teléfono:* ${clientPhone}%0A📅 *Fecha deseada:* ${date || 'Por coordinar'}%0A⏰ *Hora deseada:* ${time || 'Por coordinar'}%0A💇‍♀️ *Especialista:* ${stylistLabel}%0A%0A🛍️ *Servicios Solicitados:*%0A${servicesListText}%0A%0A💰 *Resumen:*%0A- Subtotal: ${formatPrice(subtotal)}${promoText}%0A- *Total Estimado:* ${formatPrice(total)}%0A%0A📝 *Notas:* ${notes || 'Ninguna'}`;

    // WhatsApp URL with Costa Rica country code (+506) and their phone number (40345687)
    const url = `https://wa.me/50640345687?text=${message}`;
    setWhatsappUrl(url);
    setBookingSuccess(true);
  };

  const handleReset = () => {
    setBookingSuccess(false);
    setClientName('');
    setClientPhone('');
    setDate('');
    setTime('');
    setNotes('');
    setCouponCode('');
    setAppliedPromo(null);
    onClearServices();
  };

  return (
    <div id="cotizador" className="bg-white rounded-none border border-black/10 overflow-hidden font-sans">
      <div className="bg-editorial-charcoal px-6 py-9 text-center text-white relative border-b border-editorial-camel/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-editorial-camel/10" />
        <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-white">
          Cotiza & Reserva tu Cita
        </h3>
        <p className="text-[11px] text-editorial-camel mt-2.5 max-w-md mx-auto font-medium uppercase tracking-widest">
          Selecciona tus servicios, ingresa tus datos y agenda directamente con nosotros por WhatsApp.
        </p>
      </div>

      {!bookingSuccess ? (
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          {/* Selected Services Summary */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-editorial-charcoal uppercase tracking-widest">
              1. Servicios Seleccionados ({selectedServices.length})
            </label>

            {selectedServices.length === 0 ? (
              <div className="border border-dashed border-editorial-camel/30 rounded-none p-6 text-center bg-editorial-sand/50">
                <p className="text-sm text-neutral-600 font-medium font-display">
                  No has seleccionado servicios aún.
                </p>
                <p className="text-xs text-editorial-camel mt-1 tracking-wide">
                  Haz clic en el botón "+" de los servicios de arriba para agregarlos a tu cotización.
                </p>
              </div>
            ) : (
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 border border-black/5 rounded-none p-3 bg-editorial-sand/40">
                {selectedServices.map(service => (
                  <div
                    key={service.id}
                    className="flex justify-between items-center text-sm p-2 bg-white rounded-none border border-black/5"
                  >
                    <div className="flex flex-col pr-2">
                      <span className="font-semibold text-editorial-charcoal leading-tight">
                        {service.name}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-mono">
                        {service.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-editorial-camel">
                        {formatPrice(service.price)}
                      </span>
                      <button
                        type="button"
                        onClick={() => onRemoveService(service.id)}
                        className="text-xs text-neutral-400 hover:text-editorial-charcoal hover:bg-editorial-sand p-1.5 rounded-none transition-colors"
                        title="Eliminar"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Client Details */}
          <div className="space-y-4">
            <label className="block text-xs font-bold text-editorial-charcoal uppercase tracking-widest">
              2. Tus Datos de Contacto
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-400">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  required
                  placeholder="Tu Nombre Completo *"
                  value={clientName}
                  onChange={e => setClientName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-editorial-sand border border-neutral-200 rounded-none text-sm focus:bg-white focus:ring-1 focus:ring-editorial-camel focus:border-editorial-camel outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-400">
                  <Phone className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  required
                  placeholder="Número de WhatsApp (ej. 8888 8888) *"
                  value={clientPhone}
                  onChange={e => setClientPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-editorial-sand border border-neutral-200 rounded-none text-sm focus:bg-white focus:ring-1 focus:ring-editorial-camel focus:border-editorial-camel outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Appointment Logistics */}
          <div className="space-y-4">
            <label className="block text-xs font-bold text-editorial-charcoal uppercase tracking-widest">
              3. Fecha, Hora y Especialista
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Date */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-400">
                  <Calendar className="w-4 h-4" />
                </span>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-editorial-sand border border-neutral-200 rounded-none text-sm focus:bg-white focus:ring-1 focus:ring-editorial-camel focus:border-editorial-camel outline-none transition-all"
                />
              </div>

              {/* Time */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-400">
                  <Clock className="w-4 h-4" />
                </span>
                <input
                  type="time"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-editorial-sand border border-neutral-200 rounded-none text-sm focus:bg-white focus:ring-1 focus:ring-editorial-camel focus:border-editorial-camel outline-none transition-all"
                />
              </div>

              {/* Stylist Selector */}
              <div className="relative">
                <select
                  value={selectedStylist}
                  onChange={e => setSelectedStylist(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-editorial-sand border border-neutral-200 rounded-none text-sm focus:bg-white focus:ring-1 focus:ring-editorial-camel focus:border-editorial-camel outline-none transition-all appearance-none"
                >
                  <option value="gilma">Gilma (Color y Tratamiento)</option>
                  <option value="nails">Nail Artist (Uñas)</option>
                  <option value="barber">Barbero (Barbería)</option>
                  <option value="any">Cualquier Profesional</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-neutral-400">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-editorial-charcoal uppercase tracking-widest">
              4. Detalles o Consultas Adicionales (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ej. Tengo cabello largo y tinturado, deseo un tono chocolate..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full p-4 bg-editorial-sand border border-neutral-200 rounded-none text-sm focus:bg-white focus:ring-1 focus:ring-editorial-camel focus:border-editorial-camel outline-none transition-all resize-none"
            />
          </div>

          {/* Coupon Code Section */}
          <div className="border-t border-black/5 pt-5 space-y-3">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-400">
                  <Ticket className="w-4 h-4 text-neutral-400" />
                </span>
                <input
                  type="text"
                  placeholder="Ingresar Código de Cupón (Ej: PROMOCOLOR15)"
                  value={couponCode}
                  onChange={e => setCouponCode(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-editorial-sand border border-neutral-200 rounded-none text-xs focus:bg-white focus:ring-1 focus:ring-editorial-camel focus:border-editorial-camel outline-none transition-all"
                />
              </div>
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="bg-editorial-charcoal hover:bg-editorial-camel text-white text-xs uppercase tracking-widest font-bold px-6 py-2.5 rounded-none transition-colors"
              >
                Aplicar
              </button>
            </div>

            {couponError && (
              <p className="text-[11px] text-red-600 font-medium pl-1">{couponError}</p>
            )}

            {appliedPromo && (
              <div className="bg-emerald-50 text-emerald-800 text-xs p-3 rounded-none border border-emerald-100 flex justify-between items-center">
                <span className="font-semibold flex items-center gap-1">
                  ✨ Cupón "{appliedPromo.discountCode}" aplicado exitosamente!
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setAppliedPromo(null);
                    setCouponCode('');
                  }}
                  className="font-bold hover:text-emerald-950 text-emerald-600"
                >
                  Remover
                </button>
              </div>
            )}
          </div>

          {/* Pricing breakdown */}
          <div className="bg-editorial-sand rounded-none p-5 border border-black/5 space-y-2.5">
            <div className="flex justify-between text-xs text-neutral-600">
              <span>Subtotal de servicios:</span>
              <span className="font-medium font-mono">{formatPrice(subtotal)}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-xs text-emerald-700">
                <span>Descuento aplicado:</span>
                <span className="font-semibold font-mono">-{formatPrice(discount)}</span>
              </div>
            )}

            <div className="border-t border-black/10 pt-2.5 flex justify-between items-center">
              <span className="text-sm font-bold text-editorial-charcoal uppercase tracking-wider">Total Estimado:</span>
              <span className="text-xl font-bold text-editorial-camel font-sans">
                {formatPrice(total)}
              </span>
            </div>
            <p className="text-[10px] text-neutral-500 text-center pt-2 leading-tight">
              * Nota: El precio final puede variar ligeramente según la complejidad o largo de cabello durante la valoración presencial en el salón.
            </p>
          </div>

          {/* Call to action */}
          <button
            type="submit"
            disabled={selectedServices.length === 0}
            className={`w-full py-4 rounded-none font-bold text-xs uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-all duration-300 ${
              selectedServices.length === 0
                ? 'bg-neutral-300 cursor-not-allowed'
                : 'bg-editorial-charcoal hover:bg-editorial-camel hover:text-white'
            }`}
          >
            <Send className="w-4 h-4" /> Enviar Reserva por WhatsApp
          </button>
        </form>
      ) : (
        /* Success State */
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 text-center space-y-6"
        >
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-none flex items-center justify-center mx-auto border border-emerald-100">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h4 className="font-display font-semibold text-xl text-editorial-charcoal">
              ¡Cotización Lista para Enviar!
            </h4>
            <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
              Hemos preparado los detalles de tu cita. Haz clic en el botón de abajo para abrir WhatsApp y enviar los detalles directamente a <strong>NYC Salón Beauty Supply</strong>.
            </p>
          </div>

          {/* Details compiled */}
          <div className="bg-editorial-sand rounded-none p-4 text-left border border-black/5 max-w-sm mx-auto space-y-2 text-xs">
            <div>
              <span className="text-neutral-500">Cliente:</span>{' '}
              <strong className="text-editorial-charcoal">{clientName}</strong>
            </div>
            <div>
              <span className="text-neutral-500">Servicios:</span>{' '}
              <strong className="text-editorial-charcoal">
                {selectedServices.map(s => s.name).join(', ')}
              </strong>
            </div>
            <div>
              <span className="text-neutral-500">Fecha y Hora:</span>{' '}
              <strong className="text-editorial-charcoal">
                {date || 'Por acordar'} - {time || 'Por acordar'}
              </strong>
            </div>
            <div>
              <span className="text-neutral-500">Total Estimado:</span>{' '}
              <strong className="text-editorial-camel font-sans">{formatPrice(total)}</strong>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-editorial-charcoal hover:bg-editorial-camel text-white text-xs uppercase tracking-widest font-bold py-3.5 px-4 rounded-none flex items-center justify-center gap-2 transition-colors"
            >
              <Send className="w-4 h-4" /> Abrir WhatsApp Now
            </a>

            <button
              onClick={handleReset}
              className="flex-1 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-xs uppercase tracking-widest font-bold py-3.5 px-4 rounded-none transition-colors"
            >
              Nueva Cotización
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
