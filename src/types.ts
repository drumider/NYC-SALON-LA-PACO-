/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number; // in Costa Rican Colones (₡)
  category: 'cabello' | 'uñas' | 'barberia';
  duration: string; // e.g. "1h 30m"
  isPopular?: boolean;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  discountCode: string;
  discountValue: string;
  expiryDate: string;
}

export interface AppointmentEstimate {
  servicesSelected: string[];
  clientName: string;
  clientPhone: string;
  date: string;
  time: string;
  notes: string;
  hairLength?: 'corto' | 'mediano' | 'largo';
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  price: string;
  image: string;
  description: string;
  benefits: string[];
  inStock: boolean;
  category: 'shampoo' | 'mascarilla' | 'acondicionador' | 'estilizado' | 'corporal';
}

