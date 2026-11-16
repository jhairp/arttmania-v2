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

export const calculateDiscountedPrice = (basePrice: number, quantity: number): {
  unitPrice: number;
  total: number;
  discountPercent: number;
  savings: number;
} => {
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
