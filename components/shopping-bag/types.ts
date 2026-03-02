import type { ImageSourcePropType } from 'react-native';

export type ShoppingBagItem = {
  id: string;
  imageSource: ImageSourcePropType;
  pdpRoute?: string;
  badgeText?: string;
  title: string;
  subtitle?: string;
  metaLines?: string[];
  priceCurrent: string;
  priceOriginal?: string;
  priceCurrentColor?: 'default' | 'accent';
  quantityLabel: string;
  trailingActionLabel: string;
};

export type ShoppingBagGiftItem = {
  id: string;
  imageSource: ImageSourcePropType;
  title: string;
  priceLabel: string;
  quantityLabel: string;
};

export type ShoppingBagActionRow = {
  id: string;
  label: string;
};

export type ShoppingBagSummaryRow = {
  id: string;
  label: string;
  value: string;
};

export type ShoppingBagSummaryData = {
  actionRows: ShoppingBagActionRow[];
  orderTitle: string;
  rows: ShoppingBagSummaryRow[];
  totalLabel: string;
  totalValue: string;
};

export type ShoppingBagViewModel = {
  title: string;
  itemCountLabel: string;
  items: ShoppingBagItem[];
  giftBannerText?: string;
  giftItems?: ShoppingBagGiftItem[];
  summary: ShoppingBagSummaryData;
  ctaLabel: string;
};
