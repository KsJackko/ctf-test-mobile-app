import { StyleSheet, Text, View } from 'react-native';

import { GiftOfferSlider } from '@/components/pdp/GiftOfferSlider';
import { pdpTokens } from '@/components/pdp/pdp-tokens';
import type { PdpGiftOffer } from '@/components/pdp/types';

type ProductInfoBlockProps = {
  collectionTag: string;
  title: string;
  priceCurrent: string;
  priceOriginal?: string;
  discountLabel?: string;
};

const localGiftOffers: PdpGiftOffer[] = [
  {
    id: 'gift-local-1',
    title: 'Maruko Silver Charm',
    subtitle: 'HK$3,800+ spend on Maruko Collection.',
    imageSource: require('@/assets/figma/pdp/gift-offer-thumb-71c548.png'),
  },
  {
    id: 'gift-local-2',
    title: 'Maruko Gold Charm',
    subtitle: 'HK$6,800+ spend on Maruko Collection.',
    imageSource: require('@/assets/figma/pdp/gift-offer-thumb-71c548.png'),
  },
];

export function ProductInfoBlock({
  collectionTag,
  title,
  priceCurrent,
  priceOriginal,
  discountLabel,
}: ProductInfoBlockProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.collectionTag}>{collectionTag}</Text>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.currentPrice}>{priceCurrent}</Text>
        {priceOriginal ? <Text style={styles.originalPrice}>{priceOriginal}</Text> : null}
        {discountLabel ? (
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{discountLabel}</Text>
          </View>
        ) : null}
      </View>

      <GiftOfferSlider offers={localGiftOffers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: pdpTokens.spacing.sm,
    paddingTop: pdpTokens.spacing.sm,
    paddingBottom: pdpTokens.spacing.md,
    gap: pdpTokens.spacing.xs,
  },
  collectionTag: {
    color: pdpTokens.colors.gold,
    fontFamily: pdpTokens.typography.bodySans,
    fontSize: 24 / 2,
    lineHeight: 16,
  },
  title: {
    color: pdpTokens.colors.textPrimary,
    fontFamily: pdpTokens.typography.titleSerif,
    fontSize: 46 / 2,
    lineHeight: 54 / 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  currentPrice: {
    color: pdpTokens.colors.accent,
    fontFamily: pdpTokens.typography.bodySans,
    fontSize: 36 / 2,
    lineHeight: 42 / 2,
  },
  originalPrice: {
    color: pdpTokens.colors.textMuted,
    fontFamily: pdpTokens.typography.bodySans,
    fontSize: 30 / 2,
    lineHeight: 36 / 2,
    textDecorationLine: 'line-through',
  },
  discountTag: {
    backgroundColor: pdpTokens.colors.accent,
    borderRadius: pdpTokens.radius.sm,
    borderBottomLeftRadius: 0,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  discountText: {
    color: pdpTokens.colors.white,
    fontFamily: pdpTokens.typography.bodySans,
    fontSize: 11,
    lineHeight: 14,
  },
});
