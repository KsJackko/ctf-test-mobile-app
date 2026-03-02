import { useRouter } from 'expo-router';

import { PDPPage } from '@/components/pdp/PDPPage';
import type { PdpProductViewModel } from '@/components/pdp/types';

const PDP_PRODUCT_MOCK: PdpProductViewModel = {
  headerTitle: 'Maruko 999 Gold charm',
  cartCount: 2,
  collectionTag: 'App Exclusive',
  title: '18K/750 White Gold diamond ring',
  priceCurrent: 'HK$24,460',
  priceOriginal: 'HK$26,200',
  discountLabel: '-20%',
  images: [
    {
      id: 'ring-1',
      source: require('@/assets/figma/pdp-product-kv-01.png'),
    },
    {
      id: 'ring-2',
      source: require('@/assets/figma/pdp-product-kv-02.png'),
    },
    {
      id: 'ring-3',
      source: require('@/assets/figma/pdp-product-kv-03.png'),
    },
    {
      id: 'ring-4',
      source: require('@/assets/figma/pdp-product-kv-04.png'),
    },
  ],
  sliderIndicatorCount: 4,
  variants: [
    { id: 'size-16', label: '16' },
    { id: 'size-17', label: '17' },
    { id: 'size-18', label: '18' },
    { id: 'size-19', label: '19' },
    { id: 'size-20', label: '20' },
  ],
  ctaLabel: 'ADD TO BAG',
};

export default function PDPRoute() {
  const router = useRouter();

  return <PDPPage product={PDP_PRODUCT_MOCK} onPressCart={() => router.push('/shopping-bag')} />;
}
