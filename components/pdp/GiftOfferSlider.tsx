import { Image } from 'expo-image';
import { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { pdpTokens } from '@/components/pdp/pdp-tokens';
import type { PdpGiftOffer } from '@/components/pdp/types';

export type GiftOfferSliderProps = {
  offers: PdpGiftOffer[];
};

const SNAP_INTERVAL = pdpTokens.gift.cardWidth + pdpTokens.gift.sliderGap;
const GIFT_CARD_BG = require('@/assets/figma/pdp/gift-offer-card-bg.png');
const GIFT_INFO_ICON = require('@/assets/figma/pdp/gift-offer-info.png');
const GIFT_DEFAULT_IMAGE = require('@/assets/figma/pdp/gift-offer-thumb-71c548.png');

export function GiftOfferSlider({ offers }: GiftOfferSliderProps) {
  const safeOffers = useMemo(() => offers ?? [], [offers]);

  if (safeOffers.length === 0) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={safeOffers}
        keyExtractor={(item) => item.id}
        horizontal
        bounces={false}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        snapToAlignment="start"
        contentContainerStyle={styles.sliderContent}
        ItemSeparatorComponent={() => <View style={{ width: pdpTokens.gift.sliderGap }} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={GIFT_CARD_BG} style={styles.bgImage} contentFit="fill" />

            {item.imageSource ? (
              <Image source={item.imageSource} style={styles.image} contentFit="cover" />
            ) : (
              <Image source={GIFT_DEFAULT_IMAGE} style={styles.image} contentFit="cover" />
            )}

            <View style={styles.textBlock}>
              <View style={styles.titleRow}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
                <Image source={GIFT_INFO_ICON} style={styles.infoIcon} contentFit="contain" />
              </View>
              <Text style={styles.subtitle} numberOfLines={1}>
                {item.subtitle}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: pdpTokens.spacing.xs,
  },
  sliderContent: {
    paddingHorizontal: pdpTokens.gift.sidePadding,
    paddingRight: pdpTokens.gift.sidePadding + 28,
  },
  card: {
    width: pdpTokens.gift.cardWidth,
    height: pdpTokens.gift.cardHeight,
    overflow: 'hidden',
    position: 'relative',
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: pdpTokens.gift.imageSize,
    height: pdpTokens.gift.imageSize,
    borderWidth: 1,
    borderColor: pdpTokens.gift.imageBorder,
    backgroundColor: '#FFFFFF',
  },
  textBlock: {
    position: 'absolute',
    left: pdpTokens.gift.imageSize + pdpTokens.gift.contentInsetLeft,
    top: pdpTokens.gift.contentInsetTop,
    width: pdpTokens.gift.contentWidth,
    height: 38,
    gap: 4,
  },
  titleRow: {
    width: pdpTokens.gift.titleRowWidth,
    height: pdpTokens.gift.titleRowHeight,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  infoIcon: {
    width: 14,
    height: 14,
  },
  title: {
    color: pdpTokens.gift.textColor,
    fontFamily: pdpTokens.typography.bodySans,
    fontSize: 14,
    lineHeight: 20,
    flexShrink: 1,
  },
  subtitle: {
    color: pdpTokens.gift.textColor,
    fontFamily: pdpTokens.typography.bodySans,
    fontSize: 12,
    lineHeight: 14,
  },
});
