import { COMPANY_INFO } from '../data/company';
import { checkIsChristmasActive, SEASONAL_CONFIG } from '../config/seasonal';

export interface CartOrderSummary {
  items: {
    name: string;
    quantity: number;
    price: number;
    color?: string;
    size?: string;
    technique?: string;
    customText?: string;
    customNote?: string;
  }[];
  total: number;
  customerName?: string;
  customerCompany?: string;
  customerCity?: string;
  notes?: string;
}

export function buildWhatsAppQuoteUrl(order: CartOrderSummary): string {
  const isChristmas = checkIsChristmasActive();
  const greeting = isChristmas ? `${SEASONAL_CONFIG.texts.whatsappGreeting}\n` : '';
  let message = `${greeting}*SOLICITUD DE COTIZACIÓN - ARTTMANIA*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;

  if (order.customerName) {
    message += `Cliente: ${order.customerName}\n`;
  }
  if (order.customerCompany) {
    message += `Empresa / Institución: ${order.customerCompany}\n`;
  }
  if (order.customerCity) {
    message += `Ciudad: ${order.customerCity}\n`;
  }
  message += `\n*DETALLE DE PRODUCTOS:*\n`;

  order.items.forEach((item, index) => {
    message += `\n*${index + 1}. ${item.name}*\n`;
    message += `   • Cantidad: ${item.quantity} unidades\n`;
    message += `   • P. Unit: ${item.price} Bs.\n`;
    message += `   • Subtotal: ${item.quantity * item.price} Bs.\n`;
    if (item.technique) message += `   • Técnica: ${item.technique}\n`;
    if (item.color) message += `   • Color: ${item.color}\n`;
    if (item.size) message += `   • Talla/Medida: ${item.size}\n`;
    if (item.customText) message += `   • Texto Personalizado: "${item.customText}"\n`;
    if (item.customNote) message += `   • Detalle extra: ${item.customNote}\n`;
  });

  message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*TOTAL ESTIMADO: ${order.total} Bs.*\n`;

  if (order.notes) {
    message += `\nObservaciones adicionales: ${order.notes}\n`;
  }

  message += `\nHola ARTTMANIA. Deseo confirmar disponibilidad, plazos de entrega y coordinar el envío de mi diseño.`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encoded}`;
}

export function buildDirectProductQuoteUrl(productName: string, quantity = 1, technique = ''): string {
  const isChristmas = checkIsChristmasActive();
  const greeting = isChristmas ? `${SEASONAL_CONFIG.texts.whatsappGreeting}\n` : '';
  let text = `${greeting}*CONSULTA DE PRODUCTO - ARTTMANIA*\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `Hola. Quisiera cotizar el siguiente producto:\n\n`;
  text += `Producto: ${productName}\n`;
  text += `Cantidad aproximada: ${quantity} unidades\n`;
  if (technique) {
    text += `Técnica sugerida: ${technique}\n`;
  }
  text += `\n¿Podrían brindarme información sobre precios por mayor y plazos de producción? Muchas gracias.`;

  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function buildCorporateQuoteUrl(data: {
  companyName: string;
  contactName: string;
  phone: string;
  itemType: string;
  quantity: string;
  details: string;
}): string {
  const isChristmas = checkIsChristmasActive();
  const greeting = isChristmas ? `${SEASONAL_CONFIG.texts.whatsappGreeting}\n` : '';
  let text = `${greeting}*SOLICITUD CORPORATIVA / PRODUCCIÓN POR VOLUMEN - ARTTMANIA*\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `Empresa: ${data.companyName}\n`;
  text += `Contacto: ${data.contactName}\n`;
  text += `Teléfono: ${data.phone}\n`;
  text += `Tipo de producto requerido: ${data.itemType}\n`;
  text += `Volumen estimado: ${data.quantity} unidades\n`;
  text += `Detalle del requerimiento: ${data.details}\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `Requerimos cotización formal con descuento por volumen y tiempos de entrega.`;

  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}
