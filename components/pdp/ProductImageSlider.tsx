import { Image } from 'expo-image';
import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View, type NativeScrollEvent, type NativeSyntheticEvent } from 'react-native';

import { pdpTokens } from '@/components/pdp/pdp-tokens';
import type { PdpImageItem } from '@/components/pdp/types';

export type ProductImageSliderProps = {
  items: PdpImageItem[];
  initialIndex?: number;
  indicatorCount?: number;
  onIndexChange?: (index: number) => void;
};

export function ProductImageSlider({
  items,
  initialIndex = 0,
  indicatorCount,
  onIndexChange,
}: ProductImageSliderProps) {
  const [index, setIndex] = useState(initialIndex);
  const [sliderWidth, setSliderWidth] = useState(393);
  const safeItems = useMemo(() => (items.length > 0 ? items : []), [items]);
  const pageCount = Math.max(indicatorCount ?? safeItems.length, 1);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / sliderWidth);
    if (nextIndex !== index) {
      setIndex(nextIndex);
      onIndexChange?.(nextIndex);
    }
  };

  if (safeItems.length === 0) {
    return <View style={styles.empty} />;
  }

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        const nextWidth = Math.max(1, Math.round(event.nativeEvent.layout.width));
        if (nextWidth !== sliderWidth) {
          setSliderWidth(nextWidth);
        }
      }}>
      <FlatList
        data={safeItems}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        bounces={false}
        onMomentumScrollEnd={handleScrollEnd}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width: sliderWidth }]}>
            <Image source={item.source} style={styles.image} contentFit="cover" />
          </View>
        )}
      />

      <View style={styles.pagination}>
        {Array.from({ length: pageCount }).map((_, pageIndex) => (
          <View
            key={`page-${pageIndex}`}
            style={[styles.dot, pageIndex === index ? styles.dotActive : undefined]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  empty: {
    width: '100%',
    height: 360,
    backgroundColor: pdpTokens.colors.subtleBg,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 802 / 786,
  },
  pagination: {
    flexDirection: 'row',
    gap: 2,
    paddingHorizontal: pdpTokens.spacing.sm,
    paddingTop: 2,
    paddingBottom: pdpTokens.spacing.sm,
  },
  dot: {
    flex: 1,
    height: 2,
    backgroundColor: '#CFCBC8',
  },
  dotActive: {
    backgroundColor: pdpTokens.colors.textPrimary,
  },
});
