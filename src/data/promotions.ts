export interface TierDiscount {
  minQty: number;
  discountPercent: number;
  label: string;
}

export const TIER_DISCOUNTS: TierDiscount[] = [
  { minQty: 1, discountPercent: 0, label: 'Precio Minorista' },
  { minQty: 12, discountPercent: 10, label: '10% OFF (Docena)' },
  { minQty: 50, discountPercent: 18, label: '18% OFF (50+ uds)' },
  { minQty: 100, discountPercent: 25, label: '25% OFF (100+ uds)' },
  { minQty: 500, discountPercent: 35, label: '35% OFF (Producción Mayorista)' }
];

export const calculateDiscountedPrice = (
  basePrice: number,
  quantity: number,
  selectedTechnique?: string
): {
  unitPrice: number;
  total: number;
  discountPercent: number;
  savings: number;
} => {
  // Opción de Logos Medianos a 38 Bs.
  if (selectedTechnique && selectedTechnique.toLowerCase().includes('38')) {
    const unitPrice = 38;
    const total = unitPrice * quantity;
    const originalTotal = Math.max(basePrice, 65) * quantity;
    const savings = Math.max(0, originalTotal - total);
    const discountPercent = originalTotal > 0 ? Math.round((savings / originalTotal) * 100) : 0;
    return { unitPrice, total, discountPercent, savings };
  }

  // Estándar de poleras (65 Bs. uno | 120 Bs. el par) para cantidades menores a docena
  if (basePrice === 65 && quantity >= 2 && quantity < 12) {
    const pairs = Math.floor(quantity / 2);
    const remainder = quantity % 2;
    const total = pairs * 120 + remainder * 65;
    const unitPrice = Math.round(total / quantity);
    const originalTotal = basePrice * quantity;
    const savings = originalTotal - total;
    const discountPercent = Math.round((savings / originalTotal) * 100);
    return { unitPrice, total, discountPercent, savings };
  }

  let discountPercent = 0;
  for (const tier of [...TIER_DISCOUNTS].sort((a, b) => b.minQty - a.minQty)) {
    if (quantity >= tier.minQty) {
      discountPercent = tier.discountPercent;
      break;
    }
  }

  const unitPrice = Math.round(basePrice * (1 - discountPercent / 100));
  const total = unitPrice * quantity;
  const originalTotal = basePrice * quantity;
  const savings = originalTotal - total;

  return { unitPrice, total, discountPercent, savings };
};
