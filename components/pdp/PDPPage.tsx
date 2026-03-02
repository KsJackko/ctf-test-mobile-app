import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BenefitRow } from '@/components/pdp/BenefitRow';
import { PDPBottomBar } from '@/components/pdp/PDPBottomBar';
import { PDPHeader } from '@/components/pdp/PDPHeader';
import { ProductImageSlider } from '@/components/pdp/ProductImageSlider';
import { ProductInfoBlock } from '@/components/pdp/ProductInfoBlock';
import { VariantSelector } from '@/components/pdp/VariantSelector';
import { pdpTokens } from '@/components/pdp/pdp-tokens';
import type { PdpProductViewModel } from '@/components/pdp/types';

type PDPPageProps = {
  product: PdpProductViewModel;
  onPressCart?: () => void;
};

const BOTTOM_BAR_BASE_HEIGHT = 82;

export function PDPPage({ product, onPressCart }: PDPPageProps) {
  const insets = useSafeAreaInsets();
  const defaultVariant = useMemo(
    () => product.variants.find((variant) => variant.enabled !== false)?.id ?? '',
    [product.variants]
  );
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant);

  return (
    <View style={styles.page}>
      <PDPHeader cartCount={product.cartCount} topInset={insets.top} onCartPress={onPressCart} />

      <ScrollView
        bounces={false}
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: BOTTOM_BAR_BASE_HEIGHT + insets.bottom + pdpTokens.spacing.md },
        ]}>
        <ProductImageSlider
          items={product.images}
          initialIndex={0}
          indicatorCount={product.sliderIndicatorCount}
        />

        <ProductInfoBlock
          collectionTag={product.collectionTag}
          title={product.title}
          priceCurrent={product.priceCurrent}
          priceOriginal={product.priceOriginal}
          discountLabel={product.discountLabel}
        />

        <BenefitRow />

        <VariantSelector
          options={product.variants}
          selectedId={selectedVariant}
          onSelect={setSelectedVariant}
        />
      </ScrollView>

      <View style={styles.bottomFixed}>
        <PDPBottomBar label={product.ctaLabel} insetBottom={insets.bottom} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: pdpTokens.colors.pageBg,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: BOTTOM_BAR_BASE_HEIGHT,
  },
  bottomFixed: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
