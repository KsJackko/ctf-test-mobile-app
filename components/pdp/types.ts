import type { ImageSourcePropType } from 'react-native';

export type PdpImageItem = {
  id: string;
  source: ImageSourcePropType;
};

export type PdpVariantOption = {
  id: string;
  label: string;
  enabled?: boolean;
};

export type PdpGiftOffer = {
  id: string;
  title: string;
  subtitle: string;
  imageSource?: ImageSourcePropType;
};

export type PdpProductViewModel = {
  headerTitle: string;
  cartCount: number;
  collectionTag: string;
  title: string;
  priceCurrent: string;
  priceOriginal?: string;
  discountLabel?: string;
  images: PdpImageItem[];
  sliderIndicatorCount?: number;
  variants: PdpVariantOption[];
  ctaLabel: string;
};
